import React from "react";

class SearchBar extends React.Component {
  state = { video: "" };

  onSearchInput = (event) => {
    this.setState({ video: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onVideoSearch(this.state.video);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{ fontStyle: "bold", fontSize: "15px" }}>
              Video Search
            </label>
            <input
              type="text"
              value={this.state.video}
              onChange={this.onSearchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
