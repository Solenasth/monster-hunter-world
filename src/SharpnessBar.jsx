import React from "react";

class SharpnessBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Sharpness: {
        red: 110,
        orange: 120,
        yellow: 40,
        green: 50,
        blue: 80,
        white: 0
      }
    };
  }

  render() {
    return (
      <div className="sharpness">
        <div className="sharpness__red" />
        <div className="sharpness__orange" />
        <div className="sharpness__yellow" />
        <div className="sharpness__green" />
        <div className="sharpness__blue" />
        <div className="sharpness__white" />
      </div>
    );
  }
}

export default SharpnessBar;
