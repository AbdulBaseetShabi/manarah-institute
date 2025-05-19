import Image from "next/image";

import PageLayout from "../common/layout/page-layout";
import { RouteId } from "../common/types";
import { QUICK_DONATION_LINK } from "../common/constants";
import HorizontalLine from "../common/horizontal-line";

interface FooterLink {
  description: string;
  link: string;
}

const socials: (FooterLink & { imgUrl: string; dimension: number })[] = [
  {
    description: "Instagram",
    link: "https://www.instagram.com/_alsakinah_",
    imgUrl: "./instagram.svg",
    dimension: 20,
  },
  {
    description: "Email",
    link: "mailto:alsakinah.kw@gmail.com",
    imgUrl: "./envelope.svg",
    dimension: 23,
  },
];

const footerLinks: FooterLink[] = [
  {
    description: "Open Feedback Form",
    link: "",
  },
  {
    description: "Quick Donate",
    link: QUICK_DONATION_LINK,
  },
  {
    description: "Events",
    link: "/events",
  },
  {
    description: "About Us",
    link: "/",
  },
];
const Contact = () => {
  return (
    <PageLayout id={RouteId.contact} fullPage={false}>
      <footer className="px-1 py-2 w-full bg-white">
        <HorizontalLine />
        <div className="flex justify-center gap-4">
          {socials.map(({ description, imgUrl, link, dimension }, index) => (
            <div key={index} className="flex justify-center">
              <a
                href={link}
                className="flex justify-center rounded-full p-2 bg-[#CF9C4F] w-8 h-8"
              >
                <Image
                  src={imgUrl}
                  alt={description}
                  width={dimension}
                  height={dimension}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center flex flex-wrap justify-center m-2 font-light">
          {footerLinks.map(({ description, link }, index) => (
            <div key={index}>
              <a href={link} target="blank">
                {description}
              </a>
              {index === footerLinks.length - 1 ? null : (
                <span className="mx-2">&#183;</span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by Manarah
          Institute
        </div>
        <div className="text-center my-1 font-light text-md">
          Registered Non-Profit No. ....
        </div>
      </footer>
    </PageLayout>
  );
};

export default Contact;
