import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.getOneLameSword}>get one lame sword</button>
        <div>holder</div>
      </div>
    );
  }
}

export default Results;
