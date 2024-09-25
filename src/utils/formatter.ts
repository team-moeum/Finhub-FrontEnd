type formatType = "korean" | "dotSeparated";

export const dateFormatter = (date: string, type: formatType) => {
  if (!date) return "";

  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  if (type === "korean") return `${year}년 ${month}월 ${day}일`;
  if (type === "dotSeparated") return `${year}. ${month}. ${day}.`;

  return null;
};

export const datetimeFormatter = (dt = new Date(), type?: formatType) => {
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");

  switch (type) {
    case "korean":
      return `${year}년 ${month}월 ${day}일`;
    case "dotSeparated":
      return `${year}. ${month}. ${day}.`;
    default:
      return `${year}년 ${month}월 ${day}일`;
  }
};
