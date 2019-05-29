import React from "react";

import Stat_attack from "./Stat_attack.jsx";
import Stat_defense from "./Stat_defense.jsx";
import Stat_resistances from "./Stat_resistances.jsx";
import Stat_affinity from "./Stat_affinity.jsx";
import Stat_elderseal from "./Stat_elderseal.jsx";
import Stat_elements from "./Stat_elements.jsx";
import Stat_damageType from "./Stat_damageType.jsx";
import Stat_bonusDefense from "./Stat_bonusDefense.jsx";
import Stat_phials from "./Stat_phials.jsx";
import Stat_boost from "./Stat_boost.jsx";

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
        <Stat_attack attack={attack} />
        <Stat_damageType attributes={attributes} />
        <Stat_defense defense={defense} />
        <Stat_resistances resistances={resistances} />
        <Stat_affinity attributes={attributes} attack={attack} />
        <Stat_elements elements={elements} />
        <Stat_elderseal attributes={attributes} />
        <Stat_bonusDefense attributes={attributes} />
        <Stat_phials attributes={attributes} />
        <Stat_boost attributes={attributes} />
      </div>
    );
  }
}

export default EquipmentStats;
