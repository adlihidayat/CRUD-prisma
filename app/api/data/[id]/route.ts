import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { food } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();


export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {

  const body: food = await request.json();
  const updatedFood = await prisma.food.update({
      where: {
          id: Number(params.id),
      },
      data: {
          name: body.name,
          img: body.img,
          type: { connect: { id: body.typeId } },
          country: { connect: { id: body.countryId } },
          rating: body.rating,
          desc: body.desc,
          howToCook: body.howToCook,
          video: body.video,
      },
  });

  return NextResponse.json(updatedFood, { status: 200 });
};

export const DELETE = async (request: Request, {params}: {params: {id: string}}) =>{
    const food = await prisma.food.delete({
        where:{
            id: Number(params.id)
        }
    });
    return NextResponse.json(food, {status: 200});
}


