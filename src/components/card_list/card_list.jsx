import React, { Component } from "react";
import './card_list.style.css' 
class ListScreen extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card_list">
        {monsters.map((monster) => (
          <div className="card-container">
            <img
              alt={`monster ${monster.id}`}
              src={`https://robohash.org/${monster.id}?set=set2`}
            />
            <h2>{monster.name}</h2>
            <h2>{monster.email}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default ListScreen;
