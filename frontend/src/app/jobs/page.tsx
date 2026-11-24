import type { Metadata } from "next";
import SubPageShell from "@/components/SubPageShell";
import JobsBoard from "./JobsBoard";

export const metadata: Metadata = {
  title: "Find Jobs Abroad | Sanjana International",
  description:
    "Search current overseas job openings in Japan: nursing care, construction, food service, manufacturing, agriculture and more. See in-demand skills and apply online.",
};

export default function JobsPage() {
  return (
    <SubPageShell active="/jobs">
      <JobsBoard />
    </SubPageShell>
  );
}
