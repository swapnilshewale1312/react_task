import React from "react";

import Image from "../Controls/Image";
const IconSection = (props) => {
  return (
    <div className="col-md">
      <div className="cardLogo_sec">
        <Image src={props.src} className="w-100" alt = {props.alt}/>
      </div>
    </div>
  );
};

export default IconSection;
