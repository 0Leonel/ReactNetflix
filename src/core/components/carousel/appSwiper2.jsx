import { useEffect } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { useSearch } from "../../../features/home/context/SearchProvider";


export const AppSwiper2 = (props) => {
  const {data, title, tv} = props
  const {setSerieId, setMovieId}= useSearch();

  return (
    <>
    <div className=" ml-2 lg:ml-10 flex flex-wrap text-xl mt-4">
        <h1 className="text-white ttext-xl font-amazon">{title}</h1>
    </div>
  
    <swiper-container
       effect='none'
       //  autoplay='{"autoplay":{"delay":1000}}'
       pagination='true'
       loop='true'
       breakpoints='{"480":{"slidesPerView":1,"effect":"coverflow"},"768":{"slidesPerView":3},"1275":{"slidesPerView":4}}'
       mousewheel-force-to-axis="true"
       center-slides= 'true'
       grab-cursor='true'
       style={{
         "--swiper-pagination-color": "#E4C49D",
         "--swiper-pagination-bullet-inactive-color": "#999999",
         "--swiper-pagination-bullet-inactive-opacity": "1",
         "--swiper-pagination-bullet-size": "12px",
         "--swiper-pagination-bullet-horizontal-gap": "6px",
         "--swiper-pagination-bottom": "auto",
         "--swiper-pagination-top":"0px",
       }}
    >
    {data?.map((item) => (
      <swiper-slide key={item.id} >
         <div className=' transition-transform transform  p-6  grid group hover:scale-110 hover:delay-500  overflow-visible ' >
            <Link 
                className="hover:opacity-70 rounded-xl"
                onClick={()=> setMovieId(item.id)}
              >
                
                <img
                  alt={item.title}
                  src={item.backdrop && item.backdrop.endsWith('.jpg') ? item.backdrop : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjyDU5b2WOhB_dOJjI_d2Oj2CTtIzT5Kr4A&usqp=CAU'}
                  className="h-full w-full objer object-center rounded-xl  delay-700 group-hover:rounded-bl-none group-hover:rounded-br-none"
                  />
                
              </Link>
              <div className="bg-[#15191B] rounded-bl-xl rounded-br-xl  opacity-0 group-hover:opacity-100 delay-500 transition-opacity duration-300  ">
                    <h3 className=" text-[#E4C49D]  text-lg font-semibold pt-2 pl-4 font-amazon ">{item.title}</h3>
                    <div>
                   <span className="text-[#E4C49D] opacity-70 text-md font-medium me-2 px-4 py-0.5 ">{item?.airDate?.slice(0,4)}</span>
                   </div>
                    <p className="text-[#E4C49D] text-justify lg:text-md px-4 py-2 opacity-70 ">{item?.description.slice(0,155)}...</p>
                </div>
                </div>

            </swiper-slide>
            ))}
            

</swiper-container>
              </>
);
};