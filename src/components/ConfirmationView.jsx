import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConfirmationView = () => {
  return (
    <div style={{ marginTop: "100px", textAlign: "center" }}>
      <h2>Salary increase:</h2>
      <h1>$50,000 -> $63,000</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/reviewMenu">
          <Button>Review Again</Button>
        </Link>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/done">
          <Button variant="success">Accept</Button>
        </Link>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/done">
          <Button variant="danger">Decline</Button>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/done">
          <Button variant="outline-success">
            Schedule Meeting with Manager to Discuss
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationView;
