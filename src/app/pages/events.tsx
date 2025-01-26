import {
  PastEventCard,
  PastEventCardProps,
} from "../common/cards/event-card-past";
import {
  UpcomingEventCard,
  UpcomingEventCardProps,
} from "../common/cards/event-card-upcoming";
import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import { parse } from "date-fns";

interface EventCard
  extends Omit<UpcomingEventCardProps, "date" | "isPastEvent"> {
  date: string;
}

const upcomingEvents: EventCard[] = [
  {
    date: "16/09/2025",
    title: "Till Death Do Us Apart",
    description:
      "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
    location: "Kitchener Masjid",
    startTime: "7:00 pm",
    endTime: "9:00 pm",
  },
];

const pastEvents: Omit<PastEventCardProps, "index">[] = [
  {
    image: "background.jpg",
    title: "Community Barbecue",
    description: "",
  },
  {
    image: "placeholder.png",
    title: "Youth Night",
    description: "",
  },
];

const Events = () => {
  return (
    <PageLayout id={RouteId.events}>
      <div>
        <h2 className="text-4xl md:text-5xl text-center font-black mb-7">
          Days to Mark on Your Calender
        </h2>
        {upcomingEvents.map((data, index) => {
          const parsedEventDate = parse(
            `${data.date} ${data.endTime}`,
            "dd/MM/yyyy hh:mm aaa",
            new Date()
          );

          return (
            <UpcomingEventCard key={index} {...data} date={parsedEventDate} />
          );
        })}
      </div>

      <div>
        {pastEvents.map((data, index) => (
          <PastEventCard key={index} {...data} index={index} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Events;
