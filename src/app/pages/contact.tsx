import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";

const Contact = () => {
  return (
    <PageLayout id={RouteId.contact}>
      <div>This is the Contact Page</div>
      <div>Registered as Non Profit add to footer</div>
    </PageLayout>
  );
};

export default Contact;
