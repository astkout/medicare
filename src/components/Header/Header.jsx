import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const stickyNavRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const hideMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleStickyHeader = () => {
      const header = document.querySelector(".header");
      const stickyNav = stickyNavRef.current;

      const sticky = header.offsetTop;

      const scrollHandler = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > sticky) {
          header.classList.add("sticky__header");
        } else {
          header.classList.remove("sticky__header");
        }

        if (!isMenuOpen && currentScrollY > prevScrollY.current) {
          stickyNav.classList.remove("show__menu");
        }

        prevScrollY.current = currentScrollY;
      };

      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    };

    handleStickyHeader();
  }, [isMenuOpen]);

  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div
            className={`navigation ${isMenuOpen ? "show__menu" : ""}`}
            ref={stickyNavRef}
          >
            <ul className="menu flex items-center gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="your-class-names"
                    activeClassName="active-link" // Add this line
                    onClick={() => {
                      hideMenu();
                    }}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    className="h-[30px] w-[30px]"
                    src={userImg}
                    alt="userImg"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-blue-800 py-2 px-6 text-white font-[600] h-[44px] flex justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
