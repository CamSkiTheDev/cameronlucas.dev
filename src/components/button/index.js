import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  margin: 0.625em;
  padding: 0 1.25em;
  height: 1.875em;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ buttonBGColor }) => (buttonBGColor ? buttonBGColor : null)};
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  i {
    margin: 0 0.625em 0 0;
  }
`;

const Button = (props) => (
  <StyledButton buttonBGColor={props.buttonBGColor} {...props}>
    {props.children}
  </StyledButton>
);

export default Button;
