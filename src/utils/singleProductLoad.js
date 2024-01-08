import React from "react";

const singleProductLoad = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: "no-cache",
  });
  return <div></div>;
};

export default singleProductLoad;
