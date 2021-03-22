import styled from "styled-components";
import Navbar from "../navbar";
import Button from "../button";

const Main = styled.div`
  position: relative;
  .source-code-btn {
    margin: 0 1em;
    position: fixed;
    bottom: 0;
    right: 0;
    color: #333;
    background: rgba(var(--JS-Yellow), 0.5);
    &:hover {
      background: rgba(var(--JS-Yellow), 1);
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Navbar />
      {children}
      <Button className="source-code-btn">
        <i className="fab fa-github" />
        <span>View Source Code.</span>
      </Button>
    </Main>
  );
};

export default Layout;
