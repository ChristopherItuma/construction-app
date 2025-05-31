import React from "react";
import { WiDayThunderstorm } from "react-icons/wi";

const Logo = ({className=""}) => {
  return (
    <div>
      <h3 className={className}>
        <WiDayThunderstorm className="text-primary" />
        GiantRoofers
      </h3>
    </div>
  );
};

export default Logo;
