import React from "react";
import { armor_icon_matrix } from "./armor_icon_matrix";
import { weapon_icon_matrix } from "./weapon_icon_matrix";

class Equipment_title extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, icon, type, rarity, attack } = this.props;
    if (attack && !icon) {
      var iconlessWeapon = true;
    } else {
      iconlessWeapon = false;
    }

    return iconlessWeapon ? (
      <div className="equipmentDetails__title">
        <img
          src={weapon_icon_matrix[type][rarity - 1]}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
        <h1>{name}</h1>
        <img
          src={weapon_icon_matrix[type][rarity - 1]}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
      </div>
    ) : icon ? (
      <div className="equipmentDetails__title">
        <img
          src={icon}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
        <h1>{name}</h1>
        <img
          src={icon}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
      </div>
    ) : (
      <div className="equipmentDetails__title">
        <img
          src={armor_icon_matrix[type][rarity - 1]}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
        <h1>{name}</h1>
        <img
          src={armor_icon_matrix[type][rarity - 1]}
          alt="weapon icon"
          className="equipmentDetails__title__icon"
        />
      </div>
    );
  }
}

export default Equipment_title;
