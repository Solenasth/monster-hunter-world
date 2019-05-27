import React from "react";
import { common_icons } from "./ui_common_icons";

class Stat_attack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attack } = this.props;
    return (
      <div>
        {attack ? (
          <div className="stats__attack">
            <h4 className="stats__attack--tag">
              <img
                src={common_icons.ui.attack}
                alt="attack value"
                className="stats__attack--icon"
              />
              Attack
            </h4>
            <ul className="stats__attack--values">
              <li>
                <p>
                  <b>displayed : </b> {attack.display}
                </p>
              </li>
              <li>
                <p>
                  <b>raw : </b> {attack.raw}
                </p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Stat_attack;
