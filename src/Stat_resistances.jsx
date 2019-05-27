import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_resistances extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resistances } = this.props;
    return (
      <div>
        {resistances ? (
          <div className="stats__resistances">
            <h4 className="stats__resistances--tag">
              <img
                src={common_icons.ui.resistances}
                alt="resistances values"
                className="stats__resistances--icon"
              />
              Resist.
            </h4>
            <ul className="stats__resistances--values">
              <li>
                <p className="stats__resistances--element">
                  <img
                    src={common_icons.elements.fire}
                    alt="fire resistances values"
                    className="stats__resistances--element-icon"
                  />
                  {resistances.fire}
                </p>
              </li>
              <li>
                <p className="stats__resistances--element">
                  <img
                    src={common_icons.elements.water}
                    alt="water resistances values"
                    className="stats__resistances--element-icon"
                  />
                  {resistances.water}
                </p>
              </li>
              <li>
                <p className="stats__resistances--element">
                  <img
                    src={common_icons.elements.ice}
                    alt="ice resistances values"
                    className="stats__resistances--element-icon"
                  />
                  {resistances.ice}
                </p>
              </li>
              <li>
                <p className="stats__resistances--element">
                  <img
                    src={common_icons.elements.thunder}
                    alt="thunder resistances values"
                    className="stats__resistances--element-icon"
                  />
                  {resistances.thunder}
                </p>
              </li>
              <li>
                <p className="stats__resistances--element">
                  <img
                    src={common_icons.elements.dragon}
                    alt="dragon resistances values"
                    className="stats__resistances--element-icon"
                  />
                  {resistances.dragon}
                </p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_resistances;
