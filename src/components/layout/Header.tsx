"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { CloseIcon } from "@/components/ui/icons/CloseIcon";
import { MenuIcon } from "@/components/ui/icons/MenuIcon";

const LINKS = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "/teams" },
  { label: "Community", href: "#people" },
  { label: "About", href: "/about" },
];

const COPY = {
  logoLabel: "Luma, back to top",
  logIn: "Log in",
  startLearning: "Start learning",
  openMenu: "Open menu",
  closeMenu: "Close menu",
};

const LINK_CLASSES =
  "text-muted transition-colors hover:text-blue motion-reduce:transition-none";

function DesktopNav() {
  return (
    <>
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                prefetch={false}
                className={`text-sm/6 ${LINK_CLASSES}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden items-center justify-end gap-2 xl:flex">
        <Button href="/login" variant="ghost" size="sm" bold={false}>
          {COPY.logIn}
        </Button>
        <Button href="/signup">{COPY.startLearning}</Button>
      </div>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? COPY.closeMenu : COPY.openMenu}
        onClick={() => setOpen((value) => !value)}
        className="flex size-9 items-center justify-center rounded-lg text-ink"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-line bg-cream">
          <Container className="flex flex-col gap-6 py-6">
            <nav>
              <ul className="flex flex-col gap-1">
                {LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      onClick={close}
                      className={`block py-2 text-base/6 ${LINK_CLASSES}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-2">
              <Button
                href="/login"
                variant="ghost"
                bold={false}
                onClick={close}
              >
                {COPY.logIn}
              </Button>
              <Button href="/signup" onClick={close}>
                {COPY.startLearning}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <Container className="flex h-17 items-center justify-between xl:grid xl:grid-cols-[1fr_auto_1fr]">
        <Link
          href="#"
          aria-label={COPY.logoLabel}
          className="justify-self-start text-ink"
        >
          <Logo />
        </Link>
        <DesktopNav />
        <MobileMenu />
      </Container>
    </header>
  );
}
