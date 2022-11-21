import { Component } from "react";
import "./App.css";
import ListScreen from "./components/card_list/card_list";
import SearchBox from "./components/search_box/search_box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((userS) => {
        this.setState(() => {
          return { monsters: userS };
        });
      });
  }
  onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchText: searchFieldText };
    });
  };
  render() {
    const { monsters, searchText } = this.state;
    const { onSearchChange } = this;
    let fitleredMonstaers = monsters.filter((monster) => {
      console.log(this.state.searchText);
      return monster.name.toLowerCase().includes(searchText);
    });
    return (
      <div className="App">
      <h1 className="appTitle">Monster Robohash</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        <ListScreen monsters={fitleredMonstaers} />
      </div>
    );
  }
}

export default App;
