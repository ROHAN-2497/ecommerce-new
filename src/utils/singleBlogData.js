import React from "react";

const singleBlogData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
  return <div></div>;
};

export default singleBlogData;
