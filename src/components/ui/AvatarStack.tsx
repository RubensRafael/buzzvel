import Image from "next/image";

type Size = "sm" | "lg";

type AvatarStackProps = {
  avatars: string[];
  size?: Size;
};

const sizes: Record<Size, { px: number; className: string }> = {
  sm: { px: 32, className: "size-8 border-cream" },
  lg: { px: 40, className: "size-10 border-yellow" },
};

export function AvatarStack({ avatars, size = "sm" }: AvatarStackProps) {
  return (
    <div className="flex">
      {avatars.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={sizes[size].px}
          height={sizes[size].px}
          className={`${sizes[size].className} rounded-full border-2 bg-blue-soft object-cover ${index > 0 ? "-ml-2" : ""}`}
        />
      ))}
    </div>
  );
}
