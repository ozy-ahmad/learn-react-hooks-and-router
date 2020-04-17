import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            reactstrap
          </NavbarBrand>

          <Nav navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/Article">Article</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Navbars;
