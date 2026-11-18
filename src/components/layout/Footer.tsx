import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const COPY = {
  logoLabel: "Luma",
  tagline: "Practical learning for curious people.",
  navLabel: "Footer",
  copyright: "© 2026 Luma Learning",
};

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#categories" },
      { label: "Categories", href: "#categories" },
      { label: "Instructors", href: "#people" },
      { label: "For Teams", href: "/teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-5 pt-15 xl:pb-10 xl:pt-20 [&_:focus-visible]:outline-white">
      <Container>
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-[26rem_13rem_13rem_auto] xl:gap-8">
          <div>
            <div
              role="img"
              aria-label={COPY.logoLabel}
              className="flex text-white"
            >
              <Logo />
            </div>
            <p className="mt-3 text-sm/6 text-subtle xl:w-60">{COPY.tagline}</p>
          </div>
          <nav
            aria-label={COPY.navLabel}
            className="grid grid-cols-2 gap-10 md:grid-cols-3 xl:contents"
          >
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="text-xs font-semibold uppercase tracking-label text-on-dark">
                  {column.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-sm/6">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="text-subtle transition-colors hover:text-white motion-reduce:transition-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="mt-9 border-t border-muted pt-6 text-center text-[0.8125rem]/5 text-on-dark xl:mt-16.5 xl:text-left">
          {COPY.copyright}
        </p>
      </Container>
    </footer>
  );
}
