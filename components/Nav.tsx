import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className=" bg-slate-300 w-[90%]  mx-auto mt-10 mb-5 px-5 py-3 flex justify-between">
      <Link href={"/"} className=" text-xl">
        admin db
      </Link>
      <Link href={"/create"} className=" bg-white px-3 rounded">
        add item
      </Link>
    </nav>
  );
};

export default Nav;
