

export const getCategory = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/category`, {
      next: {
        tags: ['category'],
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
}

