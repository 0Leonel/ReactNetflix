import { Link } from "react-router-dom";
import { useSearch } from "../../../features/home/context/SearchProvider";
import { useEffect } from "react";

export const AppSwiper = (props) => {
  const {data, title, tv} = props
  const {setSerieId, setMovieId}= useSearch();

  useEffect(() => {
    if (tv) {
      setSerieId(null); 
    } else {
      setMovieId(null); 
    }
  }, [tv, setSerieId, setMovieId]);
  
  return (
    <>
    <div className=" ml-2 lg:ml-10 flex flex-wrap text-xl mt-4">
        <h1 className="text-white ttext-xl font-amazon">{title}</h1>
        <h2 className="text-red-500 ml-2 font-amazon">Ver más </h2>
    </div>
  
    <swiper-container
      effect='none'
      //  autoplay='{"autoplay":{"delay":1000}}'
      slides-per-view="auto"
      loop='true'
      breakpoints='{"480":{"slidesPerView":1,"effect":"coverflow"},"768":{"slidesPerView":3},"1275":{"slidesPerView":4}}'
      mousewheel-force-to-axis="true"
      center-slides= 'false'
      grab-cursor='true'
      overflow = 'visible'
      position = 'relative'
      > 
    {data?.map((item) => (
      <swiper-slide key={item.id} >
         <div className='  transition-transform transform translate-x-[-152.5px] p-6 pb0 grid group hover:scale-110  overflow-visible ' >
            <Link to={`detalles/${item.id}`} 
                onClick={tv ?()=> setMovieId(item.id) : ()=>setSerieId(item.id)}
                className="hover:opacity-70 "
              >
                <img
                  alt={item.title}
                  src={item.backdrop && item.backdrop.endsWith('.jpg') ? item.backdrop : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjyDU5b2WOhB_dOJjI_d2Oj2CTtIzT5Kr4A&usqp=CAU'}
                  className="  h-full w-full objer object-center rounded-xl shadow group-hover:rounded-bl-none group-hover:rounded-br-none "
                  />
              </Link>
              <div className="bg-[#15191B] rounded-bl-xl rounded-br-xl hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:block ">
                    <h3 className=" text-[#E4C49D]  text-lg font-semibold pt-4 pl-4 font-amazon ">{item.title}</h3>        
                    <p className="text-[#E4C49D] text-justify lg:text-md px-4 pb-2 opacity-70 ">{item?.description.slice(0,155)}...</p>
                </div>
                  </div>
            </swiper-slide>
            ))}
            

</swiper-container>
              </>
);
};