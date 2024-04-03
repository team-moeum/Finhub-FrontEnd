import { queryKeys } from "../queryOptions";

export const getTopicList = async(categoryId: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${categoryId}`, {
      next: {
        tags: queryKeys.topicList(categoryId),
      },
      credentials: 'include',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
}

