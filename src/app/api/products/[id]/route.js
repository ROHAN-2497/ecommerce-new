import db from "@/db.json";
import { request } from "express";
import { NextResponse } from "next/server";
import { Result } from "postcss";

export const GET = (request,{params}) => {
  const product = db.products.find(
    (product) => product.categoryId === +params.id
  );
  if (product) {
    return NextResponse.json(product);
  }
  return NextResponse.json(
    {
      Message: "Products Not Found",
    },
    {
      status: 404,
    }
  );
};

export const POST = async (request) => {
  const body = await request.json();
  db.products.push(body);
  return NextResponse.json(products);
};
