import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import AddToList from "./addToList";

class ModalListUpdate extends Component {
  state = {};
  render() {
    return (
      <Modal
        className="Modal"
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add To List
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddToList
            functions={this.props.functions}
            image={this.props.image}
          ></AddToList>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class LuanchModal extends Component {
  state = {
    show: false,
  };
  constructor(props) {
    super(props);
  }

  setModalShow = (showBool) => {
    this.setState({ show: showBool });
  };
  render() {
    return (
      <>
        <button
          variant="primary"
          className="btn"
          onClick={() => this.setModalShow(true)}
        >
          <img
            src="addToList.svg"
            className="svg-like-icon"
            width="15"
            height="15"
          ></img>
        </button>

        <ModalListUpdate
          className="modal-style"
          show={this.state.show}
          onHide={() => this.setModalShow(false)}
          functions={this.props.functions}
          image={this.props.image}
        />
      </>
    );
  }
}

export { ModalListUpdate, LuanchModal };
