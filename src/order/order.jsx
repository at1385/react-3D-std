import React, { useState } from "react";
import Button from "/src/button/button";
import { OrderLabel } from "./styled";

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handlerValueChange = (evt, setChange) => setChange(evt.target.value);

  const isSubmitEnable = name && phone && address;

  return (
    <form>
      <OrderLabel>
        Имя:
        <input
          type="text"
          name="order-popup-name"
          value={name}
          onChange={(evt) => handlerValueChange(evt, setName)}
        />
      </OrderLabel>
      <OrderLabel>
        Телефон:
        <input
          type="tel"
          name="order-popup-phone"
          value={phone}
          onChange={(evt) => handlerValueChange(evt, setPhone)}
        />
      </OrderLabel>
      <OrderLabel>
        Адрес доставки:
        <input
          type="text"
          name="order-popup-delivery-address"
          value={address}
          onChange={(evt) => handlerValueChange(evt, setAddress)}
        />
      </OrderLabel>
      <Button
        submit
        disabled={!isSubmitEnable}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
          );
        }}
      >
        Оформить
      </Button>
    </form>
  );
}
