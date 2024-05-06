export type TrendType = "New" | "Increased" | "Decreased" | "Stable";

export interface PopularKeyword {
    rank: number,
    keyword: string,
    trend: TrendType
}