import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COPY = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "Learn alongside people from all over the world. Our teachers are designers, engineers and founders who share what works in their day-to-day jobs, and our students bring questions from real projects to every lesson.",
  cta: "Explore teachers and students",
};

const COLUMNS = [
  {
    className: "items-end pt-12 xl:pt-16",
    photos: [
      {
        src: "/images/people-1.jpg",
        alt: "Student waving during a video class",
        size: "h-24 w-18 xl:h-38.5 xl:w-25.75",
        sizes: "(min-width: 80rem) 14.4375rem, 9rem",
      },
      {
        src: "/images/people-2.jpg",
        alt: "Group of learners gathered around a laptop",
        size: "h-32.25 w-23.5 xl:h-51.75 xl:w-34.5",
        sizes: "(min-width: 80rem) 19.4375rem, 12.125rem",
      },
    ],
  },
  {
    className: "xl:pt-6.5",
    photos: [
      {
        src: "/images/people-3.jpg",
        alt: "Student reading at a table full of books",
        size: "h-26.5 w-18 xl:h-42.5 xl:w-25.75",
        sizes: "(min-width: 80rem) 15.9375rem, 9.9375rem",
      },
      {
        src: "/images/people-4.jpg",
        alt: "Teacher and student singing in a music lesson",
        size: "h-27 w-18 xl:h-43.25 xl:w-25.75",
        sizes: "(min-width: 80rem) 7.25rem, 4.5rem",
      },
      {
        src: "/images/people-5.jpg",
        alt: "Student taking notes from a book and a tablet",
        size: "h-20 w-18 xl:h-32 xl:w-25.75",
        sizes: "(min-width: 80rem) 6.4375rem, 4.5rem",
      },
    ],
  },
  {
    className: "",
    photos: [
      {
        src: "/images/people-6.jpg",
        alt: "Graduate in cap and gown holding a diploma",
        size: "h-21.5 w-18 xl:h-34.25 xl:w-25.75",
        sizes: "(min-width: 80rem) 6.4375rem, 4.5rem",
      },
      {
        src: "/images/people-7.jpg",
        alt: "Student working on a laptop at a kitchen table",
        size: "h-21.5 w-18 xl:h-34.5 xl:w-25.75",
        sizes: "(min-width: 80rem) 12.9375rem, 8.0625rem",
      },
      {
        src: "/images/people-8.jpg",
        alt: "Child watching a teacher in an online class",
        size: "h-24 w-18 xl:h-38.5 xl:w-25.75",
        sizes: "(min-width: 80rem) 14.4375rem, 9rem",
      },
    ],
  },
  {
    className: "",
    photos: [
      {
        src: "/images/people-9.jpg",
        alt: "Student holding folders outside a university building",
        size: "h-32 w-22 xl:h-51.25 xl:w-32",
        sizes: "(min-width: 80rem) 19.25rem, 12rem",
      },
      {
        src: "/images/people-10.jpg",
        alt: "Student with a coffee and books on the way to class",
        size: "h-20.5 w-18 xl:h-33 xl:w-25.75",
        sizes: "(min-width: 80rem) 6.625rem, 4.5rem",
      },
    ],
  },
];

export function People() {
  return (
    <section id="people" className="overflow-hidden bg-cream py-15 xl:py-25">
      <Container className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-15">
        <div className="xl:w-132.5 xl:shrink-0">
          <SectionHeading eyebrow={COPY.eyebrow} title={COPY.title} />
          <p className="mt-6 text-base/6.5 text-muted xl:mt-8 xl:text-lg/7">
            {COPY.description}
          </p>
          <Button
            href="/community"
            variant="secondary"
            size="lg"
            className="mt-6 xl:mt-8"
          >
            {COPY.cta}
          </Button>
        </div>
        <div className="relative mx-auto flex w-full max-w-90.5 items-center justify-between xl:mx-0 xl:w-132.5 xl:max-w-none xl:justify-start xl:gap-4">
          <div className="absolute left-1/2 top-1/2 size-82.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-soft xl:size-125" />
          {COLUMNS.map((column, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 xl:gap-3.25 ${column.className}`}
            >
              {column.photos.map((photo) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded shadow-md ${photo.size}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
