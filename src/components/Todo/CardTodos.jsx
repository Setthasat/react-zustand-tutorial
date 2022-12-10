import React from 'react'
import SingleCard from './SingleCard'

function CardTodos() {
  return (
    <div className='w-screen h-[200px] bg-pink-300 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-mono'>
            Card TODOS (child of todo page)
        </h1>
        <h1 className='text-3xl fond-mono text-black'>
            <SingleCard />
        </h1>
    </div>
  )
}

export default CardTodos