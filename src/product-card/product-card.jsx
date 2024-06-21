import React, { useState } from "react";
import Price from "/src/price/price";
import Quantity from "/src/quantity/quantity";
import DeliveryDate from "/src/delivery-date/delivery-date";
import PopularityPin from "/src/popularity-pin/popularity-pin";
import Order from "/src/order/order";
import {
  Product,
  ProductHeading,
  ProductCode,
  ProductGallery,
  ProductInfo,
  BuyButton,
  ProductTabs,
  ProductDescription,
  ProductComments,
  ProductAccordion,
  ProductOrderPopup
} from "./styled";

export default function ProductCard({ product, showInfoInAccordion }) {
  const MAX_TEXT_SIZE = 200;
  const COMMENTS_COUNT = 3;

  const [productCount, setProductCount] = useState(1);
  const totalFullPrice = product.fullPrice * productCount;
  const totalDiscountPrice = product.discountPrice * productCount;

  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowAllDescription, setIsShowAllDescription] = useState(false);
  const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

  const tabs = [
    {
      title: "Описание",
      content: (
        <ProductDescription
          text={
            isShowAllDescription
              ? product.description
              : product.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
          isShowAllDescription={isShowAllDescription}
        />
      )
    },
    {
      title: "Комментарии",
      content: (
        <ProductComments
          comments={product.comments.slice(0, commentsShow)}
          onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
          allCommentsLength={product.comments.length}
        />
      )
    }
  ];

  return (
    <Product>
      <ProductHeading h1>{product.name}</ProductHeading>
      <ProductCode code={product.code} />
      <ProductGallery images={product.images} />
      <ProductInfo>
        <Price fullPrice={totalFullPrice} discountPrice={totalDiscountPrice} />
        <Quantity count={productCount} onChange={setProductCount} />
        <DeliveryDate date={product.delivery} />
        <BuyButton size="large" onClick={() => setIsShowPopup(true)}>
          Купить
        </BuyButton>
        <PopularityPin commentsCount={product.comments.length} />
      </ProductInfo>
      {showInfoInAccordion ? (
        <ProductAccordion tabs={tabs} />
      ) : (
        <ProductTabs tabs={tabs} />
      )}
      <ProductOrderPopup
        isShow={isShowPopup}
        onClose={() => setIsShowPopup(false)}
        heading="Оформление"
      >
        <Order />
      </ProductOrderPopup>
    </Product>
  );
}
