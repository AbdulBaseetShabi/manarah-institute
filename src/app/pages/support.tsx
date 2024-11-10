import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import Donate from "./support/donate";
import Volunteer from "./support/volunteer";

const Support = () => {
  return (
    <PageLayout id={RouteId.support}>
      <Volunteer />
      <div className="divider w-full md:w-1/2 mx-auto my-32" />
      <Donate />
    </PageLayout>
  );
};

export default Support;
