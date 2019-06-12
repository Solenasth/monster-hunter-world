import React from "react";
import WeaponDetails from "./WeaponDetails.jsx";
import ArmorDetails from "./ArmorDetails.jsx";
import ResultCard from "./ResultCard.jsx";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResults(results, type, initial) {
    if (results && Array.isArray(results)) {
      switch (type) {
        case "weapons": {
          return results.map(weapon => (
            <ResultCard params={weapon} key={weapon.id} expandDetails={()=>console.log("hello")} category={type}/>
          ));
        }
        case "armor":
          return results.map(armor => {
            return <ArmorDetails armor={armor} key={armor.id} />;
          });
        default:
          return <h1>Oh no, the api returned something i cant handle yet</h1>;
      }
    } else {
      return initial ? (
        <WeaponDetails weapon={initial} />
      ) : (
        <h1>loading</h1>
      );
    }
  }

  render() {
    const { type, results, initial } = this.props;
    return <div>{this.handleResults(results, type,initial)}</div>;
  }
}

export default Results;
