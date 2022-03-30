import React, { Component } from "react";
import { Link } from "react-router-dom";
import generateKey from "../utils/generateKey";
class ListPage extends Component {
  state = {};
  render() {
    let isThere = 0;
    let lists = [];
    this.props.lists.map((list) => {
      lists.forEach((element) => {
        if (element == list.listName) isThere++;
      });
      if (isThere == 0) lists.push(list.listName);
      isThere = 0;
    });
    let error;

    if (this.props.lists.length == 0)
      return (
        <h3 className="h3-error">You didn't add any image to your lists</h3>
      );
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "2rem 0", width: "20%" }}>
          Lists
        </h1>
        <ul>
          {lists.map((list) => (
            <Link to="/">
              <li style={{ margin: "1rem 0" }} key={generateKey()}>
                <div className="list-group-item">
                  <h2>{list}</h2>
                  <div style={{ display: "flex" }}>
                    {this.returnImages(list)}
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }

  returnImages = (listName) => {
    let images = this.props.lists.map((value) => {
      if (value.listName == listName) {
        return (
          <div>
            <img
              src={value.url}
              style={{ maxWidth: "50px", maxHeight: "50px", margin: "1rem" }}
            ></img>
          </div>
        );
      }
    });

    return images;
  };
}

export default ListPage;
