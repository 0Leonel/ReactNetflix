import { Link } from "react-router-dom";


export const AppSwiper2 = (props) => {
  const {data, title, tv} = props

  return (
    <>
    <div className=" ml-2 lg:ml-10 flex flex-wrap text-xl mt-4">
        <h1 className="text-white ttext-xl font-amazon">{title}</h1>
    </div>
  
    <swiper-container
      effect='none'
      space-between= "30px"
      loop='true'
      breakpoints='{"480":{"slidesPerView":1,"effect":"coverflow"},"768":{"slidesPerView":3},"1275":{"slidesPerView":4}}'
      mousewheel-force-to-axis="true"
      center-slides= 'false'
      grab-cursor='true'
      slides-per-view="auto"
    >
    {data?.map((item) => (
      <swiper-slide key={item.id} >
         <div className='transition-transform transform translate-x-[-152.5px]  rounded-xl grid group' >
            <Link to={`detalles/${item.id}`} 
                className="hover:opacity-70 rounded-xl"
              >
                <img
                  alt={item.title}
                  src={item.backdrop && item.backdrop.endsWith('.jpg') ? item.backdrop : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjyDU5b2WOhB_dOJjI_d2Oj2CTtIzT5Kr4A&usqp=CAU'}
                  className="h-full w-full objer object-center rounded-xl  group-hover:rounded-bl-none group-hover:rounded-br-none"
                  />
              </Link>
                <div className=" bg-[#15191B] rounded-bl-xl rounded-br-xl opacity-0 group-hover:opacity-100">
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