import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const NavComponent = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4" navbarScroll>
            <Nav.Link href="#action1" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="navLink">
              About
            </Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Products</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Popular Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <Icon.CartFill size={25} /> Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {props.cartCount}
              </span>
            </button>
          </form>
        </Navbar.Collapse>
      </div>
    </nav>
  );
};

export default NavComponent;
