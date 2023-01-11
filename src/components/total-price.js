export const calcTotalPrice = (items) =>
  items.reduce((acc, it) => (acc += it.price), 0);
