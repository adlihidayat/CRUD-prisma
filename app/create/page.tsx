import React from "react";
import { PrismaClient } from "@prisma/client";
import InputForm from "@/components/InputForm";

const prisma = new PrismaClient();
const getData = async () => {
  const type = await prisma.type.findMany();
  const country = await prisma.country.findMany();
  return { type, country };
};

async function Page() {
  const [data] = await Promise.all([getData()]);

  return (
    <main className=" pb-20  w-full  p-5 flex flex-col items-center space-y-5">
      <h1 className=" text-xl font-semibold">input food data</h1>
      <InputForm data={data} />
    </main>
  );
}

export default Page;
