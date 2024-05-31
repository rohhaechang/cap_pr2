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
      <center>
        <h2>데이터 가져오기 실패</h2>
        <button onClick={() => reset()}>
          재시도하기
      </button>
      </center>
    </div>
  )
}