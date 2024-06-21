import styled from "styled-components";

const OldPrice = styled.del.attrs((props) => ({
  children: `${props.price} ₽`
}))`
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  line-height: 1;
`;

export default OldPrice;
