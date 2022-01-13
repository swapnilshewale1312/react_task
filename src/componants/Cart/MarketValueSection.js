import React from "react";
import ProgressBar from "../Controls/ProgressBar";
const MaretValueSection = (props) => {
  return (
    <div className="col-md">
      <div className="market_value_sec">
        <div className="marketValue_sec">
          <span className="mrktV">Market Value </span> {props.marketValue}
        </div>
        <div className="mrkVlaue">
          <span className="mrktV"> % of portfolio value </span>{" "}
          <strong>{props.portfolioValue}</strong>
        </div>
        <div className="mrkProgress">
          <div className="progress">
            <ProgressBar className="progress-bar" progress={props.progress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaretValueSection;
