import db from "@/db.json";
import { request } from "express";
import { NextResponse } from "next/server";
import { Result } from "postcss";

export const GET = (request) => {
  // console.log(request.cookies.get(""), request.headers.get(""))
  const { searchParams } = new URL(request.url);
  const categoryId = seearchParams.get("categoryId");

  let products = db.products;
  if (categoryId) {
    products = products.filter((product) => product.categoryId == +categoryId);
  }
  return NextResponse.json(products);
};

export const POST = async (request) => {
  const body = await request.json();
  db.products.push(body);
  return NextResponse.json(products);
};
