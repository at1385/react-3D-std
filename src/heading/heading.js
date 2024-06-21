import styled from "styled-components";

const Heading = styled.h1`
  margin: 0;
  font-size: ${(props) => (props.h1 ? 34 : 20)}px;
`;

export default Heading;
