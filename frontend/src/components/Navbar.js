import React from 'react';
import { NavLink} from "./NavbarElements";
import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Badge, Dropdown } from 'react-bootstrap';

function NavbarApp() {
  return (
    <Navbar expand="lg" variant="light" bg="body-tertiary">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <NavLink to="/" className="mt-2 mt-lg-0">
            <img
              src="https://cdn.discordapp.com/attachments/1176562447918825482/1183039686940299356/FreeFlowLogo.png?ex=6586e291&is=65746d91&hm=4e80dc68f4bd172af650629d344866400b374ea9a6e844da5d70723e99125f4d&"
              height="35"
              alt="Logo"
              loading="lazy"
            /></NavLink>
          <Nav className="me-auto mb-2 mb-lg-0">
            <NavLink to="/">Dashboard</NavLink>
			<NavLink to="/about" activeStyle>About</NavLink>
			<NavLink to="/contact" activeStyle>Contact</NavLink>
            <NavLink to="/courses" activeStyle>Courses</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          <a href="#" className="text-reset me-3">
            
          </a>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="text-reset me-3 hidden-arrow"
            >
              <i className="fas fa-bell"></i>
              <Badge pill bg="danger" className="rounded-pill">
                69
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Some news</Dropdown.Item>
              <Dropdown.Item href="#">Another news</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="d-flex align-items-center hidden-arrow"
            >
              <img
                src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                className="rounded-circle"
                height="25"
                alt="Poza de profil"
                loading="lazy"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#">Profilul meu</Dropdown.Item>
              <Dropdown.Item href="#">Setari</Dropdown.Item>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarApp;
