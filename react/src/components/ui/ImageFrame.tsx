import Image from "next/image";
import { Image as ImageIcon, User } from "lucide-react";
import type { ImageRef } from "@/types/content";
import { cn } from "@/lib/cn";

/** نمایش تصویر یا placeholder هم‌اندازه (بدون CLS). بدون وابستگی به fs؛ در Client هم قابل استفاده است. */
export function ImageFrame({
  image,
  available,
  priority,
  sizes,
  className,
  imgClassName,
  icon = "image",
}: {
  image: ImageRef;
  available: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  icon?: "image" | "user";
}) {
  const Ico = icon === "user" ? User : ImageIcon;
  return (
    <div className={cn("bg-surface-deep relative overflow-hidden", className)} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      {available ? (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={cn("size-full object-cover", imgClassName)}
        />
      ) : (
        <div aria-hidden="true" className="text-muted flex size-full flex-col items-center justify-center gap-2 p-3 text-center text-sm">
          <Ico size={32} />
          <span>تصویر به‌زودی اضافه می‌شود</span>
        </div>
      )}
    </div>
  );
}
