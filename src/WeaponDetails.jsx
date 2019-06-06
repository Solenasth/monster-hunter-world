import React from "react";
import SharpnessBars from "./SharpnessBars.jsx";
import SlotsBar from "./SlotsBar.jsx";
import Equipment_title from "./Equipment_title.jsx";
import Media from "./Media.jsx";
import EquipmentStats from "./EquipmentStats.jsx";

class WeaponDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { weapon } = this.props;
    return weapon ? (
      <div className="equipmentDetails">
        <Equipment_title
          name={weapon.name}
          icon={weapon.assets.icon}
          attack={weapon.attack}
          type={weapon.type}
          rarity={weapon.rarity}
        />
        <div className="equipmentDetails__body">
          <Media images={weapon.assets} />
          <div className="equipmentDetails__body__data">
            <div className="equipmentDetails__body__data__details">
              <EquipmentStats
                attack={weapon.attack}
                attributes={weapon.attributes}
                elements={weapon.elements}
                type={weapon.type}
              />
              <SharpnessBars
                durability={weapon.durability}
                tags={[
                  "Base: ",
                  "Level 1: ",
                  "Level 2: ",
                  "Level 3: ",
                  "Level 4: ",
                  "Level 5: "
                ]}
                icon="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/handicraft-skill-mhw.png"
              />
              {weapon.slots[0] ? (
                <SlotsBar decorationSlots={weapon.slots} />
              ) : (
                <SlotsBar decorationSlots="none" />
              )}
            </div>
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default WeaponDetails;
