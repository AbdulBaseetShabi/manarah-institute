import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import AdvisoryBoard from "./team/advisory";
import CoreTeam from "./team/core";

const Team = () => {
  return (
    <PageLayout id={RouteId.team} backgroundColor="ghostwhite">
      <div className="flex flex-col gap-16">
        <CoreTeam />
        <AdvisoryBoard />
      </div>
    </PageLayout>
  );
};

export default Team;
