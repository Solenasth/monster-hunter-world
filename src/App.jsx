import React from "react";
import { render } from "react-dom";
import WeaponDetails from "./WeaponDetails.jsx";
import ArmorDetails from "./ArmorDetails.jsx";
//import { Router, Link } from "@reach/router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state
    };
  }
  render() {
    return (
      <div>
        <WeaponDetails />
        <ArmorDetails />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
