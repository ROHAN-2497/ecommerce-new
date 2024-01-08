import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React from "react";
export const generateMetaData = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};
export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();
  return blogs.map(({ id }) => ({
    id: id.toString(),
  }));
};

const SingleBlogPage = async ({ params }) => {
  const { id, title, body } = await loadSingleBlogData(params.id);
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
