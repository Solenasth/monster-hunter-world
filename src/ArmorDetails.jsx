import React from "react";
import EquipmentStats from "./EquipmentStats.jsx";
import SlotsBar from "./SlotsBar.jsx";
import Equipment_title from "./Equipment_title.jsx";
import Media from "./Media.jsx";

class ArmorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { armor } = this.props;
    return (
      <div className="equipmentDetails">
        <Equipment_title
          name={armor.name}
          type={armor.type}
          rarity={armor.rarity}
        />
        <div className="equipmentDetails__body">
          <Media images={armor.assets} />
          <div className="equipmentDetails__body__data">
            <div className="equipmentDetails__body__data__details">
              <EquipmentStats
                defense={armor.defense}
                resistances={armor.resistances}
                attributes={this.attributes}
              />
              {armor.slots[0] ? (
                <SlotsBar decorationSlots={armor.slots} />
              ) : (
                <SlotsBar decorationSlots="none" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArmorDetails;
