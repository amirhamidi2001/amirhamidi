import type { ComponentProps } from "react";
import { ImageFrame } from "./ImageFrame";
import { imageExists } from "@/lib/images";

/** نسخهٔ سروری: وجود فایل را در زمان بیلد می‌سنجد. */
export function ImageSlot(props: Omit<ComponentProps<typeof ImageFrame>, "available">) {
  return <ImageFrame {...props} available={imageExists(props.image.src)} />;
}
