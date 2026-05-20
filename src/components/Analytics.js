import React from "react";

import { useNavigate } from "react-router-dom";

function Analytics(){

  const navigate = useNavigate();

  return(

    <div className="analytics-page">

      <h1>
        📊 Electricity Analytics
      </h1>

      <p>
        Monthly Usage & Appliance Analysis
      </p>

      {/* PIE CHARTS & BAR CHARTS */}

      <button
        className="main-btn"

        onClick={()=>
          navigate("/")
        }
      >
        Back To Home
      </button>

    </div>
  );
}

export default Analytics;