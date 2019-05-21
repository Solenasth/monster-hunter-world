import React from "react";
import SharpnessBar from "./SharpnessBar.jsx";

class SharpnessBars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  calcSharpSegments = sharpnessValues => {
    let width = 200;
    let max_units = 400;
    let sharpSegments = {
      red: {
        width: 0
      },
      orange: {
        width: 0
      },
      yellow: {
        width: 0
      },
      green: {
        width: 0
      },
      blue: {
        width: 0
      },
      white: {
        width: 0
      }
    };

    sharpSegments.red = {
      width: Math.round((sharpnessValues.red * width) / max_units)
    };
    sharpSegments.orange = {
      width: Math.round((sharpnessValues.orange * width) / max_units)
    };
    sharpSegments.yellow = {
      width: Math.round((sharpnessValues.yellow * width) / max_units)
    };
    sharpSegments.green = {
      width: Math.round((sharpnessValues.green * width) / max_units)
    };
    sharpSegments.blue = {
      width: Math.round((sharpnessValues.blue * width) / max_units)
    };
    sharpSegments.white = {
      width: Math.round((sharpnessValues.white * width) / max_units)
    };

    return sharpSegments;
  };

  render() {
    const { tags, durability } = this.props;
    return (
      <div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[0]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[0])} />
        </div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[1]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[1])} />
        </div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[2]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[2])} />
        </div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[3]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[3])} />
        </div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[4]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[4])} />
        </div>
        <div className="weaponDetails__body__data--sharpness">
          <span>{tags[5]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[5])} />
        </div>
      </div>
    );
  }
}

export default SharpnessBars;
