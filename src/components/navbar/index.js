import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Navigation = styled.nav`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? "auto" : "3.125em")};
  overflow: hidden;
  background: rgb(var(--CL-Blue-Dark));
  .wrapper {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    color: #fff;
    .navbar-logo {
      margin: 0 auto auto 0;
      width: 3.125em;
      height: auto;
    }
    .navbar-btn-list {
      margin: 0 0.625em;
      list-style: none;
      display: flex;
      flex-direction: column;
      li {
        margin: 0 0.625em;
        height: 3.125em;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        i {
          margin: 0 0.3125em;
        }
      }
    }
  }
  @media (min-width: 48em) {
    height: 3.125em;
    .wrapper > .navbar-btn-list {
      flex-direction: row;
      li:nth-child(1) {
        display: none;
      }
    }
  }
`;

const Navbar = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navigation isOpen={isOpen}>
      <div className="wrapper">
        <img
          src="/assets/images/logo.svg"
          alt="cameron's logo"
          className="navbar-logo"
          draggable="false"
        />
        <ul className="navbar-btn-list">
          <li onClick={() => setIsOpen((prevState) => !prevState)}>
            <i className="fas fa-bars" />
          </li>
          <li onClick={() => history.push("/")}>
            <i className="fad fa-home" />
            <span>Home</span>
          </li>
          <li onClick={() => history.push("/projects")}>
            <i className="fad fa-file-signature" />
            <span>Projects</span>
          </li>
          <li>
            <i className="fab fa-connectdevelop" />
            <span>Let's Connect</span>
          </li>
        </ul>
      </div>
    </Navigation>
  );
};

export default Navbar;
