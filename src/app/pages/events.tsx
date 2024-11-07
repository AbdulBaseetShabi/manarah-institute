import EventCard from "../common/cards/event-card";
import PageLayout from "../common/layout/page-layout";
import Title from "../common/title";
import { RouteId } from "../common/types";

const Events = () => {
  return (
    <PageLayout id={RouteId.events}>
      <Title title="Events"/>
      <div>This is the Events Page</div>
      <EventCard index={0}/>
      <EventCard index={1}/>
    </PageLayout>
  );
};

export default Events;
