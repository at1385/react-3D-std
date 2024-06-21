import React from "react";
import Button from "/src/button/button";
import { DescriptionHeading, DescriptionText } from "./styled";

export default function Description({
  className,
  text,
  onShowMore,
  isShowAllDescription
}) {
  return (
    <section className={className}>
      <DescriptionHeading as="h2">Описание</DescriptionHeading>
      <DescriptionText>{text}</DescriptionText>
      <Button onClick={onShowMore}>
        {isShowAllDescription ? "Скрыть" : "Подробнее"}
      </Button>
    </section>
  );
}
