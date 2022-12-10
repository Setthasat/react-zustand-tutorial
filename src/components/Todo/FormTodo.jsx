import React from 'react'

function FormTodo({propsSetCount: setCount}) {

    function handleIncreaseCount() {
        setCount((count) => count + 1)
    }

  return (
    <div className='w-screen h-[200px] bg-pink-300 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-mono'>
            Form todo (child of todo page)
        </h1>
        <button className='bg-green-400 px-4 py-4 rounded text-black mt-4 hover:text-white hover:bg-green-500' 
            onClick={handleIncreaseCount} >
            Count + 1
        </button>
    </div>
  )
}

export default FormTodo