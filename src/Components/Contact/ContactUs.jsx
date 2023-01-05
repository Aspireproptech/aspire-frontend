import React from "react";
import "../../Assets/Contact/ContactUs.css";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import Wearehere from "./Wearehere";
import Community from "../HomePage/Community";
function ContactUs() {
  return (
    <>
      {/* <TopNav/> */}
      <Wearehere />
      <Community />
      <GetInTouch />
    </>
  );
}

export default ContactUs;
