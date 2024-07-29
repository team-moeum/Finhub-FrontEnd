export type CategoryName = "채권" | "ETF" | "초보 용어" | "펀드" | "연금" | "파생상품" | "재무제표" | "예적금";

export const categoryIconMap: Record<CategoryName, string> = {
  "채권": "category_bond",
  "ETF": "category_etf",
  "초보 용어": "category_beginner",
  "펀드": "category_fund",
  "연금": "category_pension",
  "파생상품": "category_derivative",
  "재무제표": "category_statements",
  "예적금": "category_deposit",
}

export const isCategoryName = (category: string): category is CategoryName => {
  return category in categoryIconMap;
}

export const getCategoryIconPath = (category: string, on: boolean) => {
  const prefix = "/category";
  if (!isCategoryName(category)) return prefix + `/category_default${on ? '_on.svg' : '.svg'}`;
  return prefix + `/${categoryIconMap[category]}` + `${on ? '_on.svg' : '.svg'}`;
}