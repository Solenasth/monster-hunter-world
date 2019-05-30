import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_deviation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var deviation = attributes.deviation ? attributes.deviation : null;
    }
    return (
      <div>
        {deviation ? (
          <div className="stats__deviation">
            <h4 className="stats__deviation--tag">
              <img
                src={common_icons.ui.deviation}
                alt="shelling type icon"
                className="stats__deviation--icon"
              />
              Deviation
            </h4>
            <p className="stats__deviation--values">{deviation}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_deviation;
