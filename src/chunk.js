export const chunk = (arr, size) => {
  const result = [];

  arr.forEach((item, index) => {
    index % size === 0 && result.push([]);
    result[result.length - 1].push(item);
  });

  return result;
};
