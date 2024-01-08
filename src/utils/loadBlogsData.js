import React from "react";

const loadBlogsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return  res.json();
  return <div></div>;
};

export default loadBlogsData;
