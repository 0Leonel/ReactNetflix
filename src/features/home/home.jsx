import { AppSwiper } from "./components/app-swiper";
import { AppCarousel } from "./components/app_carousel";
import { AppFooter } from "./components/app_footer";
import { AppNavbar } from "./components/app_navbar";

const Home = () => {
  


  return (
    <div className="bg-[#2B3337] ">
      <AppNavbar/>
    <div className=" lg:ml-10">

        <AppCarousel/>

        <div className="py-12">

        <AppSwiper  titulo= 'Peliculas' />
        <AppSwiper titulo= 'Comedia' />
        <AppSwiper  titulo= 'Accion'/>
        <AppSwiper  titulo= 'Terror'/>
        <AppSwiper  titulo= 'Aventura'/>
        <AppSwiper  titulo= 'Thriler'/>
        <AppSwiper  titulo= 'Peliculas que te recomendamos'/>
        <AppSwiper  titulo= 'Películas galardonadas'/>
        
        
        
        </div>

        <AppFooter/>
    </div>
     
    </div>
  )
}


export default Home;



