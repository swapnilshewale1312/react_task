import React from "react";
const UnRealizePlComponant = (props) => {
  // blueVal
  const isRed = (return_val) =>
    return_val < 0 ? "redValue" : return_val > 0 ? "" : "blueVal";
  const arrowType = (return_val) =>
    return_val < 0 ? "downRed" : return_val > 0 ? "greenclr" : "squerBlue";

  let return_bar = 50;
  if (parseFloat(props.return_val) < 0) {
    return_bar = return_bar + parseFloat(props.return_val) / 2 + "%";
  } else if (parseFloat(props.return_val) > 0) {
    return_bar = return_bar + parseFloat(props.return_val) / 2 + "%";
  } else {
    return_bar = return_bar + "%";
  }

  return (
    <div className="col-md" style={{ width: "170px" }}>
      <div className="unrel_sec">
        <div className="marketValue_sec">
          <span className="mrktV">Unrealized P/L </span>${props.unrealizedPL}
        </div>

        <div className="msrkReturn">
          <div className="d-flex justify-content-between">
            <div className="returnTxt">% Return</div>
            <div className>
              <span
                className={`mrktV ${arrowType(parseFloat(props.return_val))}`}
              >
                <i
                  className={
                    props.return_val < 0
                      ? "fa fa-caret-down"
                      : props.return_val > 0
                      ? "fa fa-caret-up"
                      : "fas fa-square "
                  }
                  aria-hidden="true"
                />
              </span>
              <strong>{props.return_val}%</strong>
            </div>
          </div>
        </div>
        <div
          className={`unrel_processBar ${isRed(parseFloat(props.return_val))}`}
        >
          <div className="progress">
            <div className="progress-bar" style={{ width: return_bar }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnRealizePlComponant;
