import React from "react";
import { PrismaClient } from "@prisma/client";
import EditForm from "@/components/EditForm";
import { useRouter } from "next/router";

const prisma = new PrismaClient();
const getData = async (id: any) => {
  // console.log(id);
  //   const { id } = router.query;
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

async function Page(params: any) {
  // const router = useRouter();
  // const id = router.query;
  // console.log(params.params.id);
  const [data] = await Promise.all([getData(params.params.id)]);

  return (
    <main className=" pb-20  w-full  p-5 flex flex-col items-center space-y-5">
      <h1 className=" text-xl font-semibold">edit food data</h1>
      <EditForm data={data} />
    </main>
  );
}

export default Page;
