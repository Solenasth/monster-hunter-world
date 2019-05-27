import React from "react";

import Stat_attack from "./Stat_attack.jsx";
import Stat_defense from "./Stat_defense.jsx";
import Stat_resistances from "./Stat_resistances.jsx";
import Stat_affinity from "./Stat_affinity.jsx";
import Stat_elderseal from "./Stat_elderseal.jsx";

class EquipmentStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { attack, attributes, elements, defense, resistances } = this.props;
    return (
      <div className="stats">
        {/*check if attack exists and render it */}
        <Stat_attack attack={attack} />
        {/*check if defense exists and render it */}
        <Stat_defense defense={defense} />
        {/*check if resistances exists and render it */}
        <Stat_resistances resistances={resistances} />
        {/*check if affinity exists and render it */}
        <Stat_affinity attributes={attributes} />
        {/*check if Elderseal exists and render it */}
        <Stat_elderseal attributes={attributes} />
      </div>
    );
  }
}

export default EquipmentStats;
