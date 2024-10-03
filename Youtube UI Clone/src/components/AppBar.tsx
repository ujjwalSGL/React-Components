import React from 'react'

export const AppBar = () => {
  return (
    <div className='flex justify-between '>
        <div className='flex'>
            <img className='pl-6' src="youtube.png" alt="" /> 
            <p className='pt-3 pl-1 text-xl'>Youtube</p>
        </div>
        <div>
            <input className='bg-black border rounded-2xl rounded-r-lg w-96 pt-2 mt-3 text-white placeholder-slate-600 text-center pb-2' placeholder='Search' type="text" />
            <button className='border rounded-2xl rounded-l-lg bg-slate-500 text-white p-2'>Search</button>
        </div>
        <div className='pt-3'>
            <button className='border rounded-xl p-2'>SignIn</button>
        </div>
    </div>
  )
}
