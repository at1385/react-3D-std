import React from "react";
import { PopularityPinText } from "./styled";

export default function PopularityPin({ commentsCount }) {
  if (commentsCount === 0) {
    return (
      <PopularityPinText commentsCount={commentsCount}>
        Будь первым. Поделись впечатлениями
      </PopularityPinText>
    );
  }

  if (commentsCount > 5) {
    return (
      <PopularityPinText commentsCount={commentsCount}>
        Проверенный товар
      </PopularityPinText>
    );
  }

  return null;
}
