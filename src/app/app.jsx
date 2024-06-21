import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProductCard from "/src/product-card/product-card";
import Layout from "/src/layout/layout";
import Catalog from "/src/catalog/catalog";
import { products } from "/src/mock";

function ProductOr404({ products }) {
  const { id } = useParams();
  const par = useParams();
  console.log(id);
  console.log(par);
  const product = products.find((product) => product.code.toString() === id);
  return product ? (
    <ProductCard product={product} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog products={products} />} />
          <Route path="product">
            <Route path=":id" element={<ProductOr404 products={products} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
