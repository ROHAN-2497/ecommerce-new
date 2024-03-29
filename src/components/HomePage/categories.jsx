import categoriesData from "@/utils/categoriesData";
import React from "react";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await categoriesData();
  return (
    <div>
      <h1>Categories</h1>
      <div className="container mx-auto gap-4  grid grid-cols-4">
        {" "}
        {categories.map((category) => (
          <SingleCategory
            category={category}
            key={category.id}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Categories;
