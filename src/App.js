import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import Photo from "./services/photos";
import Header from "./components/header";
import ImageCardComponent from "./components/imageCardComponent";
import FavouritesPage from "./pages/favouritesPage";
import ListPage from "./pages/listPage";
import DisplayGroupList from "./pages/displayGroupList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

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

  functions = {
    removeFavourite: this.removeFromFavourites,
    addToFavourites: this.addToFavourites,
    addToList: this.addToList,
    removeFromList: this.removeFromList,
  };

  render() {
    return (
      <BrowserRouter>
        <Header></Header>
        <div className="routes-top-margin">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ImageCardComponent
                  images={this.state.images}
                  functions={this.functions}
                ></ImageCardComponent>
              }
            />
            <Route
              path="/favourites"
              element={
                <FavouritesPage
                  favourites={this.state.images.filter(
                    (image) => image.isFavourite == true
                  )}
                  functions={this.functions}
                ></FavouritesPage>
              }
            />

            <Route
              path="/lists/"
              element={
                <ListPage
                  lists={this.state.images.filter(
                    (image) => image.isInList == true
                  )}
                  functions={this.functions}
                ></ListPage>
              }
            />

            <Route
              path="/list/:listName"
              element={
                <DisplayGroupList
                  lists={this.state.images.filter(
                    (image) => image.isInList == true
                  )}
                  functions={this.functions}
                ></DisplayGroupList>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

const ReturnParams = () => {
  return useParams();
};
export default App;
