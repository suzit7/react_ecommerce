import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Array from "./Array";

const Products = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Products</h1>
      </div>
      <div className="container-fluid  mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Array.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
