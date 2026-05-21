import React from "react";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="border-b border-black/5 bg-momentum-cream/80 backdrop-blur sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 relative transition-all">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-noir tracking-wide text-momentum-text">
            MOMENTUM
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-8 text-sm text-momentum-softText">
          <a href="#" className="hover:text-momentum-wine transition">
            Shop
          </a>

          <a href="#" className="hover:text-momentum-wine transition">
            Collections
          </a>

          <a href="#" className="hover:text-momentum-wine transition">
            About
          </a>

          {/* Search */}
          <div className="hidden lg:flex items-center text-sm gap-2 border border-black/10 px-4 rounded-full bg-white">
            <input
              className="py-2 w-full bg-transparent outline-none placeholder:text-black/50 text-black"
              type="text"
              placeholder="Search products"
            />

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.836 10.615 15 14.695"
                stroke="#5f5a54"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                clipRule="evenodd"
                d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
                stroke="#5f5a54"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <Link to="/cart">
            <div className="relative cursor-pointer">
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {totalItems > 0 && (
                <button className="absolute -top-2 -right-3 text-xs text-white bg-momentum-wine w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {totalItems}
                </button>
              )}
            </div>
          </Link>
          <button className="cursor-pointer px-8 py-2 bg-momentum-wine/80 hover:bg-momentum-wine transition text-white rounded-full">
            Login
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${open ? "flex" : "hidden"} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
