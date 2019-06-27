import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    const { searchChange } = this.props;
    return (
      <div className="searchBox">
        <form onSubmit={this.handleFormSubmit} className="searchBox__form">
          <label
            htmlFor="primary search parameter"
            className="searchBox__form__label"
          >
            Search
            <select
              onBlur={searchChange}
              name="primary search"
              id="primary-search"
              className="searchBox__form__label--select"
            >
              <option value="great-sword">Great Sword</option>
              <option value="dual-blades">Dual Blades</option>
              <option value="lance">lance</option>
              <option value="charge-blade">Charge Blade</option>
              <option value="heavy-bowgun">Heavy Bowgun</option>
              <option value="long-sword">Long Sword</option>
              <option value="hammer">Hammer</option>
              <option value="gunlance">Gunlance</option>
              <option value="insect-glaive">Insect Glaive</option>
              <option value="bow">Bow</option>
              <option value="sword-and-shield">Sword and Shield</option>
              <option value="hunting-horn">Hunting Horn</option>
              <option value="switch-axe">Switch Axe</option>
              <option value="light-bowgun">Light bowgun</option>
            </select>
          </label>
          <button
            onClick={this.getOneLameSword}
            className="searchBox__form__button"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
