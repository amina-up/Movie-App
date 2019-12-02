import React, { Component } from "react";
import { Button, FormControl, Navbar, InputGroup, Form } from "react-bootstrap";

class NavbarSearch extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <Navbar className=" justify-content-between">
        <div className="starts"></div>
        <FormControl
          type="text"
          placeholder="Search..."
          className=" mr-sm-2"
          onChange={e => {
            this.props.filterSearch(e.target.value);
          }}
        />
      </Navbar>
    );
  }
}
export default NavbarSearch;
