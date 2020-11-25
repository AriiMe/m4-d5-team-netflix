import React from "react";
import { Navbar, NavDropdown, Image, Nav, Button, Container } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'



const NavBar = (props) => {

  const { location } = props;
  return (
    <Navbar className=" navbar-expand-lg navbar-dark mb-0" id="nav">
      <Container>
        <Link to="/">
          <Navbar.Brand href="#">
            <Image
              style={{ height: "40px" }}
              src="https://fontmeme.com/permalink/201120/065882ffbeb9ad7f7d80e14d53c921f0.png"
              alt="Netflix"
            />
          </Navbar.Brand>
        </Link>
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
            <Link to="/" className="text-decoration-none">
              <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
            </Link>
            <Link to="/shows" className="text-decoration-none">
              <div className={location.pathname === '/shows' ? 'nav-link active' : 'nav-link'}>TV Shows</div>
            </Link>
            <Link to="/movies" className="text-decoration-none">
              <div className={location.pathname === '/movies' ? 'nav-link active' : 'nav-link'}>Movies</div>
            </Link>
            <Link to="/new" className="text-decoration-none">
              <div className={location.pathname === '/new' ? 'nav-link active' : 'nav-link'}>Recently Added</div>
            </Link>
            <Link to="/myList" className="text-decoration-none">
              <div className={location.pathname === '/myList' ? 'nav-link active' : 'nav-link'}>My List</div>
            </Link>
          </Nav>

          <Nav>
            <Link to="/kids">
              <div style={{
                color: "rgba(255, 255, 255, 0.952font-weight: 400",
                fontWeight: "400",
              }}
                className={location.pathname === '/kids' ? 'nav-link active' : 'nav-link'}>KIDS</div>
            </Link>

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
                title=""
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default withRouter(NavBar);
