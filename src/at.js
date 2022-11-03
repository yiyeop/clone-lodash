export const at = (obj, path) => {
  const pathGroupList = path.map((paths) =>
    paths
      .split(".")
      .map((item) => item.match(/\d|\w/g))
      .flat()
  );

  const result = pathGroupList.map((pathGroup) =>
    pathGroup.reduce((prevValue, _path) => prevValue?.[_path], obj)
  );
  return result;
};
