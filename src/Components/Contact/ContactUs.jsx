import React from "react";
import "../../Assets/Contact/ContactUs.css";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Wearehere from "./Wearehere";
import Community from "../HomePage/Community";
import HomeFest from "../Common/HomeFest";
function ContactUs() {
  return (
    <>
      {/* <TopNav/> */}
      <Wearehere />
      <HomeFest />
      <Community />
      <GetInTouch />
    </>
  );
}

export default ContactUs;
