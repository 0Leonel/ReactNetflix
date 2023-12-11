import { AppCarousel } from "../../../core/components/carousel/app_carousel";
import { AppSwiper } from "../../../core/components/carousel/app-swiper";
import { getPopularMovies, getTopRatedMovies, 
        getUpcomingMovies, getNowPlaying,
        getAiringTodayTv,getOnTheAirTv,
        getPopularTv,getTopRatedTv, getDetailTv, getDetailMovie} from "../services/movies.services";
import useSWR from "swr";
import { AppSpinner } from "../../../core/components/appSpinner/appSpinner";
import { useState } from "react";


const Home = () => {
  const {data: topRatedMovies, isLoading: topRatedMoviesIsLoading, error: topRatedMoviesError }= useSWR("getTopRatedMovies",getTopRatedMovies);
  const {data: popularMovies, isLoading: popularMoviesIsLoading, error: popularError} = useSWR("getPopularMovies",getPopularMovies);
  const {data: upComingMovies, isLoading: upComingMoviesIsLoading, error: upComingMoviesError } = useSWR("getUpcomingMovies",getUpcomingMovies);
  const {data: nowPlaying, isLoading: nowPlayingIsLoading , error: nowPlayingError} = useSWR("getNowplaying",getNowPlaying);
  const {data: airingTodayTv, isLoading: airingTodayTvIsLoading , error: airingTodayTvError} = useSWR("getAiringTodayTv",getAiringTodayTv);
  const {data: onTheAirTv, isLoading: onTheAirTvIsLoading , error: onTheAirTvError} = useSWR("getOnTheAirTv",getOnTheAirTv);
  const {data: popularTv, isLoading: popularTvIsLoading , error: popularTvError} = useSWR("getPopularTv",getPopularTv);
  const {data: topRatedTv, isLoading: topRatedTvIsLoading , error: getTopRatedTvError} = useSWR("getTopRatedTv",getTopRatedTv);
  
  const [tv,setTv] = useState({
    option0: true,
    option1: true,
    option2: true,
    option3: true,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
  });


  return(
    <div  className="min-h-screen">
      
      {topRatedMoviesIsLoading ? <AppSpinner/> : <AppCarousel title="Top Peliculas" data={topRatedMovies} tv={tv.option0} />}
      {popularMoviesIsLoading ? <AppSpinner/> : <AppSwiper title="Popular Movies" data={popularMovies} tv={tv.option1} />}
      {upComingMoviesIsLoading ? <AppSpinner/> :<AppSwiper title="Movies" data={upComingMovies} tv={tv.option2} />}
      {nowPlayingIsLoading ? <AppSpinner/> : <AppSwiper title="Now Playing" data={nowPlaying} tv={tv.option3} />}
      {airingTodayTvIsLoading ? <AppSpinner/> : <AppSwiper title="En Streaming" data={airingTodayTv} tv={tv.option4} />}
      {onTheAirTvIsLoading ? <AppSpinner/> : <AppSwiper title="En telivision" data={onTheAirTv}  tv={tv.option5} />}
      {popularTvIsLoading ? <AppSpinner/> : <AppSwiper title="Popular Tv" data={popularTv} tv={tv.option6}  />}
      {topRatedTvIsLoading ? <AppSpinner/> : <AppSwiper title="Top Tv" data={topRatedTv} tv={tv.option7} />}
    </div>
    )
}


export default Home;



