import React from "react";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";
import "./Menu.css";
const Menu = () => {
  let links = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "About",
      route: "/about",
    },
    {
      text: "Pages",
      route: "/pages",
    },
    {
      text: "Project",
      route: "/project",
    },
    {
      text: "Contact",
      route: "/contact",
    },
  ];
  let socialLinks = [instagram, facebook, twitter, linkedin];

  return (
    <div className="menu">
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.text}>
                <a href={link.route}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="social-links">
        {socialLinks.map((socialLink, index) => (
          <img src={socialLink} alt="social link" key={index} />
        ))}
        <button className="menu-quote">Request Quote</button>
      </div>
    </div>
  );
};

export default Menu;
