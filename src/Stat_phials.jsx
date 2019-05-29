import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_phials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributes } = this.props;
    if (attributes && attributes.phialType) {
      var phialType = attributes.phialType ? attributes.phialType : null;
      if (phialType.includes(" ") && !phialType.includes("power")) {
        var simplePhial = false;
      } else {
        simplePhial = true;
      }
    }

    return (
      <div>
        {phialType ? (
          <div className="stats__phialType">
            <h4 className="stats__phialType--tag">
              <img
                src={common_icons.ui.weapon_phial}
                alt="weapon phial icon"
                className="stats__phialType--icon"
              />
              Phial
            </h4>
            {simplePhial ? (
              <p className="stats__phialType--values">{phialType}</p>
            ) : (
              <p className="stats__phialType--values">
                <img
                  src={common_icons["elements"][phialType.split(" ")[0]]}
                  alt={phialType.split(" ")[0]}
                  className="stats__phialType--element-icon"
                />
                {phialType}
              </p>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_phials;
