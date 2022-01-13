import React from "react";

const PriceSection = (props) => {
  return (
    <div className="col-md">
      <div className="cardTitle_bx text-md-center">
        <div className="cardTitle">{props.scrip}</div>
        <div className="cardPrice">
          <span className="dlrIcon">
            <i className="fa fa-usd" aria-hidden="true" />
          </span>{" "}
           {props.price}
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
