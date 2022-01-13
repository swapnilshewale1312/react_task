import React from "react";

const PageLayout = (props) => {
  return (
    <div className="cardWrap_sec">
      <div className="lg-container">
        <div className="row">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
