import styled from "styled-components";
import Button from "/src/button/button";
import { Swiper } from "swiper/react";

export const SliderWrapper = styled.div`
  position: relative;
`;

export const SliderButton = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "0" : "auto")};
  right: ${(props) => (props.right ? "0" : "auto")};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  padding: 0;
`;

export const Slides = styled(Swiper)`
  width: 200px;
  height: 257px;
  margin-left: 30px;
  margin-right: 30px;
`;
