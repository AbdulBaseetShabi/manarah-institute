import Link from "next/link";
import { Route } from "./types";
import Button from "./button";

const routes: Route[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "core",
    label: "Team",
    sub_routes: [
      {
        id: "core",
        label: "Core Team",
      },
      {
        id: "board",
        label: "Advisory Board",
      },
    ],
  },
  {
    id: "volunteer",
    label: "Support",
    sub_routes: [
      {
        id: "volunteer",
        label: "Volunteer",
      },
      {
        id: "donate",
        label: "Donate",
        hide: true,
      },
    ],
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

const NavigationBarDesktop = () => {
  return (
    <nav>
      <div className="navbar hidden lg:flex">
        <div className="navbar-start">Logo</div>
        <div className="navbar-end flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map(({ id, label, sub_routes }, index) => {
              if (!sub_routes) {
                return (
                  <li key={index}>
                    <Link href={id}>{label}</Link>
                  </li>
                );
              }

              return (
                <li>
                  <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                    <div tabIndex={0} role="button">
                      {label}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 z-[1] w-44 p-2 shadow bg-white"
                    >
                      {sub_routes.map(({ id, label }) => (
                        <li>
                          <Link href={id}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
          <>|</>
          <div className="mx-4">
            <Button text="Donate" link={""} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavigationBarMobile = () => {
  return (
    <nav className="navbar flex lg:hidden justify-between">
      <div className="navbar-center">Logo</div>
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
            {routes.map(({ id, label, sub_routes }, index) => {
              if (!sub_routes) {
                return (
                  <li key={index}>
                    <Link href={id}>{label}</Link>
                  </li>
                );
              }

              return sub_routes.map(({ id, label, hide }, index) => {
                if (hide) {
                  return null;
                }

                return (
                  <li key={index}>
                    <Link href={id}>{label}</Link>
                  </li>
                );
              });
            })}
            <Button text="Donate" link={""} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavigationBar = () => {
  return (
    <>
      <NavigationBarMobile />
      <NavigationBarDesktop />
    </>
  );
};
export default NavigationBar;
