export interface TeamMemberProp {
    gender: 'MALE' | 'FEMALE',
    name: string;
    role: string;
}

// TEMP - to be converted to image
const genderColorMapping: { [key in TeamMemberProp['gender']]: string} = {
    'MALE': 'bg-blue-200',
    'FEMALE': 'bg-pink-100'
}

const TeamMember = ({ gender, role, name }: TeamMemberProp) => {
  return (
    <div className="mx-8 my-4">
      <div className={`w-40 h-40 rounded-full mx-auto ${genderColorMapping[gender]}`}>
        
      </div>
      <div className="w-full text-center mt-2">
        <h4 className="font-semibold">{role}</h4>
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
