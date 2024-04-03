export interface Topic {
    id: number;
    title: string;
    category: string;
    categoryId?: number;
    content: string;
    scrap: boolean;
}