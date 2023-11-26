import React from "react";
import { PrismaClient } from "@prisma/client";
import EditForm from "@/components/EditForm";

const prisma = new PrismaClient();
const getData = async (id: any) => {
  const food = await prisma.food.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      country: true,
      type: true,
      ingredient: true,
    },
  });
  const type = await prisma.type.findMany();
  const country = await prisma.country.findMany();
  return { food, type, country };
};

async function Page({ params }: any) {
  const [data] = await Promise.all([getData(params.id)]);
  console.log(params);

  return (
    <main className=" pb-20  w-full  p-5 flex flex-col items-center space-y-5">
      <h1 className=" text-xl font-semibold">edit food data</h1>
      <EditForm data={data} />
    </main>
  );
}

export default Page;
