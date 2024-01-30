import { NavLink } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { useRef, useEffect } from "react";
import Overlay from "../common/Overlay";
import SearchBar from "../common/SearchBar";
import useToggle from "../../hooks/useToggle";
import useWindowSize from "../../hooks/useWindowSize";
import useOutsideClick from "../../hooks/useOutsideClick";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [isSearchOpen, toggleSearch] = useToggle(false);
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [isDesktop, toggleDesktop] = useToggle(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openSearchBar = () => {
    toggleSearch(true);
  };
  const closeMenu = () => {
    toggleMenu(false);
  };
  const openMenu = () => {
    toggleMenu(true);
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    toggleDesktop(windowSize.width >= 768);
  }, [windowSize]);

  useOutsideClick(menuRef, closeMenu);

  return (
    <>
      <header id="header">
        {isMenuOpen && <Overlay />}
        <div className="container">
          <div className="navBar">
            <h2 className="nav__logo">
              <NavLink to="/">MyCar</NavLink>
            </h2>
            {(isMenuOpen || isDesktop) && (
              <div className="nav__links ">
                <span className="close__icon" onClick={closeMenu}>
                  <AiOutlineClose />
                </span>
                <div className="menu" ref={menuRef}>
                  {navLinks.map((link, index) => (
                    <NavLink
                      key={index}
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__link nav__active"
                          : "nav__link"
                      }
                      onClick={closeMenu}
                    >
                      {link.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

            <div className="nav__actions">
              <div className="search__action">
                <span onClick={openSearchBar}>
                  <FiSearch />
                </span>
              </div>
              <div className="wishlist__action">
                <span>
                  <AiOutlineHeart />
                </span>
              </div>
              <div className="user__action">
                <span>
                  <AiOutlineUser />
                </span>
              </div>
              <div className="mobileMenu__action" onClick={openMenu}>
                <span>
                  <TbMenuDeep />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <>
          <Overlay />
          {/* Pass toggleSearch as a function */}
          <SearchBar toggleSearch={() => toggleSearch()} />
        </>
      )}
    </>
  );
};

export default Header;
