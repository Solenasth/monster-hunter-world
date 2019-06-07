import React from "react";
import WeaponDetails from "./WeaponDetails.jsx";
import ArmorDetails from "./ArmorDetails.jsx";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResults(results, type) {
    
    if (results && Array.isArray(results)) {
      switch (type) {
        case "weapons": {
          return results.map(weapon => <WeaponDetails weapon={weapon} key={weapon.id}/>)
        }
        case "armor":
          return results.map(armor => {
            return <ArmorDetails armor={armor} key={armor.id} />;
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
