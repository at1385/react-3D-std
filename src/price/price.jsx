import React from "react";
import {
  PriceWrapper,
  OldPricePositioned,
  ActualPricePositioned
} from "./styled";

export default function Price({ oldPrice, actualPrice }) {
  const isOldPrice = Boolean(oldPrice && actualPrice < oldPrice);

  return (
    <PriceWrapper>
      Цена: {isOldPrice && <OldPricePositioned price={oldPrice} />}{" "}
      <ActualPricePositioned price={actualPrice} />
    </PriceWrapper>
  );
}
