import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COPY = {
  eyebrow: "How Luma works",
  title: "Less browsing. More learning.",
};

const STEPS = [
  {
    label: "Step 01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: { src: "step-1", size: 56, className: "inset-0" },
  },
  {
    label: "Step 02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    icon: { src: "step-2", size: 67, className: "-left-1.25 -top-1.25" },
  },
  {
    label: "Step 03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: { src: "step-3", size: 56, className: "inset-0" },
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-15 xl:py-25">
      <Container>
        <SectionHeading
          eyebrow={COPY.eyebrow}
          title={COPY.title}
          className="text-center"
        />
        <ol className="mt-10 xl:mt-20 xl:grid xl:grid-cols-3 xl:gap-20 xl:py-7">
          {STEPS.map((step, index) => (
            <li key={step.label} className="relative pb-19 last:pb-0 xl:pb-0">
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-7 h-12 w-px bg-line xl:bottom-auto xl:left-14 xl:top-7 xl:h-px xl:w-86"
                />
              )}
              <span aria-hidden="true" className="relative block size-14">
                <Image
                  src={`/images/how-it-works/${step.icon.src}.svg`}
                  alt=""
                  width={step.icon.size}
                  height={step.icon.size}
                  className={`absolute max-w-none ${step.icon.className}`}
                />
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-label text-muted">
                {step.label}
              </p>
              <h3 className="mt-2 font-display text-xl/7 font-bold xl:leading-8">
                {step.title}
              </h3>
              <p className="mt-3.5 text-sm/6 text-muted xl:text-base/7">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
