import React from "react";
import EquipmentStats from "./EquipmentStats.jsx";
import SlotsBar from "./SlotsBar.jsx";
import Equipment_title from "./Equipment_title.jsx";
import Media from "./Media.jsx";

class ArmorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 68,
      name: "King Beetle Vertex",
      type: "head",
      rank: "low",
      rarity: 3,
      defense: {
        base: 22,
        max: 50,
        augmented: 74
      },
      resistances: {
        fire: -1,
        water: -1,
        ice: 0,
        thunder: 2,
        dragon: 2
      },
      attributes: {
        requiredGender: "male"
      },
      slots: [],
      skills: [
        {
          id: 210,
          level: 1,
          description: "Very slightly increases invulnerability window.",
          modifiers: {},
          skill: 68,
          skillName: "Evade Window"
        }
      ],
      armorSet: {
        id: 16,
        name: "King Beetle",
        rank: "low",
        pieces: [68, 69, 70, 71, 72],
        bonus: null
      },
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/97152146c778825566cd0001911a230fd7ccc47d.bdadd88fa6679f3d2935314598b0d7bd.png",
        imageFemale: null
      },
      crafting: {
        materials: [
          {
            quantity: 1,
            item: {
              id: 145,
              name: "Great Hornfly",
              description:
                "Discovered by Botanical Research. An insect with a giant horn, massive shell, and butterfly-like wings.",
              rarity: 4,
              carryLimit: 99,
              value: 60
            }
          },
          {
            quantity: 2,
            item: {
              id: 118,
              name: "Dragonite Ore",
              description:
                "An ore that yields metal superior to that of Machalite. Invaluable for making durable armor.",
              rarity: 4,
              carryLimit: 99,
              value: 480
            }
          },
          {
            quantity: 2,
            item: {
              id: 122,
              name: "Coral Crystal",
              description:
                "Crystal prized at the Smithy for use in high-grade abrasives. Mainly found in the Coral Highlands.",
              rarity: 4,
              carryLimit: 99,
              value: 600
            }
          },
          {
            quantity: 1,
            item: {
              id: 164,
              name: "Flame Sac",
              description:
                "A monster organ filled with flammable powder. Handle with extreme care.",
              rarity: 4,
              carryLimit: 99,
              value: 240
            }
          }
        ]
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="equipmentDetails">
        <Equipment_title
          name={this.state.name}
          type={this.state.type}
          rarity={this.state.rarity}
        />
        <div className="equipmentDetails__body">
          <Media images={this.state.assets} />
          <div className="equipmentDetails__body__data">
            <div className="equipmentDetails__body__data__details">
              <EquipmentStats
                defense={this.state.defense}
                resistances={this.state.resistances}
                attributes={this.attributes}
              />
              {this.state.slots[0] ? (
                <SlotsBar decorationSlots={this.state.slots} />
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
