import React from "react";
// import web from "../src/images/main1.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center">
                  <h1>
                    <strong>
                      Grow your Business with <br />
                      <strong className="brand-name">TechZen Nepal</strong>
                    </strong>
                  </h1>
                  <h2 className="my-3">{props.name}</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit}>
                      <button className="btn btn-info">{props.btname}</button>
                    </NavLink>
                  </div>
                </div>

                <div className="collg-lg-6 order-1 order-lg-2 header-image-img">
                  <img
                    src={props.imgsrc}
                    className="image-fluid animated"
                    alt="homeas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
