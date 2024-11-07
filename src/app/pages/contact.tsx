import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";

const Contact = () => {
  return (
    <PageLayout id={RouteId.contact}>
      <div>This is the Contact Page</div>
    </PageLayout>
  );
};

export default Contact;
