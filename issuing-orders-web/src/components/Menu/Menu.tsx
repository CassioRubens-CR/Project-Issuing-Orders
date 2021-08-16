import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routes } from "../../Config/index";
import RouteItem from "../../model/RouteItemModel";

const Menu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          {routes.map(
            (route: RouteItem) =>
              route.showInMenu && (
                <Nav.Item
                  as={Link}
                  to={`${route.path}`}
                  key={route.key}
                  className="nav-link"
                >
                  {route.title}
                </Nav.Item>
              )
          )}
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default Menu;
