import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import ItemCard from "@/components/ItemCard";

const prisma = new PrismaClient();
const getFoods = async () => {
  const res = await prisma.food.findMany({
    select: {
      id: true,
      name: true,
      img: true,
      type: true,
      typeId: true,
      country: true,
      rating: true,
      desc: true,
      ingredient: {
        select: {
          id: true,
        },
      },
      howToCook: true,
      video: true,
    },
  });
  return res;
};

const getTypes = async () => {
  const res = await prisma.country.findMany();
  return res;
};

export default async function Home() {
  const [food] = await Promise.all([getFoods()]);

  return (
    <main className="  w-[90%] mx-auto py-5 ">
      <h2 className=" text-2xl font-bold mb-2 text-center">item list</h2>
      <ItemCard data={food} />
    </main>
  );
}
