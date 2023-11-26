import React from "react";
import { PrismaClient } from "@prisma/client";
import EditForm from "@/components/EditForm";

const prisma = new PrismaClient();
const getData = async () => {
  const food = await prisma.food.findUnique({
    where: {
      id: 1,
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

async function Page() {
  const [data] = await Promise.all([getData()]);

  return (
    <main className=" pb-20  w-full  p-5 flex flex-col items-center space-y-5">
      <h1 className=" text-xl font-semibold">edit food data</h1>
      <EditForm data={data} />
    </main>
  );
}

export default Page;
