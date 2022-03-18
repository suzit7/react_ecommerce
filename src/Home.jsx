import React from "react";
import web from "../src/images/main1.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import {NavLink} from 'react-router-dom';
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="We provide the best Gaming products."
        imgsrc={web}
        visit="/products"
        btname="Discover Products"
      />
      <br />
    </>
  );
};

export default Home;
