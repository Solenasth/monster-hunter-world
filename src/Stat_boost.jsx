import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_boost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var boostType = attributes.boostType ? attributes.boostType : null;
    }

    return (
      <div>
        {boostType ? (
          <div className="stats__boostType">
            <h4 className="stats__boostType--tag">
              <img
                src={common_icons.ui.boost}
                alt="boost type icon"
                className="stats__boostType--icon"
              />
              Boost
            </h4>
            <p className="stats__boostType--values">{boostType}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_boost;
