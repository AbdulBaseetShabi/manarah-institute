import Title from "../../common/title";
import {
  UpcomingEventCard,
  UpcomingEventCardProps,
} from "../../common/cards/event-card-upcoming";
import PageLayout from "../../common/layout/page-layout";
import { parse } from "date-fns";
import { RouteId } from "@/app/common/types";

interface EventCard extends Omit<UpcomingEventCardProps, "date"> {
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

export const UpcomingEvents = () => {
  return (
    <PageLayout id={RouteId.upcomingEvents} backgroundColor="white">
      <Title title="Upcoming Events"/>
      <div className="grid md:grid-cols-2 gap-8">
        {[...upcomingEvents, ...upcomingEvents].map((data, index) => {
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
    </PageLayout>
  );
};
