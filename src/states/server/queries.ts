import { Category } from "@/model/Category"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { queryOptions } from "./queryOptions"
import { Topic } from "@/model/Topic"
import { getTopicList } from "./Post/getTopicList"


export const useCategory = () => {
    return useQuery<Category[]>({
        ...queryOptions.category, 
        staleTime: 60 * 1000, 
        gcTime: 300 * 1000
    })
}

export const useTopicList = (category: string) => {
    return useSuspenseQuery<Topic[]>({
        queryKey: ['category', category],
        queryFn: () => getTopicList(category),
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    })
}