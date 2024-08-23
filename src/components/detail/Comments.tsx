"use client";
import React, { useState } from "react";
import { IComment } from "../type/types";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Comments({
  comments,
  productName,
}: {
  comments: IComment[];
  productName: string;
}) {
  const options: string[] = ["1", "2", "3", "4", "5"];

  // Handle change event

  const [form, setForm] = useState<{
    evaluate: string;
    userName: string;
    email: string;
    rate: string;
    save: boolean;
  }>({
    evaluate: "",
    userName: "",
    email: "",
    rate: "",
    save: false,
  });
  console.log("check form", form);

  return (
    <div className="w-full grid grid-cols-12 my-4 gap-4">
      <div className="col-span-7">
        <p className="text-black font-bold tracking-wide text-xl ">
          {comments.length ?? ""} đánh giá cho {productName}
        </p>
        {comments &&
          comments.length &&
          comments.map((item, index) => (
            <div
              key={index}
              className="flex py-8 w-full border-b-[2px] border-dashed "
            >
              <div className="px-4">
                <FaUserCircle size={50} color="#000" />
              </div>
              <div className="">
                <div className="flex items-center mb-2">
                  {Array(item.evaluate)
                    .fill("")
                    .map((item, index) => (
                      <FaStar key={index} size={16} color="#d35400" />
                    ))}
                </div>
                <p className="text-black font-light tracking-wide w-full text-sm">
                  <b className=" font-semibold">{item.userName}</b> -{" "}
                  {item.content}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="col-span-5 bg-transparent p-6 border-[2px] border-deep-green rounded-sm text-black">
        <p className="font-bold text-xl tracking-wide mb-4">Thêm đánh giá </p>
        <form action="" className="text-black flex flex-col gap-4">
          <div className="vote-star">
            <label htmlFor="#vote" className="font-semibold text-sm ">
              Đánh giá của bạn *
            </label>
            <div className="flex gap-4 items-center" id="vote ">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2  mt-2 mb-4">
                  <input
                    type="checkbox"
                    id={`${option}`}
                    name="options"
                    value={option}
                    checked={form.rate === option}
                    onChange={(e) => setForm({ ...form, rate: e.target.value })}
                    className="focus:text-light-gray"
                  />
                  <p className="text-black flex items-center gap-1 ">
                    <span className="font-semibold text-sm">{option}</span>{" "}
                    <FaStar key={index} size={16} color="#d35400" />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="evaluate w-full">
            <label htmlFor="#evaluate" className="font-semibold text-sm ">
              Nhận xét của bạn *
            </label>
            <textarea
              id="evaluate"
              name="evaluate"
              rows={10}
              cols={50}
              value={form.evaluate}
              className="h-[100px] bg-white rounded-sm w-full outline-none ring-1 ring-gray-300 focus-within:ring-2  p-2 mt-2"
              onChange={(e) => setForm({ ...form, evaluate: e.target.value })}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="user-name w-full">
              <label htmlFor="#userName" className="font-semibold text-sm ">
                Tên *
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                value={form.userName}
                className="bg-white px-2 py-1 rounded-sm w-full outline-none ring-1 ring-gray-300 focus-within:ring-2  mt-2"
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
              />
            </div>
            <div className="email w-full">
              <label htmlFor="#email" className="font-semibold text-sm ">
                Email *
              </label>
              <input
                type="email"
                value={form.email}
                name="email"
                id="email"
                className="bg-white px-2 py-1 rounded-sm w-full outline-none ring-1 ring-gray-300 focus-within:ring-2  mt-2"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="email w-full">
            <input
              type="checkbox"
              value={""}
              name="save"
              id="save"
              checked={form.save}
              onChange={() => setForm({ ...form, save: !form.save })}
              className="me-2"
            />
            <label htmlFor="#email" className="font-semibold text-sm ">
              Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần
              bình luận kế tiếp của tôi.
            </label>
          </div>
          <div className="submit w-full flex justify-end items-center">
            <button
              className="bg-deep-green hover:cursor-pointer hover:bg-green-700 duration-300 ease-in-out rounded-sm px-4 py-2 my-4 uppercase text-base font-bold text-white"
              onSubmit={() => {}}
            >
              Gửi đi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
