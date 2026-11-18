"use client"; // <dialog> بومی
import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { ImageRef } from "@/types/content";

export default function ImageLightbox({ image, closeLabel, onClose }: { image: ImageRef; closeLabel: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label={image.alt}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="bg-background text-foreground border-border m-auto max-h-[92dvh] w-[min(92vw,64rem)] overflow-auto rounded-2xl border p-3 backdrop:bg-background/85"
    >
      <button type="button" onClick={() => ref.current?.close()} aria-label={closeLabel} className="bg-surface-deep hover:text-accent mb-2 inline-flex size-11 items-center justify-center rounded-full">
        <X aria-hidden="true" size={22} />
      </button>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1024px) 960px, 92vw" className="h-auto w-full rounded-xl" />
    </dialog>
  );
}
