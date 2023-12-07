import { Link } from "react-router-dom";
import { useSearch } from "../../../features/home/context/SearchProvider";
import { useState } from "react";

export const AppSwiper = (props) => {
  const {data,title} = props
  const {serieId,setSerieId,detailTv}= useSearch();

  
  return (
    <>
    <div className=" ml-2 lg:ml-10 flex flex-wrap text-xl mt-4">
        <h1 className="text-white ttext-xl font-amazon">{title}</h1>
        <h2 className="text-red-500 ml-2 font-amazon">Ver más </h2>
    </div>
  
    <swiper-container
      effect='none'
      //  autoplay='{"autoplay":{"delay":1000}}'
      free-mode='true'
      space-between= "30px"
      loop='true'
      breakpoints='{"480":{"slidesPerView":1,"effect":"coverflow"},"768":{"slidesPerView":3},"1275":{"slidesPerView":4}}'
      grid-col="3"
      mousewheel-force-to-axis="true"
      center-slides= 'false'
      grab-cursor='true'
    >
    {data?.map((item) => (
      <swiper-slide key={item.id} >
         <div className='transition-transform transform translate-x-[-152.5px] grid' >
            <Link to={`detalles/${item.id}`} 
              onClick={()=>setSerieId(item.id)}
              className="hover:opacity-70 "
              >
                <h3 className="ml-2 text-[#E4C49D] font-amazon ">{item.title} {item.details}</h3>
                <img
                  alt={item.title}
                  src={item.poster}
                  className="h-full w-full objer object-center rounded "
                  />
              </Link>
                  </div>
            </swiper-slide>
            ))}
            

</swiper-container>
              </>
);
};