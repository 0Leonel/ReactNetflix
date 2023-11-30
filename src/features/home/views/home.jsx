import { AppCarousel } from "../../../core/components/carousel/app_carousel";
import { AppSwiper } from "../../../core/components/carousel/app-swiper";
import { getPopularMovies, getTopRatedMovies, 
        getUpcomingMovies, getNowPlaying,
        getAiringTodayTv,getOnTheAirTv,
        getPopularTv,getTopRatedTv, getSearchMovie} from "../services/movies.services";
import useSWR from "swr";


const Home = () => {
  const{data: popularMovies, isLoading: popularMoviesIsLoading, error: popularError} = useSWR("getPopularMovies",getPopularMovies);
  const {data: topRatedMovies, isLoading: topRatedMoviesIsLoading, error: topRatedMoviesError }= useSWR("getTopRatedMovies",getTopRatedMovies);
  const {data: upComingMovies, isLoading: upComingMoviesIsLoading, error: upComingMoviesError } = useSWR("getUpcomingMovies",getUpcomingMovies);
  const {data: nowPlaying} = useSWR("getNowplaying",getNowPlaying);
  const {data: airingTodayTv} = useSWR("getAiringTodayTv",getAiringTodayTv);
  const {data: onTheAirTv} = useSWR("getOnTheAirTv",getOnTheAirTv);
  const {data: popularTV} = useSWR("getPopularTv",getPopularTv);
  const {data: topRatedTv} = useSWR("getTopRatedTv",getTopRatedTv);





  return(
    <div >
      
      <AppCarousel title="Top Peliculas" data={topRatedMovies}/>
      <AppSwiper title="Movies" data={upComingMovies}/>
      <AppSwiper title="Popular Movies" data={popularMovies}/>
      <AppSwiper title="Now Playing" data={nowPlaying}/>
      <AppSwiper title="En Streaming" data={airingTodayTv}/>
      <AppSwiper title="En telivision" data={onTheAirTv}/>
      <AppSwiper title="Popular Tv" data={popularTV}/>
      <AppSwiper title="Top Tv" data={topRatedTv}/>
    </div>
    )
}


export default Home;



