import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";

const Home = () => {
  return (
    <PageLayout id={RouteId.home}>
      <div className="min-w-100 h-4/5 bg-red-300 rounded-lg">

      </div>
    </PageLayout>
  );
};

export default Home;
