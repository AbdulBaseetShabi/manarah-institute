import {UpcomingEvents} from "./events/upcoming";
import { AnnualEvents } from "./events/yearly";

const Events = () => {
  return (
    <div>
        <UpcomingEvents/>
        <AnnualEvents/>
    </div>
  );
};

export default Events;
