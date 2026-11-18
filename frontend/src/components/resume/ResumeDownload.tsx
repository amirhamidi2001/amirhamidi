import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { resumePage } from "@/data/resume";
import { site } from "@/config/site";
import { fileExists } from "@/lib/images";

export function ResumeDownload() {
  if (!fileExists(site.resumeFile)) {
    return <p className="text-muted text-sm">{resumePage.downloadHint}</p>;
  }
  return (
    <ButtonLink href={site.resumeFile} download>
      {resumePage.download}
      <Download aria-hidden="true" size={18} />
    </ButtonLink>
  );
}
