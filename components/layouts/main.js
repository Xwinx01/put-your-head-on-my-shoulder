import NavBar from "../NavBar";
import Footer from "../Footer";

import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
