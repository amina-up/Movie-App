import React, { Component } from "react";
import "./AddMovie.css";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: { name: "", year: "", rating: "", src: "" },
      modal: false
    };
  }

  changeName = e => {
    this.setState({
      movie: { ...this.state.movie, [e.target.name]: e.target.value }
    });
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <div className="button">
          <div className="buttn">
            <Button
              color="warning m-5"
              className="btn-add"
              onClick={this.toggle}
            >
              Add a film
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <div>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Title Movie</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Title Movie..."
                  name="name"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Cover Movie</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="URL..."
                  name="src"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Rading</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Rating..."
                  name="rating"
                  onChange={e => this.changeName(e)}
                />
              </InputGroup>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="warning"
              onClick={() => {
                this.props.addMovie(this.state.movie);
                this.toggle();
              }}
            >
              Add
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
