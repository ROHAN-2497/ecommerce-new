import db from "@/db.json";
import { request } from "express";
import { NextResponse } from "next/server";

export const GET = (request) => {
  // console.log(request.cookies.get(""), request.headers.get(""))
  const products = db.products;

  return NextResponse.json(products);
};

export const POST = async (request) => {
  const body = await request.json();
  db.products.push(body);
  return NextResponse.json(products);
};
