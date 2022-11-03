export const groupBy = (collection, iteratee) => {
  return collection.reduce((acc, cur) => {
    const key = typeof iteratee === "function" ? iteratee(cur) : cur[iteratee];
    (acc[key] ?? (acc[key] = [])).push(cur);
    return acc;
  }, {});
};
