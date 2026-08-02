import React from "react";
import Link from "@docusaurus/Link";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export default function AuthorByline() {
  return (
    <aside
      className="mt-10 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/70"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <VerifiedRoundedIcon sx={{ fontSize: 18 }} className="text-amber-400" />
      <span>
        Published by{" "}
        <Link to="/" className="font-semibold text-white hover:text-amber-300" itemProp="url">
          <span itemProp="name">Self Custody Labs</span>
        </Link>
        {", "}independent, open-source Bitcoin self-custody guides.
      </span>
    </aside>
  );
}
