export interface Topic {
    topicId: number;
    title: string;
    categoryName: string;
    categoryId?: number;
    summary: string;
    scrapped: boolean;
}