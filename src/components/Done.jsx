import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Done = () => {
  return (
    <div style={{ marginTop: "170px", textAlign: "center" }}>
      <h3>
        Thanks for your Review! Your manager will be in touch with you shortly!
      </h3>
      <Link to="/reviewMenu">
        <Button style={{ marginTop: "20px" }}>Review Again</Button>
      </Link>
    </div>
  );
};

export default Done;
