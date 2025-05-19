import React from "react";
import Image from "next/image";
import Button from "../button";
import HorizontalLine from "../horizontal-line";

export interface UpcomingEventCardProps {
  title: string;
  description?: string;
  location: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export const UpcomingEventCard = ({
  title,
  location,
  description,
  date,
  startTime,
  endTime,
}: UpcomingEventCardProps) => {
  const eventDuration = `${date.toLocaleDateString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} | ${startTime} - ${endTime}`;

  return (
    <div
      style={{
        width: "368px",
      }}
    >
      <div className="p-2 border bg-white rounded w-fit shadow">
        <Image src="/placeholder.png" height={350} width={350} alt={title} />
      </div>
      <div className="my-4">
        <div className="font-bold">{title}</div>
        <div className="font-light">{eventDuration}</div>
        <p className="font-light">
          <span className="font-medium">Location:</span> {location}
        </p>
        {description && (
          <div>
            <HorizontalLine />
            <p>{description}</p>
            <HorizontalLine />
          </div>
        )}
      </div>
      <div className="w-full mt-3 max-w-96 self-end shadow-2xl rounded-full">
        <Button text="Signup for Event" link="" />
      </div>
    </div>
  );
};
