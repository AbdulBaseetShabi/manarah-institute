import Image from "next/image";
import { RouteId } from "../../common/types";
import SectionLayout from "../../common/layout/section-layout";
import Button from "../../common/button";

const Volunteer = () => {
  return (
    <SectionLayout id={RouteId.volunteer}>
      <div className="flex flex-wrap">
        <div className="md:w-1/2 flex">
          <div className="w-full flex flex-col justify-center">
            <h3 className="text-4xl md:text-6xl font-black">
              Volunteer with Us
            </h3>
            <div className="block mt-4 md:hidden h-36 relative">
              <Image src="./community.svg" alt="Community" fill={true} />
            </div>
            <div className="mt-5 text-xl md:text-2xl">
              <p>
                Without our dedicated volunteers we would not be able to
                accomplish as much as we have. If you are looking for ways to
                give back to the community or get involved with the Manarah
                Institute, sign up below.
              </p>
            </div>
            <div className="mt-5 font-bold w-1/2 mx-auto md:mx-0">
              <Button text={"Sign up"} link={""} />
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/2 md:h-96 relative">
          <Image src="/community.svg" alt="Community" fill={true} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Volunteer;

// {/* <h3 className="text-6xl md:text-9xl font-black">Volunteer with Us</h3> */}
