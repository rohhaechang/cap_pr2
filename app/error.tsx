'use client'

import { useEffect } from "react"

export default function Error({
  error, reset
}: {
    error: Error
  reset: () => void
  }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>라우팅 에러</h2>
      <button onClick={() => reset()}>
        재시도하기
      </button>
    </div>
  )
}