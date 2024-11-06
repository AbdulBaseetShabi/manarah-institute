import PageLayout from "../common/page-layout";
import { RouteId } from "../common/types";

const Home = () => {
  return (
    <PageLayout id={RouteId.home}>
      <div>This is the Home Page</div>
    </PageLayout>
  );
};

export default Home;
