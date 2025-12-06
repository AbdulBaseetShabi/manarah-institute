import Image from "next/image";
import { UpSlider } from "./animation";
export interface TeamMemberProp {
  gender: "MALE" | "FEMALE";
  name: string;
  role: string;
}

// TEMP - to be converted to image
const colorMapping: { [key in TeamMemberProp["gender"]]: string } = {
  MALE: "bg-blue-200",
  FEMALE: "bg-pink-100",
};

const imageMapping: { [key in TeamMemberProp["gender"]]: string } = {
  MALE: "/icons/man.svg",
  FEMALE: "/icons/woman.svg",
};

const TeamMember = ({ gender, role, name }: TeamMemberProp) => {
  return (
    <UpSlider className="mx-8 my-4" delay={1}>
      <div className={`${colorMapping[gender]} w-24 h-24 lg:w-40 lg:h-40 flex items-center rounded-full mx-auto box-border shadow-md`}>
        <div
          className={`relative w-12 h-12 lg:w-20 lg:h-20 mx-auto ${colorMapping[gender]}`}
        >
          <Image
            src={imageMapping[gender]}
            alt={gender}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full text-center mt-4 lg:text-xl">
        <h4 className="font-semibold">{role}</h4>
        <h5>{name}</h5>
      </div>
    </UpSlider>
  );
};

export default TeamMember;
