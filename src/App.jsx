import React from "react";
import { render } from "react-dom";
//import ArmorDetails from "./ArmorDetails.jsx";
import Results from "./Results.jsx";

//import { Router, Link } from "@reach/router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
