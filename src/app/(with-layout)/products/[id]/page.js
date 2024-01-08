import singleProductLoad from "@/utils/singleProductLoad";
import Link from "next/link";
import React from "react";

const SingleProduct = async ({ params }) => {
  const product = await singleProductLoad(params.id);
  return <div>{product.title}</div>;
};

export default SingleProduct;
