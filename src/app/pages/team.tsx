import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import AdvisoryBoard from "./team/advisory";
import CoreTeam from "./team/core";

const Team = () => {
  return (
    <PageLayout id={RouteId.team}>
      <CoreTeam />
      <AdvisoryBoard />
    </PageLayout>
  );
};

export default Team;
