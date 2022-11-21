import { Component } from "react";
import './search_box.style.css'
class SearchBox extends Component {
  //Cumtom methods

  render() {
    return (
      <input
        className="search-box"
        placeholder="Search"
        type="search"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
