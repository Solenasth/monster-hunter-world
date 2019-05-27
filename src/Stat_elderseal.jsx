import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_elderseal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var elderseal = attributes.elderseal ? attributes.elderseal : null;
    }

    return (
      <div>
        {elderseal ? (
          <div className="stats__elderseal">
            <h4 className="stats__elderseal--tag">
              <img
                src={common_icons.ui.elderseal}
                alt="elderseal value"
                className="stats__elderseal--icon"
              />
              Elderseal
            </h4>
            <p className="stats__elderseal--values">{elderseal}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_elderseal;
