import React from "react";
import { render } from "react-dom";
//import ArmorDetails from "./ArmorDetails.jsx";
import SearchBox from "./SearchBox.jsx";
import Results from "./Results.jsx";
import Axios from "axios";
import { Router, Link } from "@reach/router";

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

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //gets an initial entry to show
  getInitial = () => {
    Axios.get(
      this.url +
        this.state.primarySearch +
        '?q={"id":' +
        this.getRandomInt(0, 1200) +
        "}"
    ).then(details => this.setState({ details: details.data }));
  };

  getDetails = id => {
    Axios.get(
      this.url + this.state.primarySearch + '?q={"id":' + id + "}"
    ).then(details => this.setState({ details: details.data }));
  };

  handlePrimarySearchChange = event => {
    this.setState({ primarySearch: event.target.value });
  };

  render() {
    return (
      <div>
        <header className="header">
          <Link to="/" className="header__title">
            <span>MHW</span>
          </Link>
          <Link to="/search" className="header__search">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Router>
          <SearchBox
            path="/search"
            search={this.getOneLameSword}
            searchChange={this.handlePrimarySearchChange}
          />
          <Results
            path="/"
            type={this.state.primarySearch}
            results={this.state.results}
            getDetails={this.getInitial}
          />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
