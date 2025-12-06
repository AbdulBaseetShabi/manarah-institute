import { QUICK_DONATION_LINK } from "../common/constants";
import HorizontalLine from "../common/horizontal-line";
import { FooterLink } from "../common/types";

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
const Footer = () => {
  return (
    <footer className="px-1 py-2 w-full bg-white my-2">
      <HorizontalLine />
      <div className="text-center text-gray-600 mt-4">
        Copyright © {new Date().getFullYear()} - All right reserved by Manarah
        Institute | Registered Non-Profit No. ....
      </div>
      <div className="text-center flex flex-wrap justify-center font-light font-semibold">
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
    </footer>
  );
};

export default Footer;
