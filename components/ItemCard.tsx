import Link from "next/link";
import React, { useState } from "react";

const ItemCard = ({ data }: any) => {
  // console.log(data[0]);
  return (
    <div className="flex flex-col items-center w-full bg-slate-00">
      {data.map((food: any) => (
        <div
          key={food.id}
          className="w-full max-w-sm bg-slate-200 rounded-md mb-2 px-5 py-3 flex items-start justify-between"
        >
          <div>
            <p className=" text-xl font-semibold">{food.name}</p>
            <div className=" text-xs max-w-[90%] mb-3 text-gray-500">
              <span>{food.country.name},&nbsp;</span>
              <span>{food.type.name}</span>
            </div>
          </div>
          <Link
            href={`/edit/${food.id}`}
            className=" bg-blue-500 text-white py-1 px-3 mt-3 rounded text-xs"
          >
            edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
