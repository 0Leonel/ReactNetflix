import  { useEffect, useState } from 'react'
import axios from 'axios'

export const AppEstilo = () => {
const [data,setData]=useState([]);
const fetchData = async () =>{
        axios.get(import.meta.env.VITE_VERCEL_USERS_API)
        .then((res)=>(setData(res.data)));
}

useEffect(()=>{
fetchData();

},[])

    return (
    <div className="justify-center  items-center overflow-x-auto overflow-y-auto  fixed inset-0 z-10 mr-1 mb-1 transition-all duration-150">
    <div className="relative max-full" >

        <div className="grid lg:gap-8 grid-cols-[repeat(auto-fill,minmax(100px,100px))] place-content-centeritems-start flex-wrap w-full outline-none  rounded-t">

    {data?.map((item) => (
        <div key={item.id}  className="opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out ">
            <h1 className='text-2xl lg:text-4xl text-[#E3C69D] ' >{item.username}</h1>
            <h4 className='text-xl lg:text-3xl text-[#E3C69D] '>{item.password}</h4>

        </div>
            ))}
        </div>
    </div>
    </div>
  )
}
