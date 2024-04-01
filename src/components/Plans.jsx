import React from 'react'

function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-500'>
                <h1 className='text-[20px] font-bold text-center py-3'>Web Development</h1>
                
            </div>
            <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-500'>two</div>
            <div className='shadow-xl h-[500px] my-4 hover:scale-105 duration-500'>three</div>

        </div>
    </div>
  )
}

export default Plans