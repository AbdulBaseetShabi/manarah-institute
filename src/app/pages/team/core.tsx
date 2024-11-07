import { RouteId } from "../../common/types";
import SectionLayout from "../../common/layout/section-layout";
import TeamMember from "../../common/team-member";

const CoreTeam = () => {
  return (
    <SectionLayout id={RouteId.core}>
      <div>This is the Core Team Section</div>
      <div className="flex flex-wrap justify-around">
        <TeamMember gender="MALE" name="Furqan Einstein" role="President" />
        <TeamMember gender="FEMALE" name="Aisha ibn Malik" role="VP of Marketing" />
      </div>
    </SectionLayout>
  );
};

export default CoreTeam;
