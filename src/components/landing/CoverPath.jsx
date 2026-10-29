import React from "react";
import Link from "@docusaurus/Link";

import styles from "./CoverPath.module.css";

/*
 * The drawings copy the OG card motifs in scripts/og_theme.py (draw_die,
 * m_airgap, m_network) on a 240 x 150 grid, in the same grammar: dim2 at 2 for
 * context, amber at 3 for the one thing each drawing is about.
 */

const LO = 0.27;
const MID = 0.5;
const HI = 0.73;

/** Pip positions per face, as draw_die lays them out. */
const FACES = {
  1: [[MID, MID]],
  2: [[LO, LO], [HI, HI]],
  3: [[LO, LO], [MID, MID], [HI, HI]],
  4: [[LO, LO], [HI, LO], [LO, HI], [HI, HI]],
  5: [[LO, LO], [HI, LO], [MID, MID], [LO, HI], [HI, HI]],
  6: [[LO, LO], [HI, LO], [LO, MID], [HI, MID], [LO, HI], [HI, HI]],
};

/** One roll, left to right and top to bottom: [face, tone]. One die is lit. */
const ROLL = [
  [3, "dark"], [6, "warm"], [1, "dark"], [5, "dark"], [2, "dark"],
  [4, "dark"], [2, "dark"], [6, "lit"], [3, "dark"], [5, "warm"],
  [1, "warm"], [5, "dark"], [4, "dark"], [6, "warm"], [3, "dark"],
];

function Dice() {
  const size = 36;
  const step = size + 10;
  return (
    <>
      {ROLL.map(([face, tone], i) => {
        const x = 10 + (i % 5) * step;
        const y = 11 + Math.floor(i / 5) * step;
        return (
          <g key={i} className={styles[tone]}>
            <rect x={x} y={y} width={size} height={size} rx={size * 0.22} />
            {FACES[face].map(([px, py]) => (
              <circle key={`${px}-${py}`} cx={x + px * size} cy={y + py * size} r={size * 0.072} />
            ))}
          </g>
        );
      })}
    </>
  );
}

/** The code that crosses the gap: finder corners solid, the rest one fixed pattern. */
const QR = ["1110111", "1111111", "1110111", "0101101", "1110110", "1111001", "1110111"];

function AirGap() {
  const cell = 6.5;
  const x0 = 120 - (7 * cell) / 2;
  const y0 = 75 - (7 * cell) / 2;
  return (
    <>
      {[10, 170].map((x) => (
        <g key={x} className={styles.context}>
          <rect x={x} y={25} width={60} height={100} rx={10} />
          <rect className={styles.screen} x={x + 10} y={37} width={40} height={58} rx={4} />
          <circle cx={x + 30} cy={110} r={6} />
        </g>
      ))}
      <path className={styles.gap} d="M84 8V142M156 8V142" />
      <rect className={styles.subject} x={x0 - 6} y={y0 - 6} width={7 * cell + 12} height={7 * cell + 12} rx={6} />
      {QR.flatMap((row, r) =>
        [...row].map((on, c) =>
          on === "1" ? (
            <rect
              key={`${r}-${c}`}
              className={styles.cell}
              x={x0 + c * cell}
              y={y0 + r * cell}
              width={cell - 1.2}
              height={cell - 1.2}
              rx={0.6}
            />
          ) : null,
        ),
      )}
    </>
  );
}

const PEERS = [
  [26, 30], [88, 18], [158, 26], [216, 20],
  [34, 84], [208, 82],
  [22, 130], [92, 132], [152, 126], [218, 128],
];
/** Peer to peer links, by index into PEERS. */
const MESH = [[0, 1], [1, 2], [2, 3], [0, 4], [3, 5], [4, 6], [5, 9], [6, 7], [7, 8], [8, 9], [1, 4], [2, 5]];
/** The peers your own node talks to. */
const LINKS = [1, 2, 4, 5, 7, 8];
const YOURS = [120, 76];

function Network() {
  return (
    <>
      {MESH.map(([a, b]) => (
        <line key={`${a}-${b}`} className={styles.mesh} x1={PEERS[a][0]} y1={PEERS[a][1]} x2={PEERS[b][0]} y2={PEERS[b][1]} />
      ))}
      {LINKS.map((p) => (
        <line key={p} className={styles.link} x1={YOURS[0]} y1={YOURS[1]} x2={PEERS[p][0]} y2={PEERS[p][1]} />
      ))}
      {PEERS.map(([x, y]) => (
        <circle key={`${x}-${y}`} className={styles.peer} cx={x} cy={y} r={6} />
      ))}
      <circle className={styles.subject} cx={YOURS[0]} cy={YOURS[1]} r={16} />
      <circle className={styles.core} cx={YOURS[0]} cy={YOURS[1]} r={7} />
    </>
  );
}

const MOTIFS = { dice: Dice, airgap: AirGap, node: Network };

/**
 * The homepage band: the three things the site teaches, in the order you do
 * them, drawn like the OG cards and joined by one amber wire. Each step links
 * to the page that covers it.
 *
 * @param {object} props
 * @param {Array<{ label: string, motif: "dice" | "airgap" | "node", to: string, name: string }>} props.steps
 *   `name` is the linked page's H1
 */
export default function CoverPath({ steps }) {
  return (
    <div className={styles.wrap}>
      <ol className={styles.path}>
        {steps.map((s, i) => {
          const Motif = MOTIFS[s.motif];
          return (
            <li key={s.to} className={styles.step}>
              <div className={styles.figure}>
                <svg viewBox="0 0 240 150" aria-hidden="true" focusable="false">
                  <Motif />
                </svg>
              </div>
              <div className={styles.text}>
                <p className={styles.label}>
                  <span className={styles.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </p>
                <Link to={s.to} className={styles.name}>
                  {s.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
