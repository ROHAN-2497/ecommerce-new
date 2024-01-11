import db from '@/db.json'
import { NextResponse } from "next/server"

export const GET = (request) =>{
    // console.log(request.cookies.get(""), request.headers.get(""))
    const products = db.products
    
    return NextResponse.json(products)
}