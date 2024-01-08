import singleBlogData from "@/utils/singleBlogData";
import React from "react";

const SingleBlogPage = async ({ params }) => {
  const { id, title, body } = await singleBlogData(params.id);
  return (
    <div className="block border border-blue-600 p-2 my-2" key={id}>
      <h2 className="text-2xl">
        {id}. {title}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlogPage;
