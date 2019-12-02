import React, { Component } from "react";
import "./App.css";
import NavbarSearch from "./navBar/NavSearching";
import ListMovies from "./listMovie/ListMovie";
import StarRating from "./navBar/StartRating";

class App extends Component {
  state = {
    films: [
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-rzus2fCA8WAj5apV3wLy7rmc5MrwiFA7lVmyAzJRvOQjHLVZ",
        name: "The stary",
        rating: 2
      },
      {
        src:
          "https://amc-theatres-res.cloudinary.com/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg",
        name: "Dora Dora",
        rating: 1
      },
      {
        src:
          "https://regalcdn.azureedge.net/DoctorSleep/HO00009866/TV_SmallPosterImage/20191009-124901292.jpg",
        name: "Doctor Sleep",
        rating: 2
      }
    ],
    userInput: "",
    rate: 0
  };

  ChangeValue = input => {
    this.setState({
      userInput: input
    });
  };
  filterRate = count => {
    this.setState({ rate: count });
  };

  addMovie = newMovie => {
    this.setState({
      films: this.state.films.concat(newMovie)
    });
  };

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <NavbarSearch filterSearch={this.ChangeValue} />

          <StarRating changeRate={this.filterRate} count={this.state.rate} />
        </div>
        <ListMovies
          addMovie={this.addMovie}
          table={this.state.films.filter(
            el =>
              el.name
                .toLowerCase()
                .includes(this.state.userInput.toLowerCase().trim()) &&
              el.rating >= this.state.rate
          )}
          // table={

          //     // this.state.userInput
          //     //   ? this.state.films.filter(el =>
          //     //       el.name
          //     //         .toLowerCase()
          //     //         .includes(this.state.userInput.toLowerCase())
          //     //     )
          //     //   : this.state.films.filter(el => el.rating == this.state.rate)
          //     // this.state.films.filter(
          //     //   el =>
          //     //     el.name
          //     //       .toLowerCase()
          //     //       .includes(this.state.userInput.toLowerCase()) &&
          //     //     this.state.rate >= el.rating
          //     // )

          // }
        />
      </div>
    );
  }
}
export default App;
