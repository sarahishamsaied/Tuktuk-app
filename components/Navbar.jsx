import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/Group 1.png";
export default function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <nav className="bg-black shadow-lg fixed w-screen z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <Link to="/">
                  <img className="h-8 text-white w-8" src={logo} alt="logo" />
                </Link> */}
                <Link to="/" className="text-white font-bold">
                  POUSY CAB
                </Link>
              </div>
              <div className=" md:block hidden sm:flex lg:flex xl:flex 2xl:flex">
                <div className="ml-10 flex items-baseline space-x-4 xs:space-x-0">
                  <Link
                    to="/"
                    className=" hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/events"
                    className="text-gray-300 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </Link>

                  <Link
                    to="/articles"
                    className="text-gray-300 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Articles
                  </Link>

                  <a
                    href="https://www.ieee.org/membership/index.html"
                    className="text-gray-300 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Membership
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden xs:block sm:block xl:hidden 2xl:hidden 3xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden sm:block " id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium "
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  to="/events"
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </Link>

                <Link
                  to="/articles"
                  onClick={handleClick}
                  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Articles
                </Link>
                <a
                  onClick={handleClick}
                  href="https://www.ieee.org/membership/index.html"
                  className="text-gray-300 hover:bg-zinc-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Membership
                </a>
              </div>
            </div>
          )}
        </Transition> */}
      </nav>
    </div>
  );
}
