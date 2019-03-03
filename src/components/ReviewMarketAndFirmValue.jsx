import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReviewMarketAndFirmValue = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Review your Performance
      </h1>
      <div
        style={{ textAlign: "center", display: "inline-block", width: "50%" }}
      >
        <h1>Market Value</h1>
        <Link to="/reviewMarketValue">
          <Button>See More</Button>
        </Link>
      </div>
      <div
        style={{ textAlign: "center", display: "inline-block", width: "50%" }}
      >
        <h1>Firm Value</h1>
        <Link to="/reviewFirmValue">
          <Button>See More</Button>
        </Link>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Link to="/confirmationView">
          <Button variant="success">Done Review</Button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewMarketAndFirmValue;
