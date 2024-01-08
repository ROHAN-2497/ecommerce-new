import Link from "next/link";
import React from "react";

const SingleProducts = ({ product }) => {
  const { id, name, price } = product;
  return <div><Link href={`/products/${id}`}><h1>{name}</h1></Link></div>;
};

export default SingleProducts;
