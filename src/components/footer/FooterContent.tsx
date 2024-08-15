import React from "react";

function FooterContent({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-black text-base font-bold tracking-wide">{title}</h4>
      <p className="font-light text-black text-sm tracking-wide leading-[22px]">
        {content}
      </p>
    </div>
  );
}

export default FooterContent;
