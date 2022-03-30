import React, { Component } from "react";
import generateKey from "../utils/generateKey";
import { LuanchModal } from "./modalListUpdate";
import "../css/imageCard.css";

class ImageCardComponent extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  listCondition(image) {
    if (image.isInList == true) {
      return (
        <button
          type="button"
          className="btn"
          key={generateKey()}
          onClick={() => this.props.functions.removeFromList(image.url)}
        >
          Remove From List
          <img
            style={{ marginLeft: "1rem" }}
            src="removeFromList.svg"
            className="svg-like-icon"
            width="15"
            height="15"
            key={generateKey()}
          ></img>
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

  splitIntoChunk = (arr, chunk) => {
    let chunks = [];
    while (arr.length > 0) {
      let tempArray;
      tempArray = arr.splice(0, chunk);
      chunks.push(tempArray);
    }

    return chunks;
  };

  render() {
    let resultImages = this.props.images.map((image) => (
      <div key={generateKey()}>
        <div className="card" key={generateKey()} style={{ margin: "1rem" }}>
          <img
            key={generateKey()}
            src={image.url}
            alt=""
            style={{ width: "100%", height: "100%" }}
            className="image-card"
          />
          <div className="svg-container" key={generateKey()}>
            <div key={generateKey()}>{this.listCondition(image)}</div>
            <div key={generateKey()} style={{ marginLeft: "auto" }}>
              {this.favCondition(image)}
            </div>
          </div>
        </div>
      </div>
    ));

    let threeColumnChunkImages = this.splitIntoChunk(
      resultImages,
      Math.round(resultImages.length / 3)
    );

    let output = threeColumnChunkImages.map((element) => (
      <div className="col-sm-4">{element}</div>
    ));

    return (
      <div className="container-fluid" key={generateKey()}>
        <div className="row">{output}</div>
      </div>
    );
  }
}

export default ImageCardComponent;
