import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 rounded-t-3xl bg-secondary/80 py-6 text-text shadow-inner backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src="/brand/badge-64.png"
            alt="Puheterapiapalvelut Yhdessä"
            className="h-8 w-8 rounded-full border border-white/70"
          />
          <div>
            <p className="font-semibold text-slate-800">Puheterapiapalvelut Yhdessä</p>
            <p className="text-slate-600">© {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="text-center text-slate-600 md:text-right">
          <p>Y-tunnus 3506989-2</p>
          <p>Instagram: @tili_tulossa</p>
        </div>
      </div>
    </footer>
  );
}
