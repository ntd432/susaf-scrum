import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { SelfAssessmentChecklist } from "./_components/self-assessment-form";

export const metadata: Metadata = {
  title: "Form Layout",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Retrospective" />

      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <SelfAssessmentChecklist />
        </div>
      </div>
    </>
  );
}
