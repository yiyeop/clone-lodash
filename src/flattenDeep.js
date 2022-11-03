export const flattenDeep = (arr) => {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  });

  if (result.some((item) => Array.isArray(item))) {
    return flattenDeep(result);
  }
  return result;
};
