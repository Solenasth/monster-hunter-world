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
    const { tags, durability, icon } = this.props;
    return durability ? (
      <div className="sharpnessBars">
        <h2 className="sharpnessBars__title">Sharpness</h2>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[0]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[0])} />
        </div>
        <div className="sharpnessBars__subtitle">
          <img
            src={icon}
            alt="handicraft icon"
            className="sharpnessBars__subtitle--icon"
          />
          <h4>Handicraft</h4>
        </div>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[1]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[1])} />
        </div>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[2]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[2])} />
        </div>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[3]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[3])} />
        </div>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[4]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[4])} />
        </div>
        <div className="sharpnessBars__bar">
          <span className="sharpnessBars__bar--tag">{tags[5]}</span>
          <SharpnessBar sharpSegments={this.calcSharpSegments(durability[5])} />
        </div>
      </div>
    ) : null;
  }
}

export default SharpnessBars;
