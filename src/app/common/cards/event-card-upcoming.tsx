import React from "react";
import Image from "next/image";
import Button from "../button";
import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import { LeftSlider } from "../animation";

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
  return (
    <LeftSlider className="flex flex-col gap-4 rounded-xl py-6 hover:shadow-xl hover:shadow-slate-200/50 border bg-white/80 backdrop-blur-sm">
      <div className="relative h-48">
        <Image
          src={"/placeholder.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <div className="flex flex-col gap-1.5 px-6">
        <h3 className="font-semibold text-xl text-slate-800 mb-2">{title}</h3>
        <div className="flex gap-1 text-sm text-gray-600 flex-col">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {date.toLocaleDateString("en-us", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            {`${startTime} - ${endTime}`}
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            {location}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="px-6">
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>
        <Button link={""} fullWidth>
          <div className="flex justify-center items-center font-medium">
            Sign Up
            <ExternalLink size={16} className="ml-2" />
          </div>
        </Button>
      </div>
    </LeftSlider>
  );
};
