import React, { useEffect } from "react";
import Heading from "/src/heading/heading";
import { PopupWrapper, PopupHeader, PopupClose } from "./styled";

export default function Popup({
  className,
  isShow,
  heading,
  children,
  onClose
}) {
  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  }, []);

  return isShow ? (
    <PopupWrapper className={className}>
      <PopupHeader>
        <Heading as="h2">{heading}</Heading>
        <PopupClose size="small" onClick={onClose}>
          x
        </PopupClose>
      </PopupHeader>
      {children}
    </PopupWrapper>
  ) : null;
}
