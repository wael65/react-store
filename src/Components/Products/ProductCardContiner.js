import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import ProductCardContinerHook from "../../hooks/product/ProductCardContinerHook";

const ProductCardContiner = () => {
  const [allProducts] = ProductCardContinerHook();
  console.log(allProducts);
  return (
    <Row className="my-2 d-flex justify-content-start ">
      {allProducts
        ? allProducts.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.name}
                img={item.avatar}
                description={item.description}
                price={item.price}
              />
            );
          })
        : null}
    </Row>
  );
};

export default ProductCardContiner;
