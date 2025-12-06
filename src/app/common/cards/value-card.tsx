import React from "react";
import Image from "next/image";
import { Value } from "../types";
import { RightSlider } from "../animation";

const ValueCardMobile: React.FC<Value> = ({
  icon,
  titleEnglish,
  titleArabic,
  description,
}) => (
  <RightSlider className="rounded-md border p-4 content box-border grow shadow-md bg-white hover:shadow-xl hover:shadow-slate-200/50 h-fit focus:h-full block md:hidden">
    <div tabIndex={0} className="collapse collapse-plus lg:collapse-open">
      <div className="collapse-title flex flex-wrap gap-2 items-center">
        <div className="w-8 h-8">
          <Image
            src={`/icons/${icon}`}
            alt={titleEnglish}
            width={32}
            height={32}
          />
        </div>
        <h3 className="font-semibold text-xl text-slate-800">{titleArabic}</h3>
      </div>
      <p className="collapse-content text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  </RightSlider>
);

const ValueCardDesktop: React.FC<Value> = ({
  icon,
  titleEnglish,
  titleArabic,
  description,
}) => (
  <RightSlider className="rounded-md border p-4 content box-border h-full shadow-md bg-white hover:shadow-xl hover:shadow-slate-200/50 hidden md:block">
    <div className="flex flex-wrap gap-2 items-center mb-8">
      <div className="w-8 h-8">
        <Image
          src={`/icons/${icon}`}
          alt={titleEnglish}
          width={32}
          height={32}
        />
      </div>
      <h3 className="font-semibold text-xl text-slate-800">{titleArabic}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </RightSlider>
);

export const ValueCard = (props: Value) => (
  <div className="h-full">
    <ValueCardMobile {...props} />
    <ValueCardDesktop {...props} />
  </div>
);
