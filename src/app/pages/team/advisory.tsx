import { RouteId } from "../../common/types";
import SectionLayout from "../../common/layout/section-layout";

const AdvisoryBoard = () => {
  return (
    <SectionLayout id={RouteId.board}>
      <div>This is the Advisory Board Section</div>
      <p>Our team receives counsel from a distinguished advisory board of scholars, whose guidance ensures that our projects remain aligned with Islamic principles and values.</p>
    </SectionLayout>
  );
};

export default AdvisoryBoard;
