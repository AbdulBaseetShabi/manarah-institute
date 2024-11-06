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
