import React from 'react'
import { GoSearch } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Topnav = () => {
    const [query,setQuery] = useState('');


  return (
    <div className='w-full h-[10vh] relative'>
        <div className='h-[10vh] w-full flex items-center ml-[20%]'>
        <GoSearch className='text-3xl text-zinc-400 '/>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Whats on your mind' className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-white' />
        {
            query.length > 0 && <IoMdCloseCircleOutline onClick={()=>setQuery("")} className='text-3xl text-zinc-400 '/>
        }
        
        </div>
        
        <div className='w-[50%]  overflow-y-auto  max-h-[50vh] absolute left-[25%] bg-zinc-200 z-30'>
            <Link className='p-10 border-b-2 hover:text-black transition-all duration-200  hover:bg-zinc-300  border-zinc-100 flex items-center bg-zinc-100 text-zinc-600 text-lg font-semibold'>
                <img src="" alt="" />
                <span>Hleoo</span>
            </Link>
            <Link className='p-10 border-b-2 hover:text-black transition-all duration-200  hover:bg-zinc-300  border-zinc-100 flex items-center bg-zinc-100 text-zinc-600 text-lg font-semibold'>
                <img src="" alt="" />
                <span>Hleoo</span>
            </Link>
        </div>
    </div>
  )
}

export default Topnav