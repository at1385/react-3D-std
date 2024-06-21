import React from "react";
import { Img } from "/src/tags";
import Heading from "/src/heading/heading";
import Price from "/src/price/price";
import { List, ListItem, StyledLink } from "./styled";

export default function Catalog({ products }) {
  return (
    <>
      <Heading h1>Каталог</Heading>
      {Boolean(products && products?.length) ? (
        <List>
          {products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <Img src={product.images[0]} />
                <Heading as="h2">{product.name}</Heading>
                <Price
                  oldPrice={product.oldPrice}
                  actualPrice={product.actualPrice}
                />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      ) : null}
    </>
  );
}
