import React from "react";
import { Testimonial } from "../types";

type TestimonyCardProps = Testimonial & {
  index: number;
};

export const TestimonyCard = ({
  index,
  name,
  testimony,
}: TestimonyCardProps) => {
  return (
    <div
      className="rounded-md border px-16 py-8 content box-border shadow-md w-96"
      style={{ backgroundColor: index % 2 === 0 ? "ghostWhite" : "white" }}
    >
      <p>{testimony}</p>
      <p className="font-bold mt-2 text-right">{name}</p>
    </div>
  );
};
