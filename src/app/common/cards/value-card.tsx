import React from "react";
import Image from "next/image";
import { Value } from "../types";

export const ValueCard: React.FC<Value> = ({
  icon,
  titleEnglish,
  titleArabic,
  description,
}) => (
  <div
    className="rounded-md border p-4 content box-border grow shadow-md bg-white"
    style={{ minWidth: "380px", width: "30%" }}
  >
    <div className="flex flex-wrap gap-1.5 items-center mb-4">
      <div className="w-8 h-8">
        <Image
          src={`/icons/${icon}`}
          alt={titleEnglish}
          width={32}
          height={32}
        />
      </div>
      <h3 className="font-bold leading-8 m-0">{titleArabic}</h3>
    </div>
    <p>{description}</p>
  </div>
);
