import React from "react";

import Axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  getOneLameSword = () => {
    Axios.get('https://mhw-db.com/weapons?q={"id":1}').then(results =>
      this.setState({ weapon: results.data[0] })
    );
  };
}

export default Search;
