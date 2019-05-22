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
      id: 201,
      name: "Lumu Knife 1",
      type: "sword-and-shield",
      rarity: 3,
      attack: {
        display: 168,
        raw: 120
      },
      attributes: {
        damageType: "sever"
      },
      durability: [
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 50,
          blue: 0,
          white: 0
        },
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 60,
          blue: 0,
          white: 0
        },
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 70,
          blue: 0,
          white: 0
        },
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 80,
          blue: 0,
          white: 0
        },
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 90,
          blue: 0,
          white: 0
        },
        {
          red: 70,
          orange: 50,
          yellow: 80,
          green: 100,
          blue: 0,
          white: 0
        }
      ],
      slots: [],
      elements: [],
      crafting: {
        craftable: false,
        previous: 187,
        branches: [202],
        craftingMaterials: [],
        upgradeMaterials: [
          {
            quantity: 1,
            item: {
              id: 295,
              name: "Paolumu Shell",
              description:
                "Paolumu material. Obtained by breaking its tail. Used for many purposes.",
              rarity: 4,
              carryLimit: 0,
              value: 950
            }
          },
          {
            quantity: 3,
            item: {
              id: 294,
              name: "Paolumu Scale",
              description:
                "Paolumu material. Mostly obtained by carving. Solid, used to craft gear.",
              rarity: 4,
              carryLimit: 0,
              value: 450
            }
          },
          {
            quantity: 2,
            item: {
              id: 293,
              name: "Paolumu Pelt",
              description:
                "Paolumu material. Mostly obtained as a reward. Broadly used for many purposes.",
              rarity: 4,
              carryLimit: 0,
              value: 650
            }
          }
        ]
      },
      assets: {
        icon:
          "https://assets.mhw-db.com/weapons/sword-and-shield/icons/e1744c28d0fec4f8edde00178ae0db64.1434da92e5a7ad0916948ebfc4dc11873728f608.png",
        image:
          "https://assets.mhw-db.com/weapons/sword-and-shield/74c78d3d34d067a2101033e52312c5c6cbf21c5d.732b90ddd695b7f1e3521f65a9f4edc7.png"
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
              <EquipmentStats attack={this.state.attack} />
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
