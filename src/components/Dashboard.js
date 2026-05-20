import React from "react";

import { useNavigate } from "react-router-dom";

function Dashboard(){

  const navigate = useNavigate();

  return(

    <div className="dashboard-page">

      <h1>
        Smart Electricity Dashboard
      </h1>

      <p>
        Your electricity tracking system.
      </p>

      {/* PASTE YOUR OLD TABLE + CHART CODE HERE */}

      <button
        className="main-btn"

        onClick={()=>
          navigate("/analytics")
        }
      >
        View Analytics
      </button>

    </div>
  );
}

export default Dashboard;