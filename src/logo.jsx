import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

function Logo() {

  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >

      <ElectricBoltIcon
        style={{
          fontSize: "50px",
          color: "#00e5ff",
        }}
      />

      <h1
        style={{
          color: "white",
          fontSize: "32px",
        }}
      >
        Smart Electricity Tracker
      </h1>

    </div>
  );
}

export default Logo;