import Image from "next/image";
import { RouteId } from "../../common/types";
import SectionLayout from "../../common/layout/section-layout";
import Button from "../../common/button";
import { LeftSlider, RightSlider } from "@/app/common/animation";

const Volunteer = () => {
  return (
    <SectionLayout id={RouteId.volunteer}>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 flex">
          <RightSlider className="w-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold md:text-6xl font-black text-center md:text-justify">
              Volunteer with Us
            </h2>
            <div className="block mt-4 md:hidden h-36 relative">
              <Image src="./community.svg" alt="Community" fill={true} />
            </div>
            <div className="mt-5 text-xl md:text-2xl">
              <p className="text-center md:text-justify">
                Without our dedicated volunteers we would not be able to
                accomplish as much as we have. If you are looking for ways to
                give back to the community or get involved with the Manarah
                Institute, sign up below.
              </p>
            </div>
            <div className="mt-5 font-bold w-1/2 mx-auto md:mx-0">
              <Button link={""}>Volunteer Signup</Button>
            </div>
          </RightSlider>
        </div>
        <LeftSlider className="hidden md:block w-1/2 md:h-96 relative">
          <Image src="/community.svg" alt="Community" fill={true} />
        </LeftSlider>
      </div>
    </SectionLayout>
  );
};

export default Volunteer;

// {/* <h2 className="text-6xl md:text-9xl font-black">Volunteer with Us</h2> */}
