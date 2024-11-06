import PageLayout from "../common/page-layout";
import AdvisoryBoard from "./team/advisory";
import CoreTeam from "./team/core";

const Team = () => {
  return (
    <PageLayout>
      <div>This is the Team Page</div>
      <CoreTeam />
      <AdvisoryBoard />
    </PageLayout>
  );
};

export default Team;
