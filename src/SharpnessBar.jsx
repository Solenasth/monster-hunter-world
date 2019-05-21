import React from "react";

class SharpnessBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}

  render() {
    const {
      red,
      orange,
      yellow,
      green,
      blue,
      white
    } = this.props.sharpSegments;

    return (
      <div className="sharpness">
        <div className="sharpness__red" style={red} />
        <div className="sharpness__orange" style={orange} />
        <div className="sharpness__yellow" style={yellow} />
        <div className="sharpness__green" style={green} />
        <div className="sharpness__blue" style={blue} />
        <div className="sharpness__white" style={white} />
      </div>
    );
  }
}

export default SharpnessBar;
