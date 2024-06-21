import React from "react";
import { Wrapper, Date } from "./styled";

export default function DeliveryDate({ date }) {
  return (
    <Wrapper>
      Доставка: <Date>{date}</Date>
    </Wrapper>
  );
}
