import { RouteId } from "@/app/common/types";
import SectionLayout from "@/app/common/layout/section-layout";
import { LeftSlider } from "@/app/common/animation";

const AdvisoryBoard = () => {
  return (
    <SectionLayout id={RouteId.board}>
      <LeftSlider
        className="rounded-md border p-4 md:p-16  m-4 md:m-16 content box-border grow shadow-md bg-white"
        delay={1}
      >
        <h2 className="font-bold text-xl">Advisory Board</h2>
        <p className="mt-4">
          Our team receives counsel from a distinguished advisory board of
          scholars, whose guidance ensures that our projects remain aligned with
          Islamic principles and values.
        </p>
      </LeftSlider>
    </SectionLayout>
  );
};

export default AdvisoryBoard;
