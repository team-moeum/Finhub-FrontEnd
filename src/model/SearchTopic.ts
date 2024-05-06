export type SearchRequestType = "title" | "summary" | "both";

interface SearchResult {
    id: number,
    title: string,
    summary: string
}

interface SearchPageInfo {
    currentPage: number,
    totalPages: number,
    totalResults: number
}

interface SearchTopic {
    results: SearchResult[];
    pageInfo: SearchPageInfo;
}

export type {
    SearchResult,
    SearchPageInfo,
    SearchTopic
}