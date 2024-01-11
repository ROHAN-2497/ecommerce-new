import React from "react";

const ManageSingleProduct = ({ product }) => {
  const { id, title, price, cagtegoryId, imageUrl } = product;
  return (
    <tr className="text-center w-full">
      <td className="border border-slate-400 p-2">{title}</td>
      <td className="border border-slate-400 p-2">{price}</td>
      <td className="border border-slate-400 p-2">
        <button className="bg-blue-400 text-white py-2 rounded">Update</button>
      </td>
      <td className="border border-slate-400 p-2">
        <button className="bg-blue-400 text-white py-2 rounded">Delete</button>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
