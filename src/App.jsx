import React from "react";
import { render } from "react-dom";
import Weapon from "./Weapon.jsx";
//import { Router, Link } from "@reach/router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state
    };
  }
  render() {
    return <Weapon />;
  }
}

render(<App />, document.getElementById("root"));
