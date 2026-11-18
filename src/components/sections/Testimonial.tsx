import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/icons/QuoteIcon";

const COPY = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
};

const STATS = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export function Testimonial() {
  return (
    <section className="bg-white py-15 xl:py-25">
      <Container className="flex flex-col gap-15 xl:flex-row xl:items-center xl:justify-between">
        <figure className="xl:w-150">
          <span className="text-blue">
            <QuoteIcon />
          </span>
          <blockquote className="mt-4 font-display text-xl/8 font-semibold xl:text-3xl/11 xl:tracking-tight">
            <p>{COPY.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src="/images/alex-morgan.jpg"
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-blue-soft object-cover"
            />
            <span>
              <span className="block text-base/6.5 font-bold xl:leading-7">
                {COPY.name}
              </span>
              <span className="block text-sm/6 text-muted">{COPY.role}</span>
            </span>
          </figcaption>
        </figure>
        <ul className="grid grid-cols-3 xl:w-100 xl:grid-cols-1 xl:gap-4 xl:border-l xl:border-line xl:pl-12">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-[2.5rem]/[2.75rem] font-extrabold tracking-tight text-blue xl:text-[4rem]/[4.375rem]">
                {stat.value}
              </p>
              <p className="mt-1 text-sm/6 text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
