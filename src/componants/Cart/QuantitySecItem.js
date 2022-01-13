import React from "react";
import MenuIcon from "../Controls/MenuIcon";
const QuantitySecItem = (props) => {
  return (
    <li>
      <div className="d-flex">
        <div className="qtyLbl">
          <div className="qtyLbl_inner">
            <div className="d-flex">
              <div className="qtyIcon">
                {" "}
                <MenuIcon className={props.iconClass} areaHidden="true" />{" "}
              </div>
              <div className="qtyTxt_sec"> {props.lebel} </div>
            </div>
          </div>
        </div>
        <div className="qtyTxt">{props.amount}</div>
      </div>
    </li>
  );
};

export default QuantitySecItem;
