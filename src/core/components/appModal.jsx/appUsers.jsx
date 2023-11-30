import React, { useEffect, useState } from'react'
import axios from 'axios'
export const AppUsers = (props) => {
  
    const [data,setData] = useState([]);
    const [hover,setHover]= useState({
      hover1: false,
      hover2:false,
      hover3:false,
      hover4:false,
    }   )
    const fetchData = async () =>{
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res=>setData(res.data))
    }
    useEffect(()=>{
        fetchData();
    },[])


    return (
    <>
     <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none"
          onClick={props.onClick}
        >
          <div className="relative w-full  mx-auto max-w-xs">
            <div className=" bg-[#15191B] rounded-lg text-white">
            <div className="p-4 md:p-2 ">
                <h1 className="text-xl text-center font-bold font-amazon text-[#E4C49D] dark:text-gray-400 font-amazon">¿Quién está viendo?</h1>
                <ul className="my-4 space-y-3 ">
                    {data.results?.slice(0,4).map((item)=>(

                    <li key={item.id } >
                        <a href="#" className="flex items-center gap-6 justify-berween p-3 text-base font-bold text-[#E4C49D] rounded-lg  hover:bg-[#2D3539]  hover:shadow">
                           <img src={item.image} alt={item.name}  className='rounded-full opacity-80 object-conver border-none h-12 gap-6 hover:outline outline-none hover:opacity-100 hover:outline-[#E4C49D] shadow-2xl '/>
                           <h3>{item.name}</h3>
                        </a>
                    </li>
                    ))}
                    
                </ul>
                <div className='flex justify-center items-center '>

                        <button
                        onClick={props.onClose} 
                        className="inline-block rounded-lg bg-[#8C6161] px-5 py-3 text-sm font-medium text-white">
                            Logout</button>
                </div>
            </div>
            
            </div>
          </div>
        </div>
    </>

  )
}
