import { Route, RouteId } from "./types";

const routes: Route[] = [
  {
    id: RouteId.home,
    label: "Home",
  },
  {
    id: RouteId.events,
    label: "Events",
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
    label: "Support",
    sub_routes: [
      {
        id: RouteId.volunteer,
        label: "Volunteer",
      },
      {
        id: RouteId.donate,
        label: "Donate",
        hide: true,
      },
    ],
  },
  {
    id: RouteId.contact,
    label: "Contact Us",
  },
];

export default routes;
