export const getTextOverflowStyle = (lineClamp: number): React.CSSProperties => {
  return {
    display: "-webkit-box",
    WebkitLineClamp: lineClamp,
    overflow: "hidden",
    wordBreak: "break-all",
    textOverflow: "ellipsis",
    WebkitBoxOrient: "vertical"
  };
};
