import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Congratulations = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "stretch"
      }}
    >
      <h2 style={{ paddingTop: "200px" }}>Your salary increase:</h2>
      <h1>
        $50,000 -> <span>$63,000</span>
      </h1>
      <div>
        <Link to="/reviewMenu">
          <Button variant="primary" size="lg">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Congratulations;
