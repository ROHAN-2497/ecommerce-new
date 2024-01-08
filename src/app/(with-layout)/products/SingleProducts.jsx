import React from "react";

const SingleProducts = ({ product }) => {
  const { id, name, price } = product;
  return <div>{name}</div>;
};

export default SingleProducts;
