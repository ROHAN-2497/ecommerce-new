import React from "react";

const categoriesData = async () => {
const res = await fetch("http://localhost:5000/categories", {next:{
  revalidate: 5
}});
  return res.json();
};

export default categoriesData;
