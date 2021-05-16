import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navigation = styled.nav`
  width: 100%;
  height: 3.125em;
  background: rgb(var(--CL-Blue-Dark));
  .wrapper {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .navbar-logo {
      width: 3.125em;
      height: auto;
    }
    .navbar-btn-list {
      list-style: none;
      display: flex;
      flex-direction: row;
      li {
        margin: 0 0.625em;
        height: 3.125em;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        cursor: pointer;
        i {
          margin: 0 0.3125em;
        }
      }
    }
  }
`;

const Navbar = () => {
  const history = useHistory();

  return (
    <Navigation>
      <div className="wrapper">
        <img
          src="/assets/images/logo.svg"
          alt="cameron's logo"
          className="navbar-logo"
          draggable="false"
        />
        <ul className="navbar-btn-list">
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
