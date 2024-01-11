import db from '@/db.json'
import { request } from 'express'
import { NextResponse } from "next/server"

export const GET = (request) =>{
    // console.log(request.cookies.get(""), request.headers.get(""))        
    const products = db.products
    
    return NextResponse.json(products)
}

export const POST = (request) =>{
    const products = db.products
    return
}