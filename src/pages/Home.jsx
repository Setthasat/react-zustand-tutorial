import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const location = useLocation()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-4xl font-bold">Home</div>
        <div className="text-2xl font-bold">Current Path: {location.pathname}</div>
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => navigate('/blog')}>Go to Blog</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => navigate('/todo')}>Go to Todo</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => navigate('/market')}>Go to Market</button>
        </div>
    </div>
    

    
  )
}

export default Home