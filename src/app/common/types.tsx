import React from "react";

export enum RouteId {
  home = "home",
  values = "values",
  events = "events",
  upcomingEvents = "upcoming-events",
  annualEvents = "annual-events",
  core = "core",
  board = "board",
  volunteer = "volunteer",
  donate = "donate",
  contact = "contact",
  team = "team",
  testimonials = "testimonials"
}

export interface Route {
  id: RouteId;
  label: string;
  sub_routes?: Omit<Route, "sub_routes" | "view">[];
  hide?: boolean;
  view: React.ReactNode;
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

export interface Testimonial {
  testimony: string;
  name: string;
}

export interface FooterLink {
  description: string;
  link: string;
}