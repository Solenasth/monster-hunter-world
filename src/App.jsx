import React from "react";
import { render } from "react-dom";
//import ArmorDetails from "./ArmorDetails.jsx";
import SearchBox from "./SearchBox.jsx";
import Results from "./Results.jsx";
import Axios from "axios";

//import { Router, Link } from "@reach/router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { primarySearch: "weapons" };
  }
  url = "https://mhw-db.com/";

  getOneLameSword = () => {
    Axios.get(this.url + this.state.primarySearch + '?q={"id":260}').then(
      results => this.setState({ results: results.data })
    );
  };

  handlePrimarySearchChange = event => {
    this.setState({ primarySearch: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchBox
          search={this.getOneLameSword}
          searchChange={this.handlePrimarySearchChange}
        />
        <Results type={this.state.primarySearch} results={this.state.results} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
