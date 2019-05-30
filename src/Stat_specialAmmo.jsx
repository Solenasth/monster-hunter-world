import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_specialAmmo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes, type } = this.props;

    var noAvailableData =
      attributes && !attributes.specialAmmo && type.includes("bowgun");
    if (attributes) {
      var specialAmmo = attributes.specialAmmo ? attributes.specialAmmo : null;
    }
    return (
      <div>
        {noAvailableData ? (
          <div className="stats__specialAmmo">
            <h4 className="stats__specialAmmo--tag">
              <img
                src={common_icons.ui.specialAmmo}
                alt="shelling type icon"
                className="stats__specialAmmo--icon"
              />
              Special
            </h4>
            <p className="stats__specialAmmo--values">
              {type.includes("light")
                ? "WyvernBlast"
                : "WyvernHeart / WyverSnipe"}
            </p>
          </div>
        ) : specialAmmo ? (
          <div className="stats__specialAmmo">
            <h4 className="stats__specialAmmo--tag">
              <img
                src={common_icons.ui.specialAmmo}
                alt="shelling type icon"
                className="stats__specialAmmo--icon"
              />
              Special
            </h4>
            <p className="stats__specialAmmo--values">{specialAmmo}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_specialAmmo;
