import React from 'react'


function NewsLetter() {
  return (
    <div className='bg-[#795FA1] p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between'>
            <div className=' m-4  text-center '>
                <h1 className='font-bold text-white text-[20px] md:text-[40px]'>Want to learn Fast IT Skills</h1>
                <p className='text-white'>singup to kasb7 and stay up to date</p>
            </div>
            <div className='m-2 text-center '>
            <input type='text' className='p-3 m-2 text-grey rounded '></input>
            <button className='bg-black text-white rounded p-3'> Get started</button>
            <br>

            </br>

            <p className=' m-2 text-white'>We care about your Privacy <br></br> <span className='text-[red]'> Term&Cond</span></p>

            </div>

        </div>
    </div>
  )
}

export default NewsLetter