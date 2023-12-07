import { AppCarousel } from "../../../core/components/carousel/app_carousel";
import { AppSwiper } from "../../../core/components/carousel/app-swiper";
import { getPopularMovies, getTopRatedMovies, 
        getUpcomingMovies, getNowPlaying,
        getAiringTodayTv,getOnTheAirTv,
        getPopularTv,getTopRatedTv, getDetailTv} from "../services/movies.services";
import useSWR from "swr";
import { AppSpinner } from "../../../core/components/appSpinner/appSpinner";
import { useSearch } from "../context/SearchProvider";


const Home = () => {
  const {data: topRatedMovies, isLoading: topRatedMoviesIsLoading, error: topRatedMoviesError }= useSWR("getTopRatedMovies",getTopRatedMovies);
  const {data: popularMovies, isLoading: popularMoviesIsLoading, error: popularError} = useSWR("getPopularMovies",getPopularMovies);
  const {data: upComingMovies, isLoading: upComingMoviesIsLoading, error: upComingMoviesError } = useSWR("getUpcomingMovies",getUpcomingMovies);
  const {data: nowPlaying, isLoading: nowPlayingIsLoading , error: nowPlayingError} = useSWR("getNowplaying",getNowPlaying);
  const {data: airingTodayTv, isLoading: airingTodayTvIsLoading , error: airingTodayTvError} = useSWR("getAiringTodayTv",getAiringTodayTv);
  const {data: onTheAirTv, isLoading: onTheAirTvIsLoading , error: onTheAirTvError} = useSWR("getOnTheAirTv",getOnTheAirTv);
  const {data: popularTv, isLoading: popularTvIsLoading , error: popularTvError} = useSWR("getPopularTv",getPopularTv);
  const {data: topRatedTv, isLoading: topRatedTvIsLoading , error: getTopRatedTvError} = useSWR("getTopRatedTv",getTopRatedTv);
  


  return(
    <div  className="min-h-screen">
      
      {topRatedMoviesIsLoading ? <AppSpinner/> : <AppCarousel title="Top Peliculas" data={topRatedMovies}/>}
      {popularMoviesIsLoading ? <AppSpinner/> : <AppSwiper title="Popular Movies" data={popularMovies}/>}
      {upComingMoviesIsLoading ? <AppSpinner/> :<AppSwiper title="Movies" data={upComingMovies}/>}
      {nowPlayingIsLoading ? <AppSpinner/> : <AppSwiper title="Now Playing" data={nowPlaying}/>}
      {airingTodayTvIsLoading ? <AppSpinner/> : <AppSwiper title="En Streaming" data={airingTodayTv} />}
      {onTheAirTvIsLoading ? <AppSpinner/> : <AppSwiper title="En telivision" data={onTheAirTv}  />}
      {popularTvIsLoading ? <AppSpinner/> : <AppSwiper title="Popular Tv" data={popularTv}  />}
      {topRatedTvIsLoading ? <AppSpinner/> : <AppSwiper title="Top Tv" data={topRatedTv} />}
    </div>
    )
}


export default Home;



