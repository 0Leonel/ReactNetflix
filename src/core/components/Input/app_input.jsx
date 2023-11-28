import { useState } from 'react';
import buscarIcon from '../../../assets/Navbar/buscar.svg';
import { Link } from 'react-router-dom';
import { useSearch } from '../../../features/home/context/SearchProvider';

const AppInput = ( ...props ) => {
  const [opacity,setOpacity]= useState(true);
  const { handleSumit,search,setSearch} = useSearch();
    
  return (
    <div className='w-full relative'>
      <form className='relative  z-50 flex items-center gap-2' onSubmit={handleSumit}>
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onClick={()=>setOpacity(false)}
        className="pl-8 focus:ring-[#E4C49D] w-11/12 focus:ring-2 focus:border-1 focus:outline-none focus:border-[#E4C49D]  bg-[#596A72] rounded-lg h-12 text-xl text-[#E4C49D] ring-[#E4C49D] hover:ring-2 "
        {...props}
          type='text'
        />
        <button
          className='focus:bg-[#2D363A] w-[50px] h-12 rounded-lg hover:outline outline-[#E4C49D] bg-[#495056]'><img
            src={buscarIcon} 
            className='absolute inset-y-0 rigth-0 p-2 lg:pl-3 h-full ' onClick={(e)=>{e.stopPropagation() }}
            alt='Buscar'
          />
          </button>
        {opacity ? <img
          src={buscarIcon}
          className='absolute inset-y-0 left-0 p-2 lg:pl-1 lg:pt-1 h-full  transition-opacity focus:opacity-0' onClick={(e)=>{e.stopPropagation() }}
          alt='Buscar'
        /> : null}
      </form>
    </div>
  );
};

export default AppInput;
