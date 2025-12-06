import { RouteId } from "@/app/common/types";
import SectionLayout from "@/app/common/layout/section-layout";
import TeamMember, { TeamMemberProp } from "@/app/common/team-member";
import Title from "@/app/common/title";

const teamMembers: TeamMemberProp[] = [
  {
    gender: "MALE",
    name: "Murad Taher",
    role: "Head of Executive Operations",
  },
  {
    gender: "MALE",
    role: "Head of Religious Affairs",
    name: "Ehsaan Khan",
  },
  {
    gender: "FEMALE",
    role: "Head of Volunteer Strategy",
    name: "Sundus Abbas",
  },
  {
    gender: "MALE",
    name: "Hasan Syed",
    role: "Head of External Relations",
  },
  {
    gender: "MALE",
    role: "Head of Administration",
    name: "Humzah Ahmad",
  },
  {
    gender: "FEMALE",
    name: "Yasmine Belahlou",
    role: "Head of Engagement & Hospitality",
  },
];

const CoreTeam = () => {
  return (
    <SectionLayout id={RouteId.core}>
      <Title title="Core Team"/>
      <div className="flex flex-wrap justify-around">
        {teamMembers.map((teamMember, index) => (
          <div className="w-1/2 lg:w-1/4" key={index}>
            <TeamMember key={index} {...teamMember} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default CoreTeam;
