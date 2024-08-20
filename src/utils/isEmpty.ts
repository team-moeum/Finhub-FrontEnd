export const isEmpty = (input: any) => {
  if (
    typeof input === "undefined" ||
    input === null ||
    input === "" ||
    input === "null" ||
    input.length === 0 ||
    (typeof input === "object" && !Object.keys(input).length)
  ) {
    return true;
  } else return false;
};
