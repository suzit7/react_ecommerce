import React from "react";
import { NavLink } from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card text-center">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">FANTECH</p>
            <NavLink to="#" className="btn btn-primary">
              Add To Cart
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
