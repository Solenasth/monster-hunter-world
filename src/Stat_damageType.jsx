import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_damageType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var damageType = attributes.damageType ? attributes.damageType : null;
    }
    return (
      <div>
        {damageType ? (
          <div className="stats__damageType">
            <h4 className="stats__damageType--tag">
              <img
                src={common_icons.ui.damage_type}
                alt="Damage Type"
                className="stats__damageType--icon"
              />
              Damage type
            </h4>
            <p className="stats__damageType--values">{damageType}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_damageType;
