import type { Metadata } from "next";
import SubPageShell from "@/components/SubPageShell";
import CvBuilder from "./CvBuilder";

export const metadata: Metadata = {
  title: "Generate CV (Japan Format) | Sanjana International",
  description:
    "Create your bilingual Japanese / English CV (履歴書・人材情報シート) online. Fill in your details, see a live preview and download it as a PDF.",
};

export default function CvBuilderPage() {
  return (
    <SubPageShell active="/cv-builder">
      <CvBuilder />
    </SubPageShell>
  );
}
