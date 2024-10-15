"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-5xl">{data}</h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs">
        Maciej gej
      </footer>
    </div>
  )
}
