import React from "react";
import Button from "/src/button/button";
import { CounterWrapper, Count } from "./styled";

export default function Counter({ count, onChange, minCount = 1 }) {
  const isDisabledDecrement = count === minCount;

  return (
    <CounterWrapper>
      <Button
        size="small"
        disabled={isDisabledDecrement}
        onClick={() => onChange && onChange(count - 1)}
      >
        -
      </Button>
      <Count
        size={3}
        value={count}
        onChange={(evt) => {
          const count = Number(evt.target.value);
          onChange(count < minCount ? minCount : count);
        }}
      />
      <Button size="small" onClick={() => onChange && onChange(count + 1)}>
        +
      </Button>
    </CounterWrapper>
  );
}
