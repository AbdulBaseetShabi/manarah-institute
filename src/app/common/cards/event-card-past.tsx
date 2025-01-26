import Image from "next/image";

export interface PastEventCardProps {
  index: number;
  image: string;
  title: string;
  description: string;
}

export const PastEventCard = ({
  index,
  image,
  title,
  description,
}: PastEventCardProps) => {
  const isEvenIndex = index / 2 === 0;
  const className = `flex flex-wrap justify-center ${
    isEvenIndex ? "" : "md:flex-row-reverse"
  } w-full my-16`;

  return (
    <div className={className}>
      <div className="w-1/2 min-w-96 h-96" style={{ padding: "0 2.5% 0 0" }}>
        <div
          className="h-96 rounded-lg"
          style={{ backgroundColor: "#4d2a70" }}
        ></div>
        <div className="h-96" style={{ transform: "translate(3%, -105%)" }}>
          <Image
            src={`/${image}`}
            alt={title}
            fill
            style={{ borderRadius: "0.5rem" }}
          />
        </div>
      </div>
      <div className="h-96 border-black w-1/2 min-w-96 flex md:items-center mt-4 md:mt-0">
        <div className="flex flex-col">
          <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{title}</h3>
          <p>{description}</p>
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
