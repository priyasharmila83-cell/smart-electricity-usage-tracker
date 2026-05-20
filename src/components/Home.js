import React from "react";

import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate();

  return(

    <div className="home-page">

      <div className="glass-box">

        <h1 className="main-title">
          ⚡ Smart Electricity Usage Tracker
        </h1>

        <p className="sub-title">

          Monitor • Analyze • Save Energy

        </p>

        <button
          className="main-btn"

          onClick={()=>
            navigate("/dashboard")
          }
        >
          Open Dashboard
        </button>

      </div>

    </div>
  );
}

export default Home;