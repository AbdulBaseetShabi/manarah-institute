import Image from "next/image";
import { MainEvent } from "../types";
import { UpSlider } from "../animation";

type MainEventCardProps = MainEvent & {
  index: number;
};

export const MainEventCard = ({
  index,
  image,
  title,
  descriptions,
}: MainEventCardProps) => {
  const isEvenIndex = index % 2 === 0;

  const renderContentMobile = () => {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src={`/events/${image}`}
          alt={title}
          className="h-48 w-full object-cover"
        />
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
          <img
            src={`/events/${image}`}
            alt={title}
            className="h-96 w-full object-cover"
          />
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
