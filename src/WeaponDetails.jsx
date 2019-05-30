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
      id: 1238,
      name: "Gluttonous Fangcannon",
      type: "heavy-bowgun",
      rarity: 7,
      attack: {
        display: 270,
        raw: 180
      },
      attributes: {
        damageType: "projectile",
        deviation: "average",
        ammoCapacities: {
          normal: [5, 4, 0],
          piercing: [5, 0, 0],
          spread: [10, 6, 0],
          sticky: [2, 0, 0],
          cluster: [1, 1, 0],
          recover: [1, 1],
          poison: [0, 0],
          paralysis: [2, 0],
          sleep: [0, 0],
          exhaust: [1, 0],
          flaming: [0],
          water: [0],
          freeze: [0],
          thunder: [0],
          dragon: [0],
          slicing: [0],
          wyvern: [0],
          demon: [1],
          armor: [1],
          tranq: [3]
        }
      },
      slots: [
        {
          rank: 1
        }
      ],
      elements: [],
      crafting: {
        craftable: false,
        previous: 1024,
        branches: [],
        craftingMaterials: [],
        upgradeMaterials: [
          {
            quantity: 2,
            item: {
              id: 417,
              name: "Vaal Hazak Talon",
              description:
                "Rare Vaal Hazak material. Obtained by breaking its forelegs. Sharp, used in many weapons.",
              rarity: 7,
              carryLimit: 0,
              value: 4750
            }
          },
          {
            quantity: 8,
            item: {
              id: 219,
              name: "Great Jagras Claw+",
              description:
                "Rare Great Jagras material. Obtained by breaking its forelegs. Sharp, used in many weapons.",
              rarity: 6,
              carryLimit: 0,
              value: 1620
            }
          },
          {
            quantity: 6,
            item: {
              id: 218,
              name: "Great Jagras Hide+",
              description:
                "Rare Great Jagras material. Mostly obtained as a reward. Supple, used to craft gear.",
              rarity: 6,
              carryLimit: 0,
              value: 1220
            }
          },
          {
            quantity: 1,
            item: {
              id: 125,
              name: "Novacrystal",
              description:
                "High quality Lightcrystal. Highly coveted for its rarity, it's used for only the finest of metalworking.",
              rarity: 6,
              carryLimit: 99,
              value: 2440
            }
          }
        ]
      },
      assets: {
        icon: null,
        image:
          "https://assets.mhw-db.com/weapons/heavy-bowgun/967e303ec8b04521f00a3a94aace99ffa4d9862c.c2e5bf6699d9e508a7b4e277360453d6.png"
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
                type={this.state.type}
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
