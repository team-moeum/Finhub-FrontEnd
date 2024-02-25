

type Props = {category: string}
export const getTopicList = async(category:string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category/${category}`, {
      next: {
        tags: ['category', category],
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
}

