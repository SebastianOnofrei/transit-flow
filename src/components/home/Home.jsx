import React from "react";
import Banner from "../common/banner/Banner";
import homeBannerImage from "../../assets/home-banner.png";
import Services from "./services/Services.jsx";
import About from "./about/About.jsx";
import Project from "./project/Project.jsx";
import Testimonial from "./testimonial/Testimonial.jsx";
import WhyUs from "./why-choose-us/WhyUs.jsx";
import Team from "./team/Team.jsx";
// posibil contact sa fie o componenta comuna but who knows
import Contact from "./contact/Contact.jsx";
import Blog from "./blog/Blog.jsx";
import Footer from "../common/footer/Footer.jsx";

const Home = () => {
  let text = `Discover boundless exploration opportunities connecting you to destinations worldwide. Open doors to new experiences today!`;
  let title = `Your Gateway 
  to any Destination in the World`;
  let subtitle = "Logistics & Supply Chain Solutions";

  return (
    <div>
      <Banner
        bgImage={homeBannerImage}
        isHomeBanner={true}
        subtitle={subtitle}
        title={title}
        text={text}
      />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <WhyUs />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
