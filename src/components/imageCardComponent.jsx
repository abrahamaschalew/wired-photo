import React, { Component } from "react";
import AddToList from "./addToList";
import generateKey from "../utils/generateKey";
import { LuanchModal } from "./modalListUpdate";

class ImageCardComponent extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  listCondition(image) {
    if (image.isInList == true) {
      return (
        <button
          key={generateKey()}
          onClick={() => this.props.functions.removeFromList(image.url)}
          className="btn btn-danger m-1"
        >
          Remove From List
        </button>
      );
    }

    return (
      <div>
        <LuanchModal
          image={image}
          functions={this.props.functions}
        ></LuanchModal>
      </div>
    );
  }

  favCondition(image) {
    if (image.isFavourite) {
      return (
        <img
          src="like.svg"
          className="svg-like-icon"
          width="30"
          height="30"
          key={generateKey()}
          onClick={() => this.props.functions.removeFavourite(image.url)}
        ></img>
      );
    }

    return (
      <div>
        <img
          src="un-like.svg"
          className="svg-like-icon"
          width="30"
          height="30"
          key={generateKey()}
          onClick={() => this.props.functions.addToFavourites(image.url)}
        ></img>
      </div>
    );
  }

  render() {
    let resultImages = this.props.images.map((image) => (
      <div key={generateKey()} className="col-sm-4">
        <div className="card" key={generateKey()}>
          <img key={generateKey()} src={image.url} alt="" />
          {this.favCondition(image)}
          {this.listCondition(image)}
        </div>
      </div>
    ));
    return (
      <div className="container">
        <div className="row">{resultImages}</div>
      </div>
    );
  }
}

export default ImageCardComponent;
