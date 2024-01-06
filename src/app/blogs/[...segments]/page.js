import React from "react";

const page = ({ params }) => {
  const { year, id } = params.segments || [];
  return (
    <div>
      <h1>
        SinglePage{year || new Date().getFullYear()} for {id}
      </h1>
    </div>
  );
};

export default page;
