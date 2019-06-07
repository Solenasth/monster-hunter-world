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
            Search for
            <select
              onBlur={searchChange}
              name="primary search"
              id="primary-search"
              className="searchBox__form__label--select"
            >
              <option value="weapons">Weapons</option>
              <option value="armor">Armor</option>
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
