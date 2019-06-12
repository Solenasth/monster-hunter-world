import React from "react";
import { armor_icon_matrix } from "./armor_icon_matrix";
import { weapon_icon_matrix } from "./weapon_icon_matrix";

class ResultCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, type, rarity, expandDetails, category } = this.props;
    return (
      <div className="resultCard">
        <button className="resultCard__active" onClick={expandDetails}>
          {category === "weapons" ? (
            <img
              src={weapon_icon_matrix[type][rarity - 1]}
              alt="weapon icon"
              className="resultCard__active--icon"
            />
          ) : (
            <img
              src={armor_icon_matrix[type][rarity - 1]}
              alt="armor icon"
              className="resultCard__active--icon"
            />
          )}
          <h2 className="resultCard__active--title">{name}</h2>
        </button>
      </div>
    );
  }
}

export default ResultCard;
