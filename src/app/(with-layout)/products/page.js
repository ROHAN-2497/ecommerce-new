import getAllProducts from "@/utils/getAllProducts";
import React from "react";
import SingleProducts from "./SingleProducts";

const ProductsPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);
  return (
    <div>
      {products.map((product) => (
        <SingleProducts product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsPage;
