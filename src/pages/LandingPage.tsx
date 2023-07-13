import React from "react";
import Navbar from "../component/LandingPage/Navbar";
import HeroSection from "../component/LandingPage/HeroSection";
import Services from "../component/LandingPage/Services";
import HowWeWork from "../component/LandingPage/HowWeWork";
import Bubble1 from "../component/LandingPage/Bubble1";
import Bubble2 from "../component/LandingPage/Bubble2";
import Bubble3 from "../component/LandingPage/Bubble3";
import Footer from "../component/LandingPage/Footer";

type LandingPageProps = {};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="absolute top-[14rem] left-[10rem]">
          <Bubble1 />
        </div>
        <div className="absolute top-[20rem] right-[30rem]">
          <Bubble2 />
        </div>
        <div className="absolute top-[40rem] left-[10rem]">
          <Bubble3 />
        </div>
        <Services />
        <HowWeWork />
      </div>
      <div className="relative">
        <div className="absolute bottom-[14rem] left-[10rem]">
          <Bubble3 />
        </div>
        <div className="absolute bottom-[20rem] right-[30rem]">
          <Bubble2 />
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
