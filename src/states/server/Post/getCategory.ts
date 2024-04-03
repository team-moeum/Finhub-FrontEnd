import { queryKeys } from "../queryOptions";

export const getCategory = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`, {
      next: {
        tags: queryKeys.category,
      },
      credentials: 'include',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
}

