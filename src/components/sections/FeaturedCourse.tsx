import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/icons/ArrowIcon";

const COPY = {
  badge: "Featured Course",
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  viewCourse: "View course",
  browseAll: "Browse all courses",
  imageAlt: "Student working on interface designs",
};

const TAGS = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section className="bg-blue py-15 text-white xl:py-25 **:focus-visible:outline-white">
      <Container className="grid gap-10 xl:grid-cols-2 xl:items-center xl:gap-15">
        <div className="relative aspect-362/280 md:mx-auto md:aspect-auto md:h-102 md:w-134.5 xl:w-full">
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-blue-soft">
            <Image
              src="/images/featured.jpg"
              alt={COPY.imageAlt}
              fill
              sizes="(min-width: 80rem) 33.125rem, (min-width: 48rem) 33.625rem, calc(100vw - 2.5rem)"
              className="object-cover"
            />
          </div>
          <p className="absolute -left-3 -top-3 rounded-md bg-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-label text-ink">
            {COPY.badge}
          </p>
        </div>
        <div>
          <SectionHeading eyebrow={COPY.eyebrow} title={COPY.title} inverse />
          <p className="mt-5 text-sm/6 xl:text-base/7">{COPY.description}</p>
          <p className="mt-6 text-sm/6 xl:text-base/7">{COPY.instructor}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-line px-3.5 py-1.5 text-sm/6"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 xl:flex-row">
            <Button
              href="/courses/designing-products-people-understand"
              variant="accent"
              size="lg"
            >
              {COPY.viewCourse}
            </Button>
            <Link
              href="#categories"
              className="group flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm/6 font-bold text-on-dark transition-colors hover:text-white motion-reduce:transition-none"
            >
              {COPY.browseAll}
              <span className="text-white transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
