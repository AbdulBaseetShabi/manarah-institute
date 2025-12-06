import Link from "next/link";
import routes from "./routes";
import Button from "./button";
import { LeftSlider, RightSlider } from "./animation";

const NavigationBarDesktop = () => {
  return (
    <nav>
      <div className="navbar hidden md:flex">
        <LeftSlider className="navbar-start pl-4">Logo</LeftSlider>
        <RightSlider className="navbar-end flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map(({ id, label, sub_routes }, index) => {
              if (!sub_routes) {
                return (
                  <li key={index}>
                    <a
                      href={`#${id}`}
                      className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={index}>
                  <div className="dropdown dropdown-bottom dropdown-end dropdown-hover hover:bg-gray-700 hover:text-white">
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
                            className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-black cursor-pointer"
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
          <>|</>
          <div className="mx-2">
            <Button link={""}>{"Donate"}</Button>
          </div>
        </RightSlider>
      </div>
    </nav>
  );
};

const NavigationBarMobile = () => {
  return (
    <nav className="navbar flex md:hidden justify-between">
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
                  <li
                    key={index}
                    className="hover:bg-[#3A3042] text-black hover:text-white rounded-md"
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
                  <li key={index}>
                    <Link href={`#${id}`}>{label}</Link>
                  </li>
                );
              });
            })}
            <Button link={""}>{"Donate"}</Button>
          </ul>
        </div>
      </div>
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
