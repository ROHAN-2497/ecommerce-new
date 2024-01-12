import db from "@/db.json";
import { request } from "express";
import { NextResponse } from "next/server";

export const GET = (request) => {
  products = db.products.find((product) => product.id == +id);
  {
    if (product) {
      return NextResponse.json(products);
    }
    return NextResponse.json(products);
  }
};

export const POST = async (request) => {
  const body = await request.json();
  db.products.push(body);
  return NextResponse.json(products);
};
