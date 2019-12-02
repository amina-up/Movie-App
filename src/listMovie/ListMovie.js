import React, { Component } from "react";

import CardMovie from "./CardMovie";
import AddMovie from "../ModelAdd/AddMovie";
import "./Card.css";

class ListMovies extends Component {
  render() {
    return (
      <div>
        <div className="cards">
          {this.props.table.map((el, key) => (
            <CardMovie
              name={el.name}
              src={el.src}
              rating={el.rating}
              key={key}
            />
          ))}
        </div>
        <div className="add-movie">
          <AddMovie addMovie={this.props.addMovie} />
        </div>
      </div>
    );
  }
}
export default ListMovies;
