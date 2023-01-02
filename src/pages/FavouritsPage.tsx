import React from 'react'
import { useAppSelector } from '../hooks/redux'

export function FavouritsPage() {
  const {favourites} = useAppSelector(state => state.github)

  if (favourites.length === 0) return <p className="text-center mt-5">No items.</p>

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favourites.map((f: string) => (
          <li key={f}>
            <a href={f} target="_blank">{f}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}