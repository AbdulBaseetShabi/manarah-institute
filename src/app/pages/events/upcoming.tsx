"use client";

import Title from "../../common/title";
import {
  UpcomingEventCard,
  UpcomingEventCardProps,
} from "../../common/cards/event-card-upcoming";
import PageLayout from "../../common/layout/page-layout";
import { parse } from "date-fns";
import { RouteId } from "@/app/common/types";
import { useEffect, useState } from "react";
import Loading from "@/app/common/loading";
import { contacts } from "../contact";

interface EventCard extends Omit<UpcomingEventCardProps, "date"> {
  date: string | null;
}

interface ExcelRow {
  c: ExcelData[];
}

interface ExcelData {
  v: string | null;
  f: string | null;
}

export const UpcomingEvents = () => {
  const [loading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);
  const [rows, setRows] = useState<EventCard[]>([]);
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/18FZLMayjSHS1LhnGm7wwJFpNzUwZqJb0hO2IOX28xqU/gviz/tq?sheet=Messages_";

  const parseRow = (row: ExcelData[]): EventCard => {
    return {
      title: row[0]?.v,
      description: row[1]?.v,
      location: row[2]?.v,
      date: row[3]?.f,
      startTime: row[4]?.f,
      endTime: row[5]?.f,
      imgUrl: row[6]?.v,
      signUpUrl: row[7]?.v,
    };
  };

  useEffect(() => {
    const loadRows = async () => {
      await fetch(sheetUrl)
        .then((x) => x.text())
        .then((x) => {
          const jsonPart = x.split("setResponse(")[1];
          const text = jsonPart.slice(0, jsonPart.length - 2);
          const toJson = JSON.parse(text);
          const rows = (toJson.table.rows as ExcelRow[]).map((x) =>
            parseRow(x.c)
          );
          setRows(rows);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setIsLoading(false));
    };

    loadRows();
  });

  return (
    <PageLayout id={RouteId.upcomingEvents} backgroundColor="white">
      <Title title="Upcoming Events" />
      {loading ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <Loading />
          <p>Fetching Upcoming Events</p>
        </div>
      ) : error ? (
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold">*** Error ***</h3>
          <p >
            An error occurred whilst trying to fetch the upcoming event. Please
            try reloading the page to resolve the issue, if this does not work -
            reach out to us on <a href={contacts.instagram} target="_blank">Instagram</a> to let us know
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {rows.map((data, index) => {
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
      )}
    </PageLayout>
  );
};
