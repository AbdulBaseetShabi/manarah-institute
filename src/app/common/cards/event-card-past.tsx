"use client"; // This line must be at the very top of the file

import Image from "next/image";
import { MainEvent } from "../types";
import { UpSlider } from "../animation";
import Carousel from "react-multi-carousel";

type MainEventCardProps = MainEvent & {
  index: number;
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const MainEventCard = ({
  index,
  images,
  title,
  descriptions,
  routePrefix
}: MainEventCardProps) => {
  const isEvenIndex = index % 2 === 0;
  const imagePrefix = `/events/${routePrefix}`;

  const renderContentMobile = () => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          keyBoardControl={true}
          transitionDuration={100}
        >
          {images.map((image, idx) => (
            <div key={image} className="w-full h-48 relative">
              <Image
                src={`${imagePrefix}/${image}`}
                alt={`${title} image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Carousel>
        <div className="py-6 px-2">
          <UpSlider>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            {descriptions.map((description, i) => (
              <p key={description} className="text-gray-600 text-sm mb-2">
                {description}
              </p>
            ))}
          </UpSlider>

        </div>
      </div>
    )
  }

  const renderContentLaptop = () => {
    return (
      <div className={`flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition ${isEvenIndex ? '' : 'flex-row-reverse'}`}>
        <div className="w-1/2">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          keyBoardControl={true}
          transitionDuration={100}
        >
          {images.map((image, idx) => (
            <div key={image} className="w-full h-96 relative">
              <Image
                src={`${imagePrefix}/${image}`}
                alt={`${title} image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Carousel>
        </div>
        <div className={`p-6 ${isEvenIndex ? "text-left" : "text-right"} w-1/2`}>
          <UpSlider>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            {descriptions.map((description, i) => (
              <p key={description} className="text-gray-600 mb-2">
                {description}
              </p>
            ))}
          </UpSlider>
        </div>
      </div>
    )
  }

  return <div>
    <div className="block md:hidden">{renderContentMobile()}</div>
    <div className="hidden md:block">{renderContentLaptop()}</div>
  </div>;
};
