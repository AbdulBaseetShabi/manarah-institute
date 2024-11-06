import PageLayout from "../common/page-layout";
import { RouteId } from "../common/types";
import AdvisoryBoard from "./team/advisory";
import CoreTeam from "./team/core";

const Team = () => {
  return (
    <PageLayout id={RouteId.team}>
      <div>This is the Team Page</div>
      <CoreTeam />
      <AdvisoryBoard />
    </PageLayout>
  );
};

export default Team;
