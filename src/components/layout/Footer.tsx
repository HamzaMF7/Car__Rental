import { Link, useLocation } from "react-router-dom";
import CustomInput from "../common/CustomInput";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaCar, FaRegCopyright } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const [newsletterValue, setNewsletterValue] = useState("");
  const newsletterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterValue(e.target.value);
  };

  const date = new Date();
  const year = date.getFullYear();

  const location = useLocation();

  console.log(location);

  const { width } = useWindowSize();

  return (
    <footer
      className="layout__footer"    
      style={{
        marginBottom:
          (location.pathname === "/cars" || location.pathname.startsWith("/car-details/")) &&
          width &&
          width < 992
            ? "52px"
            : "0px",
      }}
    >
      <div className="container">
        <div className="content">
          <div className="logo__desc">
            <h4 className="logo">
              <FaCar className="car__logo" />
              Rent Car <br /> Service
            </h4>
            <h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, distinctio, itaque reiciendis ab cupiditate harum
                ex quam veniam, omnis expedita animi quibusdam obcaecati
                mollitia? Delectus et ad illo recusandae temporibus?
              </p>
            </h6>
          </div>
          <div className="quick__links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <h6>
                    <Link to={link.path}>{link.display}</Link>
                  </h6>
                </li>
              ))}
            </ul>
          </div>
          <div className="head__office">
            <h4>Head Office</h4>
            <ul>
              <li>
                <h6 className="office__info">
                  3er étage, Tour Habous, Av. des FAR, Casablanca
                </h6>
              </li>
              <li>
                <h6 className="office__info">Phone: +2125345875365</h6>
              </li>
              <li>
                <h6 className="office__info">Email: carrentalhelp@gmail.com</h6>
              </li>
              <li>
                <h6 className="office__info">Office Time: 10am - 7pm</h6>
              </li>
            </ul>
          </div>
          <div className="news__letter">
            <h4>Newsletter</h4>
            <h6 className="section__description">Subscribe our newsletter</h6>
            <CustomInput
              type="email"
              value={newsletterValue}
              onChange={newsletterOnChange}
              placeholder="Enter your Email"
              size="middle"
              inputClassName="newsletter__input"
              btn={true}
              buttonClassName="send"
              iconAlias={IoIosSend}
              iconClassName="send__icon"
            />
          </div>
        </div>
        <div className="copyright">
          <p className="txt">
            <FaRegCopyright />
            Copyright {year}, Developed by Hamza MAEROF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
