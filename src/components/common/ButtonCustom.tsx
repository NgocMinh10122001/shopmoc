import React from "react";

function ButtonCustom({ title }: { title: string }) {
  return (
    <button className="text-base overflow-hidden border-2 duration-300 ease-in-out font-semibold border-deep-green bg-white text-deep-green hover:bg-deep-green hover:text-white w-[150px] h-[40px] px-4 py-2 flex justify-center items-center ">
      <span className="uppercase">{title}</span>
    </button>
  );
}

export default ButtonCustom;
