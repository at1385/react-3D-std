import styled, { css } from "styled-components";
import Heading from "/src/heading/heading";
import VendorCode from "/src/vendor-code/vendor-code";
import Slider from "/src/slider/slider";
import Button from "/src/button/button";
import Description from "/src/description/description";
import Comments from "/src/comments/comments";
import Tabs from "/src/tabs/tabs";
import Accordion from "/src/accordion/accordion";
import Popup from "/src/popup/popup";

export const Product = styled.article`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "heading heading"
    "code code"
    "gallery info"
    "tabs tabs";
  column-gap: ${(props) => props.theme.indent};
  margin: ${(props) => props.theme.indent};
  padding: ${(props) => props.theme.indent};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ProductHeading = styled(Heading)`
  grid-area: heading;
`;

export const ProductCode = styled(VendorCode)`
  grid-area: code;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const ProductGallery = styled(Slider)`
  grid-area: gallery;
`;

export const ProductInfo = styled.div`
  grid-area: info;
  padding-left: ${(props) => props.theme.indent};
  border-left: 1px solid black;
`;

export const BuyButton = styled(Button)`
  margin-bottom: ${(props) => props.theme.indent};
`;

const tabContentMixin = css`
  grid-area: info;
  padding: ${(props) => props.theme.indent};
  border: 1px solid #ddd;
`;

export const ProductDescription = styled(Description)`
  ${tabContentMixin}
`;

export const ProductComments = styled(Comments)`
  ${tabContentMixin}
`;

export const ProductTabs = styled(Tabs)`
  grid-area: tabs;
  margin-top: ${(props) => props.theme.indent};
`;

export const ProductAccordion = styled(Accordion)`
  grid-area: tabs;
  margin-top: ${(props) => props.theme.indent};
`;

export const ProductOrderPopup = styled(Popup)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  transform: translate(-50%, -50%);
`;
