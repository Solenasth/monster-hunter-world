import React from "react";
import SharpnessBars from "./SharpnessBars.jsx";

class Weapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapon: "Wyvern Ignition Impact",
      type: "Great-sword",
      damage: "1081",
      durability: [
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 30,
          white: 0
        },
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 40,
          white: 0
        },
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 50,
          white: 0
        },
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 60,
          white: 0
        },
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 70,
          white: 0
        },
        {
          red: 90,
          orange: 50,
          yellow: 50,
          green: 80,
          blue: 80,
          white: 0
        }
      ],
      weaponPhotoURL:
        "https://assets.mhw-db.com/weapons/great-sword/c133eb85ec0d6edbbce29cd61cf4d1e41aad777f.d35e6b8239f318a24cb146c9ff7f9452.png",
      iconUrl:
        "https://assets.mhw-db.com/weapons/great-sword/icons/dfe1b8be199ad60c4d9b8f5a981f176e.3b127b9bb4fd3fb7b7200ca53d6f38860b3af97b.png"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="weaponDetails">
        <div className="weaponDetails__title">
          <img
            src={this.state.iconUrl}
            alt="weapon icon"
            className="weaponDetails__title__icon"
          />
          <h1>{this.state.weapon}</h1>
          <img
            src={this.state.iconUrl}
            alt="weapon icon"
            className="weaponDetails__title__icon"
          />
        </div>
        <div className="weaponDetails__body">
          <div className="weaponDetails__body__media">
            <img
              src={this.state.weaponPhotoURL}
              alt="weaponImage"
              className="weaponDetails__body__media--img"
            />
          </div>
          <div className="weaponDetails__body__data">
            <SharpnessBars
              durability={this.state.durability}
              tags={[
                "Base: ",
                "Handicraft 1: ",
                "Handicraft 2: ",
                "Handicraft 3: ",
                "Handicraft 4: ",
                "Handicraft 5: "
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Weapon;
