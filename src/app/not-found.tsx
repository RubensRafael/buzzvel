import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logo } from "@/components/ui/Logo";

const COPY = {
  logoLabel: "Luma, back to home",
  eyebrow: "404",
  title: "We couldn’t find this page",
  description: "The page you’re looking for doesn’t exist or may have moved.",
  cta: "Back to home",
};

export const metadata: Metadata = {
  title: "Page not found · Luma",
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream">
      <header className="border-b border-line">
        <Container className="flex h-17 items-center">
          <Link href="/" aria-label={COPY.logoLabel} className="text-ink">
            <Logo />
          </Link>
        </Container>
      </header>
      <main className="flex flex-1 items-center py-15">
        <Container className="text-center">
          <Eyebrow>{COPY.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[2rem]/[2.25rem] font-extrabold tracking-tight text-balance xl:text-5xl/14">
            {COPY.title}
          </h1>
          <p className="mx-auto mt-4 max-w-120 text-base/6.5 text-muted xl:text-lg/7">
            {COPY.description}
          </p>
          <Button href="/" size="lg" className="mt-8">
            {COPY.cta}
          </Button>
        </Container>
      </main>
    </div>
  );
}
