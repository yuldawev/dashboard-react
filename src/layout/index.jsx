import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import RightNavbar from "./rightbar"
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <Container>
      <Navbar/>
      <main>
        <Outlet />
      </main>
      <RightNavbar/>
      </Container>
  );
};

export default Layout;
