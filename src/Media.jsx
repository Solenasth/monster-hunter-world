import React from "react";
import default_armor from "./img/noArmor.png";

class Media extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { images } = this.props;
    return (
      <div className="equipmentDetails__body__media">
        {images.image ? (
          <div className="equipmentDetails__body__media--imgWeapon">
            <img src={images.image} alt="weapon" />
          </div>
        ) : (
          <div className="equipmentDetails__body__media__gallery">
            <div className="equipmentDetails__body__media__gallery--img">
              <img
                src={images.imageMale ? images.imageMale : default_armor}
                alt="Armor"
              />
              <h4>Male</h4>
            </div>
            <div className="equipmentDetails__body__media__gallery--img">
              <img
                src={images.imageFemale ? images.imageFemale : default_armor}
                alt="Armor"
              />
              <h4>Female</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Media;
