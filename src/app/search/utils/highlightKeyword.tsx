"use client";

import reactStringReplace from "react-string-replace";

export const highlightKeyword = (keyword: string, text: string) => {
  return reactStringReplace(text, keyword, (match, i) => (
    <span key={i} style={{ color: "#50BF50" }}>
      {match}
    </span>
  ));
};
