"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/Container";
import { LogoMark } from "@/components/LogoMark";

export type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-orange-100/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <LogoMark />

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-label="切换导航菜单"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-orange-100 bg-white/95 lg:hidden">
          <Container className="flex flex-col py-3">
            {items.map((item) => (
              <a
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
                href={item.href}
                key={item.href}
                onClick={handleClose}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
