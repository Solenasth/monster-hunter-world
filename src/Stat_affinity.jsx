import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_affinity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { attributes, attack } = this.props;
    if (attributes) {
      var affinity = attributes.affinity ? attributes.affinity : null;
    }

    return (
      <div>
        {attack ? (
          affinity ? (
            <div className="stats__affinity">
              <h4 className="stats__affinity--tag">
                <img
                  src={common_icons.ui.affinity}
                  alt="attack value"
                  className="stats__affinity--icon"
                />
                Affinity
              </h4>
              <p className="stats__affinity--values">{affinity} %</p>
            </div>
          ) : (
            <div className="stats__affinity">
              <h4 className="stats__affinity--tag">
                <img
                  src={common_icons.ui.affinity}
                  alt="attack value"
                  className="stats__affinity--icon"
                />
                Affinity
              </h4>
              <p className="stats__affinity--values"> 0 %</p>
            </div>
          )
        ) : null}
      </div>
    );
  }
}

export default Stat_affinity;
