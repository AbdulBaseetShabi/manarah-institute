import PastEventCard from "../common/cards/event-card-past";
import { UpcomingEventCard } from "../common/cards/event-card-upcoming";
import PageLayout from "../common/layout/page-layout";
import Title from "../common/title";
import { RouteId } from "../common/types";
import { parse } from "date-fns";

const placeholderData =   {
  date: "16/09/2025",
  title: "Till Death Do Us Apart",
  description:
    "Join us for this talk with shaykh Usman to learn more about what exactly makes someone ready to embark on this journey of courtship and marriage, in addition to reminding ourselves of the islamic purpose(s) of this sacred union!",
  location: "Kitchener Masjid",
  startTime: "7:00 pm",
  endTime: "9:00 pm",
  imageUrl:
    "https://cdn.pixabay.com/photo/2020/05/26/18/22/lantern-5224200_1280.png",
};

const Events = () => {
  const parsedEventDate = parse(
    `${placeholderData.date} ${placeholderData.endTime}`,
    "dd/MM/yyyy hh:mm aaa",
    new Date()
  );

  return (
    <PageLayout id={RouteId.events}>
      <Title title="Events"/>
      <div>This is the Events Page</div>
      <UpcomingEventCard {...placeholderData} date={parsedEventDate}/>
      <PastEventCard index={0}/>
      <PastEventCard index={1}/>
    </PageLayout>
  );
};

export default Events;
