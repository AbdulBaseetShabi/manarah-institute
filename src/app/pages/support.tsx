import PageLayout from "../common/page-layout";
import Donate from "./support/donate";
import Volunteer from "./support/volunteer";

const Support = () => {
  return (
    <PageLayout>
      <div>This is the Support Page</div>
      <Volunteer />
      <Donate />
    </PageLayout>
  );
};

export default Support;
