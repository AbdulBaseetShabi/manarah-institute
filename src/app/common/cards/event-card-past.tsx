// import Image from "next/image";
import { MainEvent } from "../types";

type MainEventCardProps = MainEvent & {
  index: number;
}

export const MainEventCard = ({
  index,
  // image,
  title,
  descriptions,
}: MainEventCardProps) => {
  const isEvenIndex = index %  2 === 0;
  const className = `flex flex-wrap justify-center ${
    isEvenIndex ? "" : "md:flex-row-reverse"
  } w-full my-16`;

  return (
    <div className={className}>
      <div className="w-1/2 min-w-96 h-96" style={{ paddingRight: isEvenIndex ?  "2.5%" : "" }}>
        <div
          className="h-96 rounded-lg"
          style={{ backgroundColor: "#4d2a70" }}
        >
          {/* <Image
            src={`/${image}`}
            alt={title}
            fill
            style={{ borderRadius: "0.5rem" }}
          /> */}
        </div>
        {/* <div className="h-96" style={{ transform: "translate(3%, -105%)" }}>
          <Image
            src={`/${image}`}
            alt={title}
            fill
            style={{ borderRadius: "0.5rem" }}
          />
        </div> */}
      </div>
      <div className="h-96 border-black w-1/2 min-w-96 flex md:items-center mt-4 md:mt-0" style={{ paddingRight: isEvenIndex ? "" : "2.5%" }}>
        <div className="flex flex-col">
          <h3 className="mb-2 text-center md:text-left text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{title}</h3>
          <div className="text-center md:text-left">{descriptions.map((description, i) => <p key={i} className="mt-2">{description}</p>)}</div>
        </div>
      </div>
    </div>
  );
};

// origin-bottom -rotate-12 -translate-x-full

{
  /* <div className="h-full w-1/2 min-w-96">
<div className="bg-amber-700 h-full">Image Box 1</div>
<div className="h-full border-black border-2 bg-green-100 -translate-y-full origin-bottom -rotate-12">Image Box 2</div>
</div> */
}

// YOU DONT NEED 2 DIVS ONE PARENT AND ONE CHILD SHOULD
