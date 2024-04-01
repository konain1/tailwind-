
import React, { useState } from 'react'
import { RiMenuAddFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
    const [toggle,setToggle] = useState(false)
  return (
    <div className='bg-[white]'>
        <div className=' px-10 flex py-5 items-center justify-between max-w-[1240px] mx-auto  bg-[white] ' > 

            <div className='text-3xl'>Kasb7blagpost</div>

            {toggle ?   <IoCloseSharp onClick={()=>setToggle(!toggle)} className='text-3xl md:hidden block '/>
            :    <RiMenuAddFill onClick={()=>setToggle(!toggle)} className='text-3xl md:hidden block ' />
             }
        
           

            <ul className='hidden md:flex gap-10 '>
                <li>Home </li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu */}

            <ul className={` duration-300 w-full h-screen md:hidden gap-10  fixed bg-[black] text-[white] top-[80px]  
            
            ${toggle ? ` left-[0]` :  `left-[-100%]`} 
            `}>
                <li className='p-3'>Home </li>
                <li className='p-3'>Services</li>
                <li className='p-3'>Contact</li>
            </ul>
        
        </div>


    </div>
  )
}

export default Header