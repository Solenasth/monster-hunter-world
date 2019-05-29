import React from "react";
import Elemental_damage from "./Elemental_damage.jsx";
import { common_icons } from "./ui_common_icons";

class Stat_elements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elements } = this.props;
    return (
      <div>
        {elements ? (
          elements.length > 0 ? (
            <div className="stats__element">
              <h4 className="stats__element--tag">
                <img
                  src={common_icons.ui.element}
                  alt="element value"
                  className="stats__element--icon"
                />
                Elements
              </h4>
              <div className="stats__element__container">
                {elements
                  ? elements.map((element, index) => (
                      <Elemental_damage key={index} element={element} />
                    ))
                  : null}
              </div>
            </div>
          ) : null
        ) : null}
      </div>
    );
  }
}

export default Stat_elements;
