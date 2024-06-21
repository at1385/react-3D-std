import styled from "styled-components";

const VendorCode = styled.span.attrs((props) => ({
  children: `Артикул: ${props.code}`
}))`
  color: ${(props) => props.theme.textColorMuted};
  font-size: 12px;
`;

export default VendorCode;
