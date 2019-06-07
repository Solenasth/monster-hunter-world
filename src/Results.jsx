import React from "react";
import WeaponDetails from "./WeaponDetails.jsx";
import ArmorDetails from "./ArmorDetails.jsx";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResults(results, type) {
    var somethingToDisplay = results && Array.isArray(results);
    if (somethingToDisplay) {
      switch (type) {
        case "weapons": {
          return <WeaponDetails weapon={results[0]} key={results[0].id} />;
        }
        case "armor":
          return results.map(armor => {
            <ArmorDetails armor={armor} key={armor.id} />;
          });
        default:
          return <h1>nothing to display 1</h1>;
      }
    } else {
      return <h1>nothing to display 2</h1>;
    }
  }

  render() {
    const { type, results } = this.props;
    return <div>{this.handleResults(results, type)}</div>;
  }
}

export default Results;
