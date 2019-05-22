import React from "react";

import SlotsBar from "./SlotsBar.jsx";
import Equipment_title from "./Equipment_title.jsx";
import Media from "./Media.jsx";

class ArmorDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 684,
      name: "Dante's Coat Alpha",
      type: "chest",
      rank: "high",
      rarity: 8,
      defense: {
        base: 64,
        max: 70,
        augmented: 84
      },
      resistances: {
        fire: 3,
        water: -3,
        ice: -3,
        thunder: 3,
        dragon: 3
      },
      attributes: {},
      slots: [
        {
          rank: 3
        }
      ],
      skills: [
        {
          id: 123,
          level: 1,
          description: "Affinity +3%",
          modifiers: {
            affinity: 3
          },
          skill: 39,
          skillName: "Critical Eye"
        },
        {
          id: 210,
          level: 1,
          description: "Very slightly increases invulnerability window.",
          modifiers: {},
          skill: 68,
          skillName: "Evade Window"
        }
      ],
      armorSet: null,
      assets: {
        imageMale:
          "https://assets.mhw-db.com/armor/9fc056bebc12b748301ec0664a1c760456a807bb.cbb21fd47a15b182cbf9f4783b4d2c57.png",
        imageFemale:
          "https://assets.mhw-db.com/armor/1691ea4e9df22eb78963bb36730af2e2bb9c0389.f91b754f00d010cea9ee680013bf9ab1.png"
      },
      crafting: {
        materials: [
          {
            quantity: 1,
            item: {
              id: 580,
              name: "Red Orb",
              description: "",
              rarity: 8,
              carryLimit: 99,
              value: 800
            }
          },
          {
            quantity: 6,
            item: {
              id: 336,
              name: "Odogaron Sinew+",
              description:
                "Rare Odogaron material. Mostly obtained as a reward. Solid, used to craft gear.",
              rarity: 6,
              carryLimit: 0,
              value: 1840
            }
          },
          {
            quantity: 4,
            item: {
              id: 337,
              name: "Odogaron Claw+",
              description:
                "Rare Odogaron material. Obtained by breaking its forelegs. Sharp, used in many weapons.",
              rarity: 6,
              carryLimit: 0,
              value: 2440
            }
          },
          {
            quantity: 1,
            item: {
              id: 334,
              name: "Odogaron Plate",
              description:
                "Odogaron material. A rare find, used to fortify gear. Said to be quite hard to come by.",
              rarity: 5,
              carryLimit: 0,
              value: 3000
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
