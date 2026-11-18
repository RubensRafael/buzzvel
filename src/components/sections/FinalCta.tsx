import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const COPY = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primary: "Explore all courses",
  secondary: "Join Luma",
};

const AVATARS = [
  "/images/avatar-1.jpg",
  "/images/avatar-2.jpg",
  "/images/avatar-3.jpg",
  "/images/avatar-4.jpg",
];

const SHAPES = [
  { src: "ring-lg", width: 108, height: 108, className: "left-5.5 top-4" },
  { src: "square-sm", width: 34, height: 67, className: "left-0 top-57.5" },
  { src: "icon-chat", width: 32, height: 32, className: "left-35.25 top-53.5" },
  { src: "circle-lg", width: 120, height: 97, className: "left-14 top-93.25" },
  {
    src: "square-outline",
    width: 67,
    height: 67,
    className: "left-79.25 top-10.5",
  },
  { src: "icon-bold", width: 102, height: 102, className: "left-68 top-90" },
  { src: "ring-sm", width: 32, height: 32, className: "right-92.75 top-10.75" },
  {
    src: "icon-dashboard",
    width: 62,
    height: 62,
    className: "right-50.5 top-20.5",
  },
  { src: "square-lg", width: 136, height: 113, className: "right-0 top-0" },
  {
    src: "icon-codepen",
    width: 160,
    height: 160,
    className: "right-10 top-45",
  },
  {
    src: "icon-cash",
    width: 48,
    height: 48,
    className: "right-67.25 top-95.25",
  },
  { src: "ring-sm", width: 32, height: 32, className: "right-10 top-107.25" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-yellow-soft py-15 xl:py-25">
      <div aria-hidden="true" className="absolute inset-0 hidden xl:block">
        {SHAPES.map((shape) => (
          <Image
            key={shape.className}
            src={`/images/cta/${shape.src}.svg`}
            alt=""
            width={shape.width}
            height={shape.height}
            className={`absolute ${shape.className}`}
          />
        ))}
      </div>
      <Container className="relative text-center">
        <div className="mx-auto xl:w-164">
          <div className="flex justify-center">
            <AvatarStack avatars={AVATARS} size="lg" />
          </div>
          <h2 className="mt-8 font-display text-4xl/10 font-extrabold tracking-tight xl:text-[3.5rem]/16">
            {COPY.title}
          </h2>
          <p className="mt-4 text-base/6.5 text-muted xl:text-lg/7">
            {COPY.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 md:flex-row md:justify-center">
            <Button href="#categories" size="lg">
              {COPY.primary}
            </Button>
            <Button href="/signup" variant="secondary" size="lg">
              {COPY.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
