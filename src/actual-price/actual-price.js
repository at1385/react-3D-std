import styled from "styled-components";

const ActualPrice = styled.b.attrs((props) => ({
  children: `${props.price} ₽`
}))`
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
`;

export default ActualPrice;
