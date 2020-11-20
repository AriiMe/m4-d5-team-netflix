import React from "react";
import { Navbar, NavDropdown, Image, Nav, Button } from "react-bootstrap";

class CustomNavBar extends React.Component {
  render() {
    return (
      <Navbar className=" navbar-expand-lg navbar-dark mb-5" id="nav">
        <Navbar.Brand href="#">
          <img
            style={{ height: "40px" }}
            src="https://fontmeme.com/permalink/201113/a359d4e325be5f6686e9d92e196149c7.png"
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
            <Nav.Item className=" active">
              <Nav.Link className="nav-link" href="#">
                Tv Shows<span className="sr-only">(current)</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
              <Nav.Link className="" href="#">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
              <Nav.Link className="" href="#">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="">
              <Nav.Link className="" href="#">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav.Link href="#">
            <Image
              src="img/magnifying-glass.svg"
              style={{ width: "20", height: "20", marginRight: "10px" }}
            />
          </Nav.Link>
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
            <img
              src="img/notification.svg"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "10px",
              }}
            />
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
export default CustomNavBar;
