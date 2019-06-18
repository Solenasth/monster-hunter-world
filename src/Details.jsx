import React from "react";
import ArmorDetails from "./ArmorDetails.jsx";
import WeaponDetails from "./WeaponDetails.jsx";

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  handleResults(details, type, initial) {
    if (details && type) {
      switch (type) {
        case "weapons":
          return <WeaponDetails weapon={details} />;
        case "armor":
          return <ArmorDetails armor={details} />;
        default:
          return <h1>Oh no, the api returned something i cant handle yet</h1>;
      }
    } else {
      return initial ? <WeaponDetails weapon={initial} /> : <h1>loading</h1>;
    }
  }

  render() {
    const { type, details, initial } = this.props;
    return (
      <div className="details">
        {this.handleResults(details, type, initial)}
      </div>
    );
  }
}

export default Details;
