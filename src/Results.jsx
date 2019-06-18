import React from "react";
import ResultCard from "./ResultCard.jsx";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResults(results, type, handleCardClick) {
    if (results && Array.isArray(results)) {
      return results.map(weapon => (
        <ResultCard
          params={weapon}
          key={weapon.id}
          expandDetails={handleCardClick}
          category={type}
        />
      ));
    } else {
      return <h1>Search for something to start!</h1>;
    }
  }

  render() {
    const { type, results, handleCardClick } = this.props;
    return (
      <div className="results">
        {this.handleResults(results, type, handleCardClick)}
      </div>
    );
  }
}

export default Results;
