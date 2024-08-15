import React from "react";

function ButtonCustom({ title, style }: { title: string; style: string }) {
  return (
    <button className={`${style}`}>
      <span className="uppercase">{title}</span>
    </button>
  );
}

export default ButtonCustom;
