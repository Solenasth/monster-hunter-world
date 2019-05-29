import React from "react";
import SharpnessBars from "./SharpnessBars.jsx";
import SlotsBar from "./SlotsBar.jsx";
import Equipment_title from "./Equipment_title.jsx";
import Media from "./Media.jsx";
import EquipmentStats from "./EquipmentStats.jsx";

class WeaponDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1236,
      name: 'Empress Shell "Ruin"',
      type: "light-bowgun",
      rarity: 8,
      attack: {
        display: 260,
        raw: 200
      },
      attributes: {
        damageType: "projectile",
        deviation: "high",
        ammoCapacities: {
          normal: [4, 3, 2],
          piercing: [5, 2, 0],
          spread: [3, 2, 2],
          sticky: [2, 1, 1],
          cluster: [0, 0, 0],
          recover: [0, 0],
          poison: [0, 0],
          paralysis: [0, 0],
          sleep: [0, 0],
          exhaust: [4, 0],
          flaming: [0],
          water: [0],
          freeze: [0],
          thunder: [0],
          dragon: [1],
          slicing: [1],
          wyvern: [0],
          demon: [0],
          armor: [0],
          tranq: [2]
        }
      },
      slots: [
        {
          rank: 2
        }
      ],
      elements: [],
      crafting: {
        craftable: false,
        previous: 1234,
        branches: [],
        craftingMaterials: [],
        upgradeMaterials: [
          {
            quantity: 1,
            item: {
              id: 484,
              name: "Research Commission Ticket",
              description:
                "A ticket issued by the commander to those who have aided the Research Commission. Show it to the Smithy!",
              rarity: 0,
              carryLimit: 0,
              value: 0
            }
          },
          {
            quantity: 3,
            item: {
              id: 594,
              name: "Lunastra Wing",
              description:
                "Rare Lunastra material. Obtained by breaking its wings. Supple, used to craft gear.",
              rarity: 7,
              carryLimit: 0,
              value: 4500
            }
          },
          {
            quantity: 3,
            item: {
              id: 408,
              name: "Nergigante Horn+",
              description:
                "Rare Nergigante material. Obtained by breaking its horns. Stout, used in many weapons.",
              rarity: 7,
              carryLimit: 0,
              value: 5000
            }
          },
          {
            quantity: 1,
            item: {
              id: 411,
              name: "Nergigante Gem",
              description:
                "A rare gem said to have formed within Nergigante tissue. Holds untold potential.",
              rarity: 8,
              carryLimit: 0,
              value: 12000
            }
          }
        ]
      },
      assets: {
        icon: null,
        image:
          "https://assets.mhw-db.com/weapons/light-bowgun/db60d5a211043cca3c54e29c21e90ccac8c88a86.f597ffb50fd770b91d925d8e6f16135b.png"
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="equipmentDetails">
        <Equipment_title
          name={this.state.name}
          icon={this.state.assets.icon}
          attack={this.state.attack}
          type={this.state.type}
          rarity={this.state.rarity}
        />
        <div className="equipmentDetails__body">
          <Media images={this.state.assets} />
          <div className="equipmentDetails__body__data">
            <div className="equipmentDetails__body__data__details">
              <EquipmentStats
                attack={this.state.attack}
                attributes={this.state.attributes}
                elements={this.state.elements}
              />
              <SharpnessBars
                durability={this.state.durability}
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

export default WeaponDetails;
