import React from "react";
import Cards from "./Cards";
import ChangeGame from "./ChangeGame";
import Help from "./Help";
import HomeBuying from "./HomeBuying";
import HomeChoice from "./HomeChoice";
import Perfect from "./Perfect";
import Portfolio from "./Portfolio";
import "../../Assets/HomePage/Home.css";
import TopNav from "../Common/TopNav";
import Promise from "./Promise";
import BlueFooter from "../Common/BlueFooter";
import Community from "./Community";
import BottomFoot from "../Common/BottomFoot";
import NewNav from "../Common/NewNav";
import "../../Assets/HomePage/Help.css";
import "../../Assets/HomePage/portfolio.css";
import HomeFest from "../Common/HomeFest";

function Home() {
  return (
    <>
      <div className=""></div>
      <HomeBuying />
      {/* <HomeFest /> */}
      {/* <Help/> */}
      <div className="horrizontal"></div>
      <HomeChoice />
      {/* <div className="helpSection">
        <div className="separatorDiv"></div>
        <h4>Project Portfolio</h4>
        <div className="helpPara">
          <p>
            Our projects are located in prime locations throughout the city.
            They offer the choicest of features that your whole family will
            love. You'll like our projects so much, that you will find it
            difficult to say ‘no’.
          </p>
        </div>
        <Portfolio />
      </div> */}
      <Perfect />
      <Community />
      <Promise />
      <Cards />
      <ChangeGame />
    </>
  );
}

export default Home;
