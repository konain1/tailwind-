import React from 'react'
import { ReactTyped } from "react-typed";
function Banner() {
  return (
    <div className='bg-[green] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center my-[100px]   ' >
            <h3 className='font-bold text-xl md:text-2xl'>learn with us</h3>
            <h1 className='text-[white] font-bold text-[40px] md:text-[60px]'>Grow with us</h1>
            <div className='font-bold text-[25px] md:text-[50px]'>
           <span style={{color:'white'}}>Learn  </span>        <ReactTyped strings={["React " , "Nodejs" , "Mongodb" , "Next.js" ,"React-Native"]} typeSpeed={80} backSpeed={50} loop />


            </div>
            <div>
            <button className='bg-black text-white rounded p-3'> Get started</button>

            </div>


        </div>

    </div>
  )
}

export default Banner