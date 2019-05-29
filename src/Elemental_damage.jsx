import React from "react";

import { common_icons } from "./ui_common_icons";

class Elemental_damage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { element } = this.props;
    return (
      <div>
        {element.hidden ? (
          <p className="stats__element--values-hidden">
            <img
              src={common_icons["elements"][element.type]}
              alt={element.type}
              className="stats__element--element-icon"
            />
            {"(" + element.damage + ")"}
          </p>
        ) : (
          <p className="stats__element--values">
            <img
              src={common_icons["elements"][element.type]}
              alt={element.type}
              className="stats__element--element-icon"
            />
            {element.damage}
          </p>
        )}
      </div>
    );
  }
}

export default Elemental_damage;
