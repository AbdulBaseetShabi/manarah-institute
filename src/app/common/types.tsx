export enum RouteId {
  home = "home",
  events = "events",
  core = "core",
  board = "board",
  volunteer = "volunteer",
  donate = "donate",
  contact = "contact",
  team = "team",
  support = "support"
}

export interface Route {
  id: RouteId;
  label: string;
  sub_routes?: Omit<Route, "sub_routes">[];
  hide?: boolean;
}

export interface MainEvent {
  image: string;
  title: string;
  descriptions: string[];
}

export interface UpcomingEvent {
  title: string;
  description: string;
  location: string;
  date: Date;
  startTime: string;
  endTime?: string;
}

export interface Value {
  titleArabic: string;
  titleEnglish: string;
  description: string;
  icon: string;
}