import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_shellingType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes) {
      var shellingType = attributes.shellingType
        ? attributes.shellingType
        : null;
    }
    return (
      <div>
        {shellingType ? (
          <div className="stats__shellingType">
            <h4 className="stats__shellingType--tag">
              <img
                src={common_icons.ui.shellingType}
                alt="shelling type icon"
                className="stats__shellingType--icon"
              />
              Shelling Type
            </h4>
            <p className="stats__shellingType--values">{shellingType}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_shellingType;
