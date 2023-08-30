import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo_blue from "../assets/ec-logo-blue-1.png";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navigation = [
  { name: "Services", to: "services" },
  { name: "About us", to: "about" },
  { name: "Team", to: "team" },
];

const pages = [{ name: "Projects", href: "/projects" }];

function AppLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, [location]);

  // const scrollToSection = (sectionId) => {
  //   scroll.scrollTo(sectionId, {
  //     duration: 500,
  //     smooth: "easeInOutQuart",
  //     offset: -70,
  //   });
  // };

  // const handleNavigationClick = (item) => {
  //   console.log("&&&&&&&^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6");
  //   if (item.to) {
  //     scrollToSection(item.to);
  //   }
  // };
  return (
    <div className="bg-gray-900">
      <header className="sticky inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-6 lg:px-8 bg-gray-900 blur-md/50 backdrop-filter backdrop-blur-md bg-opacity-60"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Engineering Change</span>
              <img className="h-16 w-auto" src={logo_blue} alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item, index) =>
                location.pathname === "/" ? (
                  <ScrollLink
                    key={index}
                    to={item.to}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-sm font-semibold leading-6 text-white cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <a
                    key={index}
                    href={`/`}
                    className="text-sm font-semibold leading-6 text-white cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              )}
              {pages.map((item, index) => (
                <Link
                  to={item.href}
                  key={index}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="py-6">
              <Link
                to="/contact"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="-m-1.5 p-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Engineering Change</span>
                <img className="h-16 w-auto" src={logo_blue} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <ScrollLink
                      key={index}
                      to={item.to}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </ScrollLink>
                  ))}
                  {pages.map((item, index) => (
                    <Link
                      to={item.href}
                      key={index}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link to="/contact">
                    <a
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      onClick={() => {
                        console.log("Contact Us link clicked");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Contact us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className="-mt-28">{children}</main>
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
