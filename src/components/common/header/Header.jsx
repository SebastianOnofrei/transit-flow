import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import icon1 from "../../../assets/headericon1.png";
import icon2 from "../../../assets/headericon2.png";
import icon3 from "../../../assets/headericon3.png";

const Header = () => {
  const headerItems = [
    {
      icon: icon1,
      text1: "Mon - Sat 9.00 - 18.00",
      text2: "Sunday Closed",
    },
    {
      icon: icon2,
      text1: "Email",
      text2: "contact@logistics.com",
    },
    {
      icon: icon3,
      text1: "Call Us",
      text2: "(00) 112 365 489",
    },
  ];
  return (
    <header>
      <img src={logo} alt="transit flow company logo" className="logo" />
      <div className="header__wrapper">
        {headerItems.map((item) => {
          return (
            <div className="header__wrapper__item">
              <img src={item.icon} alt="" />
              <div className="header__wrapper__item-info">
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
