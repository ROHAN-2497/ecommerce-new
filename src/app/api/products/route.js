import db from "@/db.json";
import { request } from "express";
import { NextResponse } from "next/server";

export const GET = (request) => {
  products = db.products.find((product) => product.id == +id);
  {
    if (product) {
      return NextResponse.json(products);
    }
    return NextResponse.json(
      {
        message: "product not found",
      },
      { status: 404 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  const body = await request.json();
  const index = db.products.findindex((product) => product.id === +params.id);
  db.products[index] = { ...db.products[index], ...body };

  return NextResponse.json({
    message: "product updated successfully",
  });
};

export const DELETE = (request, { params }) => {
  db.products = db.products.filter((product) => product.id == +params.id);
  {
    return NextResponse.json({
      message: "product delete Successfully",
    });
  }
};
