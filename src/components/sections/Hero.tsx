import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon } from "@/components/ui/icons/StarIcon";

const COPY = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: "Explore courses",
  secondaryCta: "See how it works",
  trustedHighlight: "Trusted by 24,000+",
  trustedRest: "learners",
  coursesCount: "120+",
  coursesLabel: "expert-led courses",
  rating: "4.9 avg rating",
  ratingLabel: "Rated 4.9 out of 5",
  imageAlt: "Person focused on learning at their laptop",
};

const AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
];

function HeroImage() {
  return (
    <div className="relative mx-auto h-95 w-full max-w-90.5 md:h-130 md:w-125 md:max-w-none xl:mx-0 xl:shrink-0">
      {/* peach shape behind the photo, sticking out on the right */}
      <div className="absolute -right-2.5 top-6 h-85.5 w-68 rounded-2xl bg-peach md:-right-10 md:h-117 md:w-22" />
      {/* light blue circle behind the photo, bottom left */}
      <div className="absolute -left-2.5 top-76 size-16 rounded-full bg-blue-soft md:-left-11 md:top-101 md:size-26.5" />
      {/* photo frame */}
      <div className="absolute inset-x-2 inset-y-0 overflow-hidden rounded-2xl bg-blue-soft md:inset-0 md:rounded-3xl">
        <Image
          src="/images/hero.jpg"
          alt={COPY.imageAlt}
          fill
          preload
          sizes="(min-width: 48rem) 31.25rem, 21.625rem"
          className="object-cover"
        />
      </div>
      {/* "120+ expert-led courses" card, top left over the photo */}
      <div className="absolute left-0 top-1.5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg md:-left-5.5 md:top-4">
        <span className="flex h-8 items-center rounded-lg bg-blue-soft px-1 text-sm/6 font-bold text-blue">
          {COPY.coursesCount}
        </span>
        <span className="text-sm/6">{COPY.coursesLabel}</span>
      </div>
      {/* "4.9 avg rating" card, bottom right over the photo */}
      <div className="absolute -right-2.75 top-74 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg md:-right-14.25 md:top-109">
        <span
          className="flex gap-0.5 text-mustard"
          role="img"
          aria-label={COPY.ratingLabel}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} />
          ))}
        </span>
        <span className="text-sm/6">{COPY.rating}</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-cream py-15 xl:py-25">
      <Container className="flex flex-col gap-10 xl:flex-row-reverse xl:items-start xl:gap-15">
        <HeroImage />
        <div className="xl:w-140 xl:shrink-0">
          <Eyebrow>{COPY.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[2.5rem]/[2.75rem] font-extrabold tracking-tight xl:text-[4rem]/[4.375rem]">
            {COPY.title}
          </h1>
          <p className="mt-6 text-base/6.5 text-muted xl:max-w-120 xl:text-lg/7">
            {COPY.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 xl:flex-row">
            <Button href="#categories" size="lg">
              {COPY.primaryCta}
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg">
              {COPY.secondaryCta}
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 xl:justify-start">
            <AvatarStack avatars={AVATARS} />
            <p className="text-sm/6 text-muted">
              <strong className="font-bold text-ink">
                {COPY.trustedHighlight}
              </strong>{" "}
              {COPY.trustedRest}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
