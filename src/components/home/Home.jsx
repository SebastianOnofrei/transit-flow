import React from "react";
import Header from "../common/header/Header";
import Banner from "../common/banner/Banner";
import homeBannerImage from "../../assets/home-banner.png";
const Home = () => {
  return (
    <div>
      <Banner bgImage={homeBannerImage} isHomeBanner={true} />
    </div>
  );
};

export default Home;
