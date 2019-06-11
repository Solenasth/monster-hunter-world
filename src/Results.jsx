import React from "react";
import WeaponDetails from "./WeaponDetails.jsx";
import ArmorDetails from "./ArmorDetails.jsx";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDetails(1);
  }

  handleResults(results, type) {
    if (results && Array.isArray(results)) {
      switch (type) {
        case "weapons": {
          return results.map(weapon => (
            <WeaponDetails weapon={weapon} key={weapon.id} />
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
      return this.props.details ? (
        <WeaponDetails weapon={this.state.details[0]} />
      ) : (
        <h1>loading</h1>
      );
    }
  }

  render() {
    const { type, results, getDetails } = this.props;
    return <div>{this.handleResults(results, type)}</div>;
  }
}

export default Results;
