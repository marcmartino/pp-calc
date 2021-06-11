import { FC, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { pages as ps } from "../constants/pageNavigation";
import { Link, useLocation } from "react-router-dom";

const navigation = ["Dashboard", "Team", "Projects", "Calendar", "Reports"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props<
  T extends Record<string, { title: string; route: string }> = typeof ps
> {
  activePage: keyof T;
  pages: T;
}

export const Header: FC<Props> = ({ children, activePage, pages = ps }) => {
  const location = useLocation();
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="/prest.png" alt="PP" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {Object.entries(pages).map(
                        ([key, { title, emptyRoute }], itemIdx) => {
                          return location.pathname.indexOf(emptyRoute) !==
                            -1 ? (
                            <Fragment key={key}>
                              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                              <Link
                                to={emptyRoute}
                                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                              >
                                {title}
                              </Link>
                            </Fragment>
                          ) : (
                            <Link
                              key={key}
                              to={emptyRoute}
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {title}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {Object.values(pages).filter(
              ({ emptyRoute }) => location.pathname.indexOf(emptyRoute) !== -1
            )[0]?.title || pages.maxMultiplier.title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};
