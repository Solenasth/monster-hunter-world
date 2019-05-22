import React from "react";

class EquipmentStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { attack, attributes, elements, defense, resistances } = this.props;
    return (
      <div className="equipmentDetails__body__data--stats">
        <h3>attack : {attack.raw}</h3>
      </div>
    );
  }
}

export default EquipmentStats;
