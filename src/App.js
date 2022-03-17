import React, { Component } from "react";
import Photo from "./services/photos";
import ImageCardComponent from "./components/imageCardComponent";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    images: [],
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchFileNames();
  }

  fetchFileNames = async () => {
    const response = await axios.get("http://localhost:4000/files");

    let images = [];
    response.data.files.forEach((imageUrl) => {
      images.push(new Photo(`http://localhost:4000/${imageUrl}`).image);
    });

    this.setState({ images });
    console.log(this.state.images);
  };

  addToFavourites = (url) => {
    const newState = Photo.addToFavourites(url, this.state.images);
    this.setState({ images: newState });
  };

  removeFromFavourites = (url) => {
    const newState = Photo.removeFavourite(url, this.state.images);
    this.setState({ images: newState });
  };

  addToList = (url, listName) => {
    const newState = Photo.addToList(url, listName, this.state.images);
    this.setState({ images: newState });
  };

  removeFromList = (url) => {
    const newState = Photo.removeFromList(url, this.state.images);
    this.setState({ images: newState });
  };

  render() {
    return (
      <React.Fragment>
        <ImageCardComponent
          images={this.state.images}
          functions={{
            removeFavourite: this.removeFromFavourites,
            addToFavourites: this.addToFavourites,
            addToList: this.addToList,
            removeFromList: this.removeFromList,
          }}
        ></ImageCardComponent>
      </React.Fragment>
    );
  }
}

export default App;
