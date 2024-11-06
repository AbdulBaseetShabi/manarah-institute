import PageLayout from "../common/page-layout";
import { RouteId } from "../common/types";
import Donate from "./support/donate";
import Volunteer from "./support/volunteer";

const Support = () => {
  return (
    <PageLayout id={RouteId.support}>
      <div>This is the Support Page</div>
      <Volunteer />
      <Donate />
    </PageLayout>
  );
};

export default Support;
