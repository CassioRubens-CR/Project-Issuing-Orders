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
            Aplicação Web de Emissão de Pedidos
          </Navbar.Brand>
          <AppMenu />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
