import React from "react";
import web from "../src/images/main222.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import {NavLink} from 'react-router-dom';
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="About Us"
        imgsrc={web}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
