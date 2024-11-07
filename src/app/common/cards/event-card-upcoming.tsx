import Button from "../button";

interface UpcomingEventCardProps {
  title: string;
  description: string;
  location: string;
  date: Date;
  startTime: string;
  endTime: string;
  isPastEvent?: boolean;
}

export const UpcomingEventCard = ({
  title,
  location,
  description,
  date,
  startTime,
  endTime,
  isPastEvent = false,
}: UpcomingEventCardProps) => {
  const eventDuration = `${date.toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} @ ${startTime} - ${endTime}`;

  return (
    <div className="shadow-md border p-4 mt-4">
      <div className="flex flex-wrap">
        <div className="w-32 text-center hidden md:block">
          <div className="w-full font-extralight">
            {date
              .toLocaleDateString("en-us", { weekday: "long" })
              .toUpperCase()}
          </div>
          <div className="w-full font-bold">{date.getDate()}</div>
        </div>
        <div className="flex flex-col w-1/2 grow">
          <div className="font-light">{eventDuration}</div>
          <div className="font-bold">{title}</div>
          <p className="font-light italic">{location}</p>
          <p className="mt-2">{description}</p>
          {!isPastEvent ? (
            <div className="w-full mt-3 max-w-96 self-end">
              <Button text="Sign Up" link="" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
