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

  return (
    <div
      className="relative"
      style={{
        minHeight: "660px",
      }}
    >
      <div
        className="absolute w-full"
        style={{
          minHeight: "660px",
        }}
      >
        <Image
          src={`/events/${image}`}
          alt={title}
          fill
          className="object-cover h-full w-full"
        />
        <div
          className={`absolute inset-0 ${
            isEvenIndex ? "bg-gradient-to-r" : "bg-gradient-to-l"
          } from-slate-900/90 via-slate-800/70 to-transparent`}
        />
      </div>
      <div
        className={`absolute flex items-center h-full ${
          isEvenIndex ? "pl-8 justify-start" : "pr-8 justify-end"
        }`}
      >
        <div
          className={`flex flex-col text-white text-lg h-fit ${
            isEvenIndex ? "text-left" : "text-right"
          } lg:w-1/2`}
        >
          <UpSlider>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">{title}</h3>
          </UpSlider>
          <UpSlider delay={1}>
            {descriptions.map((description, i) => (
              <p key={i} className="mt-2">
                {description}
              </p>
            ))}
          </UpSlider>
        </div>
      </div>
    </div>
  );
};
