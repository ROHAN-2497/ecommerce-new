import React from "react";
import wait from "./wait";

const singleProductLoad = async (id) => {
  await wait();
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: "no-cache",
  });
  return <div></div>;
};

export default singleProductLoad;
