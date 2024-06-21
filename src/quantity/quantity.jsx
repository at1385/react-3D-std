import React from "react";
import Counter from "/src/counter/counter";
import { QuantityWrapper } from "./styled";

export default function Quantity({ count, onChange }) {
  return (
    <QuantityWrapper>
      Количество: <Counter count={count} onChange={onChange} />
    </QuantityWrapper>
  );
}
