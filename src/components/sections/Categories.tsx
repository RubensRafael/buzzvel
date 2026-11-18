import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/icons/ArrowIcon";

const COPY = {
  eyebrow: "Find your next skill",
  title: "Learn something worth knowing.",
  description:
    "Short, practical courses designed around skills you can put to work immediately.",
  explore: "Explore",
};

const CATEGORIES = [
  {
    number: "01",
    name: "Product Design",
    href: "/courses/product-design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    name: "Technology",
    href: "/courses/technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    name: "Business",
    href: "/courses/business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    name: "Creative",
    href: "/courses/creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export function Categories() {
  return (
    <section id="categories" className="bg-white py-15 xl:py-25">
      <Container>
        <SectionHeading
          eyebrow={COPY.eyebrow}
          title={COPY.title}
          description={COPY.description}
          className="xl:max-w-140"
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:mt-10 xl:grid-cols-4 xl:gap-5">
          {CATEGORIES.map((category) => (
            <li key={category.number}>
              <Link
                href={category.href}
                prefetch={false}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-colors hover:border-blue motion-reduce:transition-none xl:p-7"
              >
                <div>
                  <span className="flex w-fit rounded-md bg-blue-soft px-2 py-1 text-xs font-semibold uppercase tracking-label text-blue">
                    {category.number}
                  </span>
                  <h3 className="mt-5.5 font-display text-xl/7 font-bold xl:leading-8">
                    {category.name}
                  </h3>
                  <p className="mt-3 text-sm/6 text-muted">
                    {category.description}
                  </p>
                </div>
                <span className="mt-6 flex h-5 items-center gap-2 text-sm/6 font-bold">
                  {COPY.explore}
                  <span className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
