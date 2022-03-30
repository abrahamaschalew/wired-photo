import React, { Component } from "react";
import ImageCardComponent from "../components/imageCardComponent";

class FavouritesPage extends Component {
  state = {};
  render() {
    let error;
    if (this.props.favourites.length == 0)
      return (
        <h3
          className="h3-error"
        >
          You didn't add any image to your favourites
        </h3>
      );
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "2rem 0", width: "20%" }}>
          Favourites
        </h1>
        {error}
        <ImageCardComponent
          images={this.props.favourites}
          functions={this.props.functions}
        ></ImageCardComponent>
      </div>
    );
  }
}

export default FavouritesPage;
