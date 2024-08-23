import React from "react";

export default function Extra({ genre }: { genre: string }) {
  return (
    <div className="size grid grid-cols-12 items-center my-4">
      <div className="col-span-7 w-full flex justify-between items-center">
        <h3 className="text-black text-base font-bold uppercase tracking-wide">
          SIZE {genre}
        </h3>
        <p className="text-black font-light tracking-wide uppercase text-sm">
          xs, s, m, l, xl, 2xl, 3xl
        </p>
      </div>
      <div className="col-span-5"></div>
    </div>
  );
}
