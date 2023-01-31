import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import CountUp from "react-countup";
import { BsFlagFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { useRef } from "react";
import { useCountUp } from 'react-countup';


function InfoCard() {
  const [counterOn, setCounterOn] = useState(false);
  const content = useRef(null);

  const onscroll = () => {
    const winScroll = document.documentElement.scrollTop;
    console.log(winScroll)

    if (winScroll > 2200) {
      start();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);


  }, []);

  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1250,
    duration: 2,
  });

  console.log(countUpRef)
  return (
    <>
      <div ref={content} class="row d-flex justify-content-between">
        <div class="col-md-4 col-sm-6">
          <div class="counter">
            <div class="counter-icon" style={{ paddingTop: "18%" }}>
              <BsFlagFill style={{ width: "20%", height: "20%" }} />
            </div>
            <div
              class="counter-content d-flex flex-column justify-content-center"
              style={{ backgroundColor: "#13184F", height: "12rem" }}
            >
              <span class="counter-value">
                <CountUp start={2000} end={2017} delay={0.5} duration={0.75} />
              </span>
              <h3>Founded In</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="counter red">
            <div class="counter-icon" style={{ paddingTop: "18%" }}>
              <BsFillEmojiSmileFill style={{ width: "20%", height: "20%" }} />
            </div>
            <div
              class="counter-content d-flex flex-column justify-content-center"
              style={{ height: "12rem" }}
            >
              <span style={{ color: "white !important" }} class="counter-value">
                {" "}
                <p ref={countUpRef}></p>

              </span>
              <h3>Smiles Delivered</h3>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="counter">
            <div class="counter-icon" style={{ paddingTop: "18%" }}>
              <RiBuildingLine style={{ width: "20%", height: "20%" }} />
            </div>
            <div
              class="counter-content d-flex flex-column justify-content-center"
              style={{ height: "12rem" }}
            >
              <span class="counter-value">
                6    {" "} Lakhs+ sqft
              </span>
              <h3>Under Management</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
