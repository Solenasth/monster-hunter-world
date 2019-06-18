import React from "react";
import { render } from "react-dom";
//import ArmorDetails from "./ArmorDetails.jsx";
import SearchBox from "./SearchBox.jsx";
import Results from "./Results.jsx";
import Axios from "axios";
import { Router, Link } from "@reach/router";
import { navigate } from "@reach/router";
import Details from "./Details.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { primarySearch: "weapons" };
    this.getInitial();
  }
  url = "https://mhw-db.com/";
  cardQuery = '&p={"id":true, "name":true, "type":true, "rarity":true}';

  search = () => {
    Axios.get(
      this.url +
        this.state.primarySearch +
        '?q={"type":"great-sword"}' +
        this.cardQuery
    ).then(results => {
      this.setState({ results: results.data });
      navigate(`/search/${this.state.primarySearch}/results`);
    });
  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  //handles the click on a result card
  handleCardClick = id => {
    Axios.get(
      this.url + this.state.primarySearch + '?q={"id":' + id + "}"
    ).then(details => {
      this.setState({ details: details.data[0], id: details.data[0].id });
      navigate(`/${this.state.primarySearch}/details/${this.state.details.id}`);
    });
  };

  //gets an initial entry to show
  getInitial = () => {
    Axios.get(
      this.url +
        this.state.primarySearch +
        '?q={"id":' +
        this.getRandomInt(0, 1200) +
        "}"
    ).then(details => {
      this.setState({
        initial: details.data[0],
        id: details.data[0].id,
        details: undefined
      });
      navigate(`/${this.state.primarySearch}/details/${this.state.initial.id}`);
    });
  };

  getDetails = id => {
    Axios.get(
      this.url + this.state.primarySearch + '?q={"id":' + id + "}"
    ).then(details =>
      this.setState({ details: details.data[0], id: details.data[0].id })
    );
  };

  handlePrimarySearchChange = event => {
    this.setState({ primarySearch: event.target.value });
  };

  render() {
    return (
      <div>
        <header className="header">
          <button onClick={this.getInitial} className="header__title">
            MHW
          </button>
          <Link to="/search" className="header__search">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Router>
          <SearchBox
            path="/search"
            search={this.search}
            searchChange={this.handlePrimarySearchChange}
          />
          <Results
            path={"/search/:primarySearch/results"}
            type={this.state.primarySearch}
            results={this.state.results}
            handleCardClick={this.handleCardClick}
          />
          <Details
            path={"/:primarySearch/details/:id"}
            type={this.state.primarySearch}
            details={this.state.details}
            initial={this.state.initial}
          />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
