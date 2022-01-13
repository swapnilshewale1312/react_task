import React from "react";
import MenuIconSection from "./MenuIconSection";
// IMPORT COMPONANTS
import PriceSection from "./PriceSection";
import IconSection from "./IconSection";
import QuantitySecItem from "./QuantitySecItem";
import MarketValueSection from "./MarketValueSection";
import UnRealizePlComponant from "./UnRealizePlComponant";
import Button from "../Controls/Button";

import card_logo from "../../assets/images/card-logo.jpg";
//IMPORT EQUATIONS
// import { getInvestedAmt,getUnrealizedPL ,getReturns} from "../../equetions";
const Card = (props) => {
  // let investedAmt = getInvestedAmt(props.item.avgCost,props.item.quantity);
  // let unrealizedPL = getUnrealizedPL(props.item.avgCost,props.item.quantity,props.item.price);
  // let returns_val = getReturns(props.item.avgCost,props.item.quantity,props.item.price)
  return (
    <div className="cardBx">
      <div className="d-md-flex cstWidth align-items-center justify-content-between">
        <MenuIconSection />
        <PriceSection scrip={props.item.scrip} price={props.item.price} />
        <IconSection src={card_logo} alt="icon" />

        <div className="col-md">
          <div className="qutyBx">
            <div className="qutList">
              <ul className="list-unstyled mb-0">
                <QuantitySecItem
                  lebel="Quantity"
                  amount={props.item.quantity}
                  iconClass="fa fa-window-maximize"
                />
                <QuantitySecItem
                  lebel="Avg. Cost"
                  amount={props.item.avgCost}
                  iconClass="fa fa-at"
                />
                <QuantitySecItem
                  lebel="Invested Amount"
                  amount={`$ ${props.item.investedAmount}`}
                  iconClass="fa fa-credit-card"
                />
              </ul>
            </div>
          </div>
        </div>

        <MarketValueSection
          marketValue={"$9542.56"}
          portfolioValue={`${props.item.portfolioValue}%`}
          progress={`${props.item.portfolioValue}%`}
        />

        <UnRealizePlComponant
          unrealizedPL={`${props.item.unrealizedPL}`}
          return_val={`${props.item.return_val}`}
        />

        <div className="col-md">
          <div className="btnWrap">
            <ul className="list-unstyled mb-0">
              <li className="list-block-item">
                <Button
                  label="Buy"
                  className="btn_sec"
                  onClick={() => {
                    // alert("buy")
                  }}
                />
              </li>
              <li className="list-block-item">
                <Button
                  label="Sell"
                  className="btn_sec"
                  onClick={() => {
                    // alert("Sell")
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
