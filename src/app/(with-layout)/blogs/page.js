import loadBlogsData from "@/utils/loadBlogsData";
import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Blogs || Next App",
  description: "Generated by create next app",
};
//     id: 1,
//     year: 2016,
//     title: " title 1",
//   },
//   {
//     id: 2,
//     year: 2016,
//     title: " title 2",
//   },
//   {
//     id: 3,
//     year: 2016,
//     title: " title 3",
//   },
//   {
//     id: 4,
//     year: 2016,
//     title: " title 4",
//   },
// ];

const BlogsPage = async () => {
  const blogs = await loadBlogsData();
  return (
    <div className="container mx-auto p-2 mt-10">
      {blogs.map(({ id, body, title }) => (
        <div className="block border border-blue-600 p-2 my-2" key={id}>
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link href={`/blogs/${id}`}>
            <button className="inline-block m-2 p-1 rounded-sm font-semibold text-white bg-blue-600">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
