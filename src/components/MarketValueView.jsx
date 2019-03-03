import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ideotwo from "../IDEO2.png";
import ideothree from "../IDEO3.png";
import ideofour from "../IDEO4.png";

const MarketValueView = () => {
  const [view, setView] = useState("design");
  return (
    <div style={{ marginTop: "50px" }}>
      <div class="ButtonArea" style={{ width: "100%" }}>
        <div
          style={{
            width: "55%",
            display: "inline-block",
            textAlign: "center",
            padding: "20px",
            backgroundColor: view === "design" ? "#77dd77" : "white",
            cursor: "pointer"
          }}
          onClick={() => {
            setView("design");
          }}
        >
          <h3>Design</h3>
        </div>
        <div
          style={{
            width: "20%",
            display: "inline-block",
            textAlign: "center",
            padding: "20px",
            backgroundColor: view === "code" ? "#77dd77" : "white",
            cursor: "pointer"
          }}
          onClick={() => {
            setView("code");
          }}
        >
          <h3>Code</h3>
        </div>

        <div
          style={{
            width: "25%",
            display: "inline-block",
            textAlign: "center",
            padding: "20px",
            backgroundColor: view === "management" ? "#77dd77" : "white",
            cursor: "pointer"
          }}
          onClick={() => {
            setView("management");
          }}
        >
          <h3>Management</h3>
        </div>
      </div>
      <div
        className="imageSpace"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        {view === "design" && (
          <div>
            <img
              src={ideotwo}
              style={{ marginTop: "-10px", marginLeft: "40px", width: "700px" }}
            />
          </div>
        )}
        {view === "code" && (
          <div>
            <img
              src={ideothree}
              style={{ marginTop: "-10px", width: "700px", marginLeft: "40px" }}
            />
          </div>
        )}
        {view === "management" && (
          <div>
            <img
              src={ideofour}
              style={{ marginTop: "-10px", width: "700px", marginLeft: "40px" }}
            />
          </div>
        )}
        <div style={{ marginTop: "-10px", marginBottom: "10px" }}>
          <Link to="/reviewMenu">
            <Button>Back to Review Screen</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketValueView;
