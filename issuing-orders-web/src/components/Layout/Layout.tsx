import { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main>
        <div className="py-3">
          <Container>{children}</Container>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;