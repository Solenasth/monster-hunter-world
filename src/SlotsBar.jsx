import React from "react";
import Slot from "./Slot.jsx";
import gem_level_1 from "./img/gem_level_1.png";
import gem_level_2 from "./img/gem_level_2.png";
import gem_level_3 from "./img/gem_level_3.png";

class SlotsBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { decorationSlots } = this.props;

    return (
      <div className="slotsBar">
        <h3 className="slotsBar__title">Decoration Slots</h3>
        {decorationSlots === "none" ? (
          <h3 className="slotsBar__noDecoTitle">- none -</h3>
        ) : (
          decorationSlots.map((slot, index) =>
            slot.rank === 1 ? (
              <Slot icon={gem_level_1} key={index} />
            ) : slot.rank === 2 ? (
              <Slot icon={gem_level_2} key={index} />
            ) : slot.rank === 3 ? (
              <Slot icon={gem_level_3} key={index} />
            ) : null
          )
        )}
      </div>
    );
  }
}

export default SlotsBar;
