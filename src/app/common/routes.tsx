import { Route, RouteId } from "./types";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Volunteer from "../pages/volunteer";
import Team from "../pages/team";
import Testimonials from "../pages/testimonials";
import Values from "../pages/values";
import Events from "../pages/events";

const routes: Route[] = [
  {
    id: RouteId.home,
    label: "Home",
    view: <Home/>,
  },
  {
    id: RouteId.values,
    label: "Core Values",
    view: <Values/>,
  },
  {
    id: RouteId.events,
    label: "Events",
    sub_routes: [
      {
        id: RouteId.upcomingEvents,
        label: "Upcoming Events",
      },
      {
        id: RouteId.annualEvents,
        label: "Annual Events",
      },
    ],
    view: <Events/>,
  },
  {
    id: RouteId.core,
    label: "Team",
    sub_routes: [
      {
        id: RouteId.core,
        label: "Core Team",
      },
      {
        id: RouteId.board,
        label: "Advisory Board",
      },
    ],
    view: <Team/>,
  },
  {
    id: RouteId.volunteer,
    label: "Volunteer",
    view: <Volunteer/>,
  },
  {
    id: RouteId.testimonials,
    label: "Testimonials",
    view: <Testimonials/>,
    hide: true,
  },
  {
    id: RouteId.contact,
    label: "Contact Us",
    view: <Contact/>,
  },
];

export default routes;
