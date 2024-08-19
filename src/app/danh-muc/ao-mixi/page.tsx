import Category from "@/components/category/Category";
import Souvenirs from "@/components/category/souvenirs/Souvenirs";
import { products } from "@/components/type/fakedata";
import React from "react";

export default function page() {
  return <Category title="ÁO MIXI" products={products} />;
}
