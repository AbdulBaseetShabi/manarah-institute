import { Route, RouteId } from "./types";

const routes: Route[] = [
  {
    id: RouteId.home,
    label: "Home",
  },
  {
    id: RouteId.values,
    label: "Core Values",
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
  },
  {
    id: RouteId.volunteer,
    label: "Volunteer",
  },
  {
    id: RouteId.testimonials,
    label: "Testimonials",
  },
  {
    id: RouteId.contact,
    label: "Contact Us",
  },
];

export default routes;
