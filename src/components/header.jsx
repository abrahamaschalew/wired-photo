import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar fixed-top">
        <span className="navbar-brand mb-0 h1">
          <Link className="navbar-brand-name" to="/">
            Wired Photo
          </Link>
          <a
            href="https://github.com/abrahamaschalew/wired-photo"
            style={{ margin: "auto  2rem" }}
          >
            <img src="github.svg"></img>
          </a>
        </span>
        <div className="form-inline my-2 my-lg-0">
          <ul>
            <li>
              <Link to="/favourites">
                <button className="btn-my fav">Favourite</button>
              </Link>
            </li>
            <li>
              <Link to="/lists">
                <button className="btn-my list">Lists</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
