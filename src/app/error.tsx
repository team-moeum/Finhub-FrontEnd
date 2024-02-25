
'use client' 

import { useEffect } from 'react'
 

export default function Error({ error, reset }:{
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>끄응.. 무언가 잘못 됐다.</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        알아봐. {error.message}
      </button>
    </div>
  )
}