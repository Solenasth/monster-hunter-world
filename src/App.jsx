import React from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //state
    };
  }
  render() {
    return <h1>REACT IS LIVE</h1>;
  }
}

render(<App />, document.getElementById("root"));
