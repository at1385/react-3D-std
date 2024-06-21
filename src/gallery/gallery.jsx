import React from "react";

export default function Gallery({ className, src }) {
  return (
    <img className={className} src={src} width="200" height="257" alt="" />
  );
}
