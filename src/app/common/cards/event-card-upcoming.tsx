import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import { Calendar, Clock, ExternalLink, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { LeftSlider } from "../animation";

export interface UpcomingEventCardProps {
  title: string | null;
  description: string[] | null;
  location: string | null;
  date: Date | null;
  startTime: string | null;
  endTime: string | null;
  imgUrl: string | null;
  signUpUrl: string | null;
  isDescriptionOpen?: boolean;
  onToggleDescription?: () => void;
}

const Time = ({
  startTime,
  endTime,
}: {
  startTime: UpcomingEventCardProps["startTime"];
  endTime: UpcomingEventCardProps["endTime"];
}) => {
  if (!startTime) {
    return null;
  }

  if (!endTime) {
    return (
      <div className="flex items-center gap-1">
        <Clock size={16} />
        {`${startTime} (Start Time)`}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <Clock size={16} />
      {`${startTime} - ${endTime}`}
    </div>
  );
};
export const UpcomingEventCard = ({
  title,
  location,
  description,
  date,
  startTime,
  endTime,
  signUpUrl,
  imgUrl,
  isDescriptionOpen = false,
  onToggleDescription,
}: UpcomingEventCardProps) => {
  return (
    <LeftSlider className="flex flex-col gap-4 justify-between rounded-xl py-6 hover:shadow-xl hover:shadow-slate-200/50 border bg-white/80 backdrop-blur-sm">
      {/* Content */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Image
            src={imgUrl || ""}
            alt={title || ""}
            width={1080}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Header */}
        <div className="flex flex-col gap-1.5 px-6">
          {title && (
            <h3 className="font-semibold text-xl text-slate-800 mb-2">
              {title}
            </h3>
          )}
          <div className="flex gap-1 text-sm text-gray-600 flex-col">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {date.toLocaleDateString("en-us", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </div>
            )}
            <Time startTime={startTime} endTime={endTime} />
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {location}
            </div>
          </div>
        </div>
        
        {/* Mobile View Description Toggle */}
        {description && description.length > 0 && (
          <>
            <button
              onClick={onToggleDescription}
              className="md:hidden flex items-center justify-between px-6 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              <span>View Description</span>
              {isDescriptionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {/* Description - Hidden on mobile unless open, always visible on desktop */}
            <div className={`leading-relaxed px-6 text-sm text-gray-700 transition-all duration-300 ${isDescriptionOpen ? 'block mb-4' : 'hidden'} md:block md:mb-4`}>
              {description.map((paragraph) => (
                <p key={paragraph} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-6">
        {signUpUrl ? (
          <Button link={signUpUrl} fullWidth>
            <div className="flex justify-center items-center font-medium">
              Sign Up
              <ExternalLink size={16} className="ml-2" />
            </div>
          </Button>
        ) : (
          <p>* No signup required</p>
        )}
      </div>
    </LeftSlider>
  );
};
