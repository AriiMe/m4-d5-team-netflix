import React from "react";
import Searchmf from "./searchmf";
import { Navbar, NavDropdown, Image, Nav, Button } from "react-bootstrap";



class NavBar extends React.Component {
  render() {
    return (
      <Navbar className=" navbar-expand-lg navbar-dark mb-5" id="nav">
        <Navbar.Brand href="#">
          <Image
            style={{ height: "40px" }}
            src="https://fontmeme.com/permalink/201120/065882ffbeb9ad7f7d80e14d53c921f0.png"
            alt="Netflix"
          />
        </Navbar.Brand>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Navbar.Collapse className="" id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link className="" href="/">
              Home
            </Nav.Link>
            <Nav.Link active className="" href="/">
              TV Shows
            </Nav.Link>
            <Nav.Link className="" href="/">
              Movies
            </Nav.Link>
            <Nav.Link className="" href="/">
              Recently Added
            </Nav.Link>
            <Nav.Link className="" href="/">
              My List
            </Nav.Link>
          </Nav>

          <Nav.Link
            className="nav-link"
            href="#"
            style={{
              color: "rgba(255, 255, 255, 0.952font-weight: 400",
              fontWeight: "400",
            }}
          >
            KIDS
          </Nav.Link>
          <Nav.Link href="#">

          </Nav.Link>
          <Nav.Item className="nav-item dropdown form-inline my-2 my-lg-0">
            <Nav.Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                src="https://www.rainews.it/dl/img/2019/10/310x0_1570967493149.LP_10474841.jpg"
                style={{
                  width: "40px",
                  height: "30px",
                }}
              />
            </Nav.Link>
            <NavDropdown
              className="dropdown-menu dropdown-menu-right form-inline my-2 my-lg-0"
              aria-labelledby="navbarDropdown"
            >
              <NavDropdown.Item className="" href="#">
                Account
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="#">
                History
              </NavDropdown.Item>
              <NavDropdown.Item className="" href="back.html">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
