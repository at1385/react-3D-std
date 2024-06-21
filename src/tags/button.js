import styled from "styled-components";

const ButtonTag = styled.button.attrs((props) => ({
  type: `${props.submit ? "submit" : "button"}`
}))`
  display: block;
  padding: 0;
  color: inherit;
  text-decoration: none;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;

  &:active,
  &:hover {
    background: none;
    box-shadow: none;
  }
`;

export default ButtonTag;
