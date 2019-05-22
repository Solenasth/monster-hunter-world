import React from "react";

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
          <img
            src={images.image}
            alt="weaponImage"
            className="equipmentDetails__body__media--img"
          />
        ) : (
          <img
            src={images.imageMale}
            alt="weaponImage"
            className="equipmentDetails__body__media--img"
          />
        )}
      </div>
    );
  }
}

export default Media;
