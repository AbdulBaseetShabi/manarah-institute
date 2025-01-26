import { RouteId } from "../../common/types";
import SectionLayout from "../../common/layout/section-layout";
import TeamMember, { TeamMemberProp } from "../../common/team-member";

const teamMembers: TeamMemberProp[] = [
  {
    gender: "MALE",
    name: "Murad Taher",
    role: "Head of Executive Operations",
  },
  {
    gender: "FEMALE",
    role: "Head of Religious Affairs",
    name: "Ehsaan Khan",
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
    gender: "MALE",
    role: "Head of Finance",
    name: "Syed Meeran",
  },
  {
    gender: "MALE",
    role: "Head of Volunteer Strategy",
    name: "Sundus Abbas",
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
      <h2 className="text-4xl md:text-5xl text-center font-black mb-7">
        Core Team
      </h2>
      <div className="flex flex-wrap justify-around">
        {teamMembers.map((teamMember, index) => (
          <TeamMember key={index} {...teamMember} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default CoreTeam;

// installing git
// creating or updating the design on the website using figma

// send color palette
