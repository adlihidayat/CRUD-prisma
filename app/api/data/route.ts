import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const POST = async (request: Request) =>{
    const body = await request.json();

    const foodData: Prisma.foodCreateInput = {
        name: body.name,
        img: body.img,
        type: { connect: { id: body.typeId } },
        country: { connect: { id: body.countryId } },
        rating: body.rating,
        desc: body.desc,
        ingredient: {
            create: {
                items: body.ingredient.items,
            },
        }, 
        howToCook: body.howToCook,
        video: body.video,
    };
      
    const food = await prisma.food.create({
    data: foodData,
    });

    return NextResponse.json(food, {status: 201});
}