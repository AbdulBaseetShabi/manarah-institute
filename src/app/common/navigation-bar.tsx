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
        label: "Core",
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
      },
    ],
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

const NavigationBar = () => {
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
                    <div tabIndex={0} role="button">{label}</div>
                    <ul  tabIndex={0} className="dropdown-content menu p-2 z-[1] w-44 p-2 shadow bg-white">
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

export default NavigationBar;
