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
import LINKS from "@/app/common/links";

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

const LIMIT = 6;

export const UpcomingEvents = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(true);
  const [rows, setRows] = useState<UpcomingEventCardProps[]>([]);
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/18FZLMayjSHS1LhnGm7wwJFpNzUwZqJb0hO2IOX28xqU/gviz/tq?sheet=Messages_";

  const parseRow = (row: ExcelData[]): EventCard => {
    return {
      title: row[0]?.v,
      description: parseDescription(row[1]?.v),
      location: row[2]?.v,
      date: row[3]?.f,
      startTime: row[4]?.f,
      endTime: row[5]?.f,
      imgUrl: row[6]?.v,
      signUpUrl: row[7]?.v,
    };
  };

  const parseDescription = (desc: string | null): string[] | null => {
    if (!desc) return null;
    return desc.split("\n").map((line) => line.trim()).filter((line) => line.length > 0);
  }
  const loadRows = async () => {
      await fetch(sheetUrl)
        .then((x) => x.text())
        .then((x) => {
          const jsonPart = x.split("setResponse(")[1];
          const text = jsonPart.slice(0, -2);
          const toJson = JSON.parse(text);
          const rows = (toJson.table.rows as ExcelRow[]).map((x) =>
            parseRow(x.c)
          );
          setRows(filterAndSortRows(formatRows(rows)));
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
        })
        .finally(() => setLoading(false));
    };

  useEffect(() => {
    loadRows();

    // Set up the interval to run every 1 minutes
    const intervalId = setInterval(loadRows, 1 * 60 * 1000); 

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatRows = (data: EventCard[]): UpcomingEventCardProps[] => {
    return data.map((item) => ({
      ...item,
      imgUrl: convertImgUrl(item.imgUrl),
      date: item.date
        ? parse(item.date, "MM/dd/yyyy", new Date())
        : null,
    }));
  }

  const convertImgUrl = (url: string | null): string | null => {
    if (!url) return null;

    if (url.startsWith("https://drive.google.com/thumbnail?id=")) {
      return url;
    }
    
    if (url.match("https://drive.google.com/file/d/") ) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
      return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : null;
    }

    return url;
  }

  const parseTimeToDate = (timeString: string): Date => {
    try {
      return parse(timeString, "h:mm a", new Date());
    } catch {
      return new Date(0);
    }
  }

  const filterAndSortRows = (data: UpcomingEventCardProps[]): UpcomingEventCardProps[] => {
    const currentDate = new Date();
    return data
      .filter((item) => !item.date || item.date >= currentDate)
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        const sub = a.date.getTime() - b.date.getTime();

        if (sub == 0) {
          if (!a.startTime) return 1;
          if (!b.startTime) return -1;

          const aTime = parseTimeToDate(a.startTime);
          const bTime = parseTimeToDate(b.startTime);
          return aTime.getTime() - bTime.getTime();
        }
        return sub
      }).slice(0, LIMIT);
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col justify-center items-center gap-2">
          <Loading />
          <p>Fetching Upcoming Events</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="w-full text-center">
          <h3 className="text-2xl font-bold">*** Error ***</h3>
          <p >
            An error occurred whilst trying to fetch the upcoming event. Please
            try reloading the page to resolve the issue, if this does not work -
            reach out to us on <a href={LINKS.instagram} target="_blank">Instagram</a> to let us know
          </p>
        </div>
      );
    }

    if (rows.length === 0) {
      return (
        <div className="w-full text-center">
          <p>
            There are currently no upcoming events. Please check back later or
            reach out to us on <a href={LINKS.instagram} target="_blank">Instagram</a> for more information.
          </p>
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-8">
        {rows.map((data) => {
          const uniqueKey = `${data.title}-${data.date?.getTime() || 'no-date'}-${data.startTime || 'no-time'}`;
          return (
            <UpcomingEventCard key={uniqueKey} {...data} />
          );
        })}
      </div>
    );
  };

  return (
    <PageLayout id={RouteId.upcomingEvents} backgroundColor="ghostwhite">
      <Title title="Upcoming Events" />
      {renderContent()}
    </PageLayout>
  );
};
