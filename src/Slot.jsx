import React from "react";

class Slot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { icon } = this.props;
    return (
      <div className="slotsBar__slot">
        <img src={icon} alt="Decoration size icon, as shown in the game" />
      </div>
    );
  }
}

export default Slot;
