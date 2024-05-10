import React from "react";
import "./Banner.css";
import Header from "../header/Header";
const Banner = ({ bgImage, isHomeBanner }) => {
  // o sa folosesc menu aici
  // o sa primesc un bgImage pe care mai apoi il folosesc.
  // trebuie sa gandesc bine aici , ca o sa am imagini diferite ca si bg image :) deci am nevoie de css dinamic.
  // de asemenea cred ca o sa folosesc children prop pt ca aici vad ca nu am neaparat o structura fixa pt toate bannerele

  return (
    // o clasa conditionala ca sa stiu daca e home banner sau nu . o fac cu un props isHomeBanner.
    <div className="home-banner" style={{ backgroundImage: `url(${bgImage})` }}>
      <Header />
    </div>
  );
};

export default Banner;
