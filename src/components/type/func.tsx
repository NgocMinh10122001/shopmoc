export const transformPrice = (price: string | number) => {
  return price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};
