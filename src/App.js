import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Congratulations from "./components/Congratulations";
import ReviewMarketAndFirmValue from "./components/ReviewMarketAndFirmValue";
import MarketValueView from "./components/MarketValueView";
import FirmValueView from "./components/FirmValueView";
import ConfirmationView from "./components/ConfirmationView";
import Done from "./components/Done";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Congratulations} />
          <Route path="/reviewMenu/" component={ReviewMarketAndFirmValue} />
          <Route path="/reviewMarketValue/" component={MarketValueView} />
          <Route path="/reviewFirmValue/" component={FirmValueView} />
          <Route path="/confirmationView/" component={ConfirmationView} />
          <Route path="/done/" component={Done} />
        </div>
      </Router>
    );
  }
}

export default App;
