"use client";

import { useState } from "react";

type LogoMarkProps = {
  showText?: boolean;
};

export function LogoMark({ showText = true }: LogoMarkProps) {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <a className="flex items-center gap-3" href="#top">
      <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-red-100 shadow-sm">
        {imageMissing ? (
          <span className="font-display text-lg font-semibold text-orange-700">心火</span>
        ) : (
          <img
            alt="心火欧青 Logo"
            className="h-full w-full object-cover"
            onError={() => setImageMissing(true)}
            src="/logo.jpg"
          />
        )}
      </div>
      {showText ? (
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold text-slate-950">心火欧青</p>
          <p className="text-xs tracking-[0.18em] text-amber-700">HEARTFIRE JOURNEY</p>
        </div>
      ) : null}
    </a>
  );
}
