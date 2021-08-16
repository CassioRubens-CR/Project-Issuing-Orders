import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="border-top">
        <Container className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="col-md-4 d-flex align-items-center">
            <span className="text-muted">&copy; 2021 Cássio Rubens</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://cassiorubens-cr.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20}></FaGithub>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://www.linkedin.com/in/c%C3%A1ssio-rubens/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20}></FaLinkedin>
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
