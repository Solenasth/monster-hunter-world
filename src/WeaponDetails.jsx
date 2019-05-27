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
      id: 141,
      name: "Hazak Grosser 2",
      type: "long-sword",
      rarity: 7,
      attack: {
        display: 660,
        raw: 200
      },
      attributes: {
        damageType: "sever",
        elderseal: "average",
        affinity: 100
      },
      durability: [
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 40,
          white: 0
        },
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 50,
          white: 0
        },
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 50,
          white: 10
        },
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 50,
          white: 20
        },
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 50,
          white: 30
        },
        {
          red: 200,
          orange: 70,
          yellow: 20,
          green: 20,
          blue: 50,
          white: 40
        }
      ],
      slots: [
        {
          rank: 2
        }
      ],
      elements: [
        {
          type: "dragon",
          damage: 270,
          hidden: false
        }
      ],
      crafting: {
        craftable: false,
        previous: 140,
        branches: [],
        craftingMaterials: [],
        upgradeMaterials: [
          {
            quantity: 1,
            item: {
              id: 419,
              name: "Vaal Hazak Gem",
              description:
                "A rare gem said to have formed within Vaal Hazak Tissue. Holds untold potential.",
              rarity: 8,
              carryLimit: 0,
              value: 12000
            }
          },
          {
            quantity: 2,
            item: {
              id: 415,
              name: "Vaal Hazak Tail",
              description:
                "Rare Vaal Hazak material. Obtained by carving its severed tail. Stiff, used to craft gear.",
              rarity: 7,
              carryLimit: 0,
              value: 4900
            }
          },
          {
            quantity: 6,
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
            quantity: 3,
            item: {
              id: 438,
              name: "Xeno'jiiva Veil",
              description:
                "A rare Xeno'jiiva organ that stores energy that can be released in a violent torrent.",
              rarity: 7,
              carryLimit: 0,
              value: 4300
            }
          }
        ]
      },
      assets: {
        icon:
          "https://assets.mhw-db.com/weapons/long-sword/icons/f2e153d1dd5950d9eb8d543473f580fd.0ab4bdb9763f39b5f5099e33a4f3b3653abf5d44.png",
        image:
          "https://assets.mhw-db.com/weapons/long-sword/01caaef22e5546026d787cb5cb71a1fbc2341b54.bb6d26d65db4214d283e871a54773f0a.png"
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="equipmentDetails">
        <Equipment_title name={this.state.name} icon={this.state.assets.icon} />
        <div className="equipmentDetails__body">
          <Media images={this.state.assets} />
          <div className="equipmentDetails__body__data">
            <div className="equipmentDetails__body__data__details">
              <EquipmentStats
                attack={this.state.attack}
                attributes={this.state.attributes}
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
