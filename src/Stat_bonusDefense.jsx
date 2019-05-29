import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_bonusDefense extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var bonusDefense = attributes.defense
        ? attributes.defense > 0
          ? attributes.defense
          : null
        : null;
    }

    return (
      <div>
        {bonusDefense ? (
          <div className="stats__bonusDefense">
            <h4 className="stats__bonusDefense--tag">
              <img
                src={common_icons.ui.bonus_defense}
                alt="bonus defense icon"
                className="stats__bonusDefense--icon"
              />
              Bonus defense
            </h4>
            <p className="stats__bonusDefense--values">{bonusDefense}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_bonusDefense;
