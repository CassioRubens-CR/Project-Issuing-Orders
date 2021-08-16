import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppMenu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="title-bar">
            Mercos - Pedidos de compra
          </Navbar.Brand>
          <AppMenu />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
