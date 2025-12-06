import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import Button from "../common/button";
import { UpSlider } from "../common/animation";

const Home = () => {
  return (
    <PageLayout id={RouteId.home} fullWidth spacing="none">
      <div
        className="hero min-h-screen"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="hero-overlay">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full min-h-screen"
          >
            {/* https://www.pexels.com/video/leaves-providing-shade-from-the-rays-of-the-sun-3132090/ */}
            <source src="./background.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-content text-white text-center">
          <div>
            <UpSlider>
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                Manarah Institute
              </h1>
            </UpSlider>
            <UpSlider delay={1}>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Manarah Institute is devoted to nurturing the community&apos;s
                relationship with Allah (swt) and strengthening its sense of
                unity through events and initiatives that facilitate spiritual
                growth, fostering a harmonious and connected society grounded in
                the principles of Islamic teachings.
              </p>
            </UpSlider>
            <UpSlider delay={1.5}>
              <Button link="" size="lg">
                {"Explore Our Upcoming Events"}
              </Button>
            </UpSlider>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
