import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverse = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-[2rem]/[2.25rem] font-extrabold tracking-tight xl:text-5xl/14">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base/6.5 text-muted xl:text-lg/7">
          {description}
        </p>
      )}
    </div>
  );
}
