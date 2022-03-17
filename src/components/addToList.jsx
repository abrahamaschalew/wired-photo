import React, { Component } from "react";

class AddToList extends Component {
  state = {
    forms: {
      listName: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      forms: { ...this.state.forms, listName: event.target.value },
    });
  };

  render() {
    return (
      <form
        onSubmit={() => {
          this.props.functions.addToList(
            this.props.image.url,
            this.state.forms.listName
          );
        }}
      >
        <div className="container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.forms.listName}
              onChange={this.handleChange}
              placeholder="Enter List Name"
            ></input>
          </div>
          <div className="form-group mt-2">
            <button
              type="button"
              className="btn btn-primary"
              type="submit"
              value="submit"
            >
              Add To List
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddToList;
