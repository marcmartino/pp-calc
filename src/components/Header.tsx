import { FC } from "react";
import { Disclosure } from "@headlessui/react";
import { routes, useRoute } from "../utils/router";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface Props {}

const activeNavLink =
  "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
const inactiveNavLink =
  "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

const activeMobileNavLink =
  "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium";
const inactiveMobileNavLink =
  "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

export const Header: FC<Props> = ({ children }) => {
  const route = useRoute();

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
                      <a
                        {...routes.maxMultiplier().link}
                        className={
                          route.name === "maxMultiplier"
                            ? activeNavLink
                            : inactiveNavLink
                        }
                      >
                        Max Multiplier
                      </a>
                      <a
                        {...routes.requiredPP().link}
                        className={
                          route.name === "requiredPP"
                            ? activeNavLink
                            : inactiveNavLink
                        }
                      >
                        Required PP
                      </a>
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Disclosure.Button
                  as="a"
                  {...routes.maxMultiplier().link}
                  className={
                    route.name === "maxMultiplier"
                      ? activeMobileNavLink
                      : inactiveMobileNavLink
                  }
                  aria-controls="nav"
                >
                  Max Multiplier
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  {...routes.requiredPP().link}
                  className={
                    route.name === "requiredPP"
                      ? activeMobileNavLink
                      : inactiveMobileNavLink
                  }
                >
                  Required PP
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {route.name === "maxMultiplier" ? "Max Multiplier" : "Required PP"}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};
