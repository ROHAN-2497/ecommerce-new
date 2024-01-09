import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link
      className=" text-1xl font-semibold rounded-xl border-2 border-blue-100 p-2"
      href={`/products?categoryId=${id}`}
    >
      {name}
    </Link>
  );
};

export default SingleCategory;
