import React from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ideo from "../IDEO.png";

const FirmValueView = () => {
  return (
    <div style={{ marginTop: "15px", textAlign: "center", zIndex: 10 }}>
      <h1>Firm Value</h1>
      <div>
        <img src={ideo} style={{ marginTop: "-15px", width: "700px" }} />
      </div>
      <div style={{ marginTop: "-50px" }}>
        <Link to="/reviewMenu">
          <Button>Back to Review Screen</Button>
        </Link>
      </div>
    </div>
  );
};

export default FirmValueView;
