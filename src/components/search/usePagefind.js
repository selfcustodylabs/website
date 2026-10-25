import { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/** One shared Pagefind instance per page load, created on first use. */
let pagefindPromise = null;

function loadPagefind(url) {
  if (!pagefindPromise) {
    // webpackIgnore: the bundle is written by plugins/pagefind after the site
    // is built, so it must be fetched at runtime, never bundled.
    pagefindPromise = import(/* webpackIgnore: true */ url)
      .then(async (pagefind) => {
        await pagefind.options({ excerptLength: 22 });
        await pagefind.init();
        return pagefind;
      })
      .catch((error) => {
        pagefindPromise = null;
        throw error;
      });
  }
  return pagefindPromise;
}

/**
 * Turn a URL into the mono eyebrow the OG cards use: /docs/learn/keys/random/
 * becomes "LEARN / KEYS".
 *
 * @param {string} url
 * @returns {string}
 */
export function sectionLabel(url) {
  const parts = url.split('#')[0].split('/').filter(Boolean);
  if (parts[0] === 'docs') parts.shift();
  const trail = parts.length > 1 ? parts.slice(0, -1) : parts;
  return trail.slice(0, 2).join(' / ').replace(/-/g, ' ');
}

/** Docusaurus puts a zero-width space in each heading's anchor link. */
const clean = (text) => (text ?? '').replace(/\u200b/g, '').trim();

function normalise(data, query) {
  const title = clean(data.meta?.title) || data.url;
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const titleMatches = terms.some((t) => title.toLowerCase().includes(t));
  // The first sub-result is usually the page itself; a later one names the
  // section that matched. Land on that section, unless the query names the
  // page itself, in which case the top of the page is the better answer.
  const section = titleMatches
    ? null
    : (data.sub_results ?? []).find((s) => s.url.includes('#') && clean(s.title) && clean(s.title) !== title);
  return {
    url: data.url,
    target: section ? section.url : data.url,
    title,
    heading: section ? clean(section.title) : null,
    excerpt: section ? section.excerpt : data.excerpt,
    section: sectionLabel(data.url),
  };
}

/**
 * Run a Pagefind query in the browser.
 *
 * Status is "idle" for an empty query, "loading" while the index fragments
 * arrive, "done" with results, or "unavailable" when there is no index (the
 * dev server, which never runs postBuild).
 *
 * @param {string} query
 * @param {{limit?: number}} [options]
 * @returns {{status: string, results: Array<object>, total: number}}
 */
export default function usePagefind(query, { limit = 8 } = {}) {
  const url = useBaseUrl('/pagefind/pagefind.js');
  const [state, setState] = useState({ status: 'idle', results: [], total: 0 });

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setState({ status: 'idle', results: [], total: 0 });
      return undefined;
    }
    let cancelled = false;
    setState((s) => ({ ...s, status: 'loading' }));
    loadPagefind(url)
      .then(async (pagefind) => {
        const search = await pagefind.debouncedSearch(q, {}, 120);
        if (cancelled || search === null) return;
        const data = await Promise.all(search.results.slice(0, limit).map((r) => r.data()));
        if (!cancelled) {
          setState({ status: 'done', results: data.map((d) => normalise(d, q)), total: search.results.length });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'unavailable', results: [], total: 0 });
      });
    return () => {
      cancelled = true;
    };
  }, [query, limit, url]);

  return state;
}
