import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_defense extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { defense } = this.props;
    return (
      <div>
        {defense ? (
          <div className="stats__defense">
            <h4 className="stats__defense--tag">
              <img
                src={common_icons.ui.defense}
                alt="defense value"
                className="stats__defense--icon"
              />
              Defense
            </h4>
            <ul className="stats__defense--values">
              <li>
                <p>
                  {" "}
                  <b> Base : </b> {defense.base}
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <b> Max : </b> {defense.max}
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <b> Augmented : </b> {defense.augmented}
                </p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_defense;
