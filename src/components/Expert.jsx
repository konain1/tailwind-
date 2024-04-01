import React from 'react'

function Expert() {
  return (
    <div className='my-4 max-2-[1240px] bg-[lightblue] mx-auto md:grid grid-cols-3 p-4 border border-black'>
    
    <div className='col-span-1 my-3 mx-2' >
        <img src='https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D' />
    </div>
    <div className=' col-span-2  my-3 mx-2 flex flex-col justify-center my-3'>
        <h1 className=' font-bold  my-3'> HP laptops provide a well-rounded combination of performance</h1>
        <p className='font-bold my-3'>Durability: HP laptops are known for their solid build quality, making them reliable companions for everyday use.</p>
        <button className='w-[30%] bg-black text-white rounded p-3'> Get started</button>
    </div>

    </div>
  )
}

export default Expert