"use client"; // This line must be at the very top of the file

import { TestimonyCard } from "../common/cards/testimony-card";
import { TESTIMONIALS } from "../common/constants";
import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Title from "../common/title";
import { Visibility } from "../common/animation";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <PageLayout id={RouteId.testimonials} spacing="none">
      <Title title="Testimonials" />
      <Visibility delay={1}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          keyBoardControl={true}
          transitionDuration={500}
          deviceType={"desktop"}
          partialVisible={true}
        >
          {TESTIMONIALS.map((testimony, index) => (
            <TestimonyCard key={index} {...testimony} index={index} />
          ))}
        </Carousel>
      </Visibility>
    </PageLayout>
  );
};

export default Testimonials;
