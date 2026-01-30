"use client";

import Link from "next/link";
import Image from "next/image";
import routes from "./routes";
import Button from "./button";
import { LeftSlider, RightSlider } from "./animation";
import LINKS from "./links";
import AlertModal from "./alert-modal";
import React from "react";
import { MessageKey, messages } from "./messages";

const LOGO = "/main-logo.jpg";
const NavigationBarDesktop = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav>
      <div className="navbar hidden md:flex">
        <LeftSlider className="navbar-start pl-4">
          <Image src={LOGO} alt="Manarah Institute Logo" width={150} height={50} className="h-12 w-auto" />
        </LeftSlider>
        <RightSlider className="navbar-end flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map(({ id, label, sub_routes, hide }, index) => {
              if (hide) {
                return null;
              }

              if (!sub_routes) {
                return (
                  <li key={label}>
                    <a
                      href={`#${id}`}
                      className="hover:bg-ghostwhite hover:text-black rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <div className="dropdown dropdown-bottom dropdown-end dropdown-hover hover:bg-ghostwhite hover:text-black">
                    <div tabIndex={0} className="text-sm font-medium">
                      {label}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 z-[1] w-44 p-2 shadow bg-white"
                    >
                      {sub_routes.map(({ id, label }, index) => (
                        <li key={index}>
                          <a
                            href={`#${id}`}
                            className="hover:bg-ghostwhite hover:text-black rounded-md px-3 py-2 text-sm font-medium text-black cursor-pointer"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          |
          <div className="mx-2">
            <Button link={LINKS.donate} onClick={() => setIsOpen(true)}>{"Donate"}</Button>
          </div>
        </RightSlider>
      </div>
      {isOpen && <AlertModal message={messages[MessageKey.donationUnavailable]} handleClose={() => setIsOpen(false)} />}
    </nav>
  );
};

const NavigationBarMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar flex md:hidden justify-between">
      <div className="navbar-center">
        <Image src={LOGO} alt="Manarah Institute Logo" width={120} height={40} className="h-8 w-auto" />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {routes.map(({ id, label, sub_routes, hide }, index) => {
              if (hide) {
                return null;
              }

              if (!sub_routes) {
                return (
                  <li
                    key={label}
                    className="hover:bg-ghostwhite text-black hover:text-black rounded-md"
                  >
                    <a href={`#${id}`} className="">
                      {label}
                    </a>
                  </li>
                );
              }

              return sub_routes.map(({ id, label, hide }, index) => {
                if (hide) {
                  return null;
                }

                return (
                  <li key={label}>
                    <Link href={`#${id}`}>{label}</Link>
                  </li>
                );
              });
            })}
            <div className="mt-4 w-full">
              <Button link={LINKS.donate} fullWidth onClick={() => setIsOpen(true)}>{"Donate"}</Button>
            </div>
          </ul>
        </div>
      </div>
      {isOpen && <AlertModal message={messages[MessageKey.donationUnavailable]} handleClose={() => setIsOpen(false)} />}
    </nav>
  );
};

const NavigationBar = () => {
  return (
    <div className="shadow-md">
      <NavigationBarMobile />
      <NavigationBarDesktop />
    </div>
  );
};
export default NavigationBar;
