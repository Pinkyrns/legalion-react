import React from "react";
import { useLocation } from "react-router-dom";

function Excelence() {
  const location = useLocation();
  const isTeamPage = location.pathname === "/excelence";
  return (
    <div >
      <div style={{ marginTop: isTeamPage ? "100px" : "0px" }}>

      </div>
    </div>
  );
}

export default Excelence;
