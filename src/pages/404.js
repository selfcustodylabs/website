import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { CategorySection } from "@site/src/components";
import PageHeader from "@site/src/components/homepage/PageHeader";

export default function NotFound() {
  const quickLinks = [
    {
      icon: HomeRoundedIcon,
      title: "Homepage",
      description: "Return to the main page and start fresh.",
      href: "/",
    },
    {
      icon: SchoolRoundedIcon,
      title: "Learn",
      description: "Educational content about Bitcoin self-custody.",
      href: "/learn/",
    },
    {
      icon: MenuBookRoundedIcon,
      title: "Guides",
      description: "Step-by-step tutorials and hands-on how-tos.",
      href: "/guides/",
    },
    {
      icon: HelpOutlineRoundedIcon,
      title: "FAQ",
      description: "Answers to the most common self-custody questions.",
      href: "/docs/reference/faq/",
    },
  ];

  return (
    <Layout
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved."
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main className="homepage relative bg-neutral-950 text-white">
        <PageHeader
          eyebrow="404"
          title={
            <>
              Page{" "}
              <span
                className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
              >
                Not Found
              </span>
            </>
          }
          subtitle="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <div className="mx-auto mb-12 flex max-w-xl items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-white/65">
            <SearchRoundedIcon sx={{ fontSize: 18 }} className="text-amber-400" />
            <span>Try the search bar in the navigation to find what you need</span>
          </div>

          <CategorySection
            title="Popular Destinations"
            description="Here are a few places that might help you find your way."
            items={quickLinks}
          />

          <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-glow transition-all duration-300 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-glow-strong"
            >
              <ArrowBackRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
