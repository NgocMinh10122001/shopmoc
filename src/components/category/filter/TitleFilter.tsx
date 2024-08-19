import React from "react";

export default function TitleFilter({ title }: { title: string }) {
  return (
    <div>
      <h3 className="text-black text-base font-bold tracking-wider pb-2 uppercase">
        {title}
      </h3>
      <div className="bg-[#0000001a] w-[10%] rounded-full h-1"></div>
    </div>
  );
}
