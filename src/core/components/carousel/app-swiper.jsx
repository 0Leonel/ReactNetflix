import { Link } from "react-router-dom";

export const AppSwiper = (props) => {
  const data = props.data;

  return (
    <>
    <div className=" ml-2 lg:ml-10 flex flex-wrap text-xl mt-4">
        <h1 className="text-white ttext-xl font-amazon">{props.title}</h1>
        <h2 className="text-red-500 ml-2 font-amazon">Ver más </h2>
    </div>
    
    <swiper-container
      effect='none'
      // autoplay='{"autoplay":{"delay":1000}}'
      free-mode='true'
      space-between= "30px"
      loop='true'
      opacity='0'
      breakpoints='{"480":{"slidesPerView":1,"effect":"coverflow"},"768":{"slidesPerView":3},"1275":{"slidesPerView":4}}'
      grid-col="3"
      mousewheel-force-to-axis="true"
      center-slides= 'false'
      // grab-cursor='true'
    >
    {data?.map((item) => (
      <swiper-slide key={item.id}>
        <div className='transition-transform transform translate-x-[-152.5px]'>
            <Link to={`${item.id}`} >
                <h3 className="ml-2 text-[#E4C49D] font-amazon">{item.title} {item.details}</h3>
                <img
                  alt={item.title}
                  src={item.poster} 
                  className="h-full w-full object-cover rounded "
                  />
              </Link>
                  </div>
            </swiper-slide>
            ))}
  
</swiper-container>
              </>
);
};