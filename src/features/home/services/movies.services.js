import {tmdb_api, tmdb_paths} from '../../../core/datasource/remote/tmdb/tmdb_api'
import {tdmbMoviesTvAdapter} from './adapters/tmdb.adapters'
import { Recomendations, movieRecomendation, tdmbDetailAdapter, tmdbEpisodeAdapter } from './adapters/tmdb.detail.adapter';

export const getPopularMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.popular);
    return tdmbMoviesTvAdapter(data);
  };

  export const getTopRatedMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.top_rated);

    return tdmbMoviesTvAdapter(data);
  };

  export const getUpcomingMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.upcoming);

    return tdmbMoviesTvAdapter(data);
  };

  export const getNowPlaying = async ()=>{
    const {data} = await tmdb_api.get(tmdb_paths.movies.now_playing);

    return tdmbMoviesTvAdapter(data);
  };


  export const getPopularTv = async ()=>{
    const {data} = await tmdb_api.get(tmdb_paths.tv.popular);

    return tdmbMoviesTvAdapter(data);
  };

  export const getTopRatedTv = async ()=>{
    const {data} = await tmdb_api.get(tmdb_paths.tv.top_rated);

    return tdmbMoviesTvAdapter(data);
  }

  export const getOnTheAirTv = async ()=>{
    const {data} = await tmdb_api.get(tmdb_paths.tv.on_the_air);

    return tdmbMoviesTvAdapter(data);
  }

  export const getAiringTodayTv = async () =>{
    const {data} = await tmdb_api.get(tmdb_paths.tv.airing_today)

    return tdmbMoviesTvAdapter(data);
  }

  export const getSearchMovie = async (searchTerm) => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.search, {
      params: { query: searchTerm },
    });
    return tdmbMoviesTvAdapter(data);
  };

  export const getDetailTv = async (seriesID) => {
    const { data } = await tmdb_api.get(`${tmdb_paths.tv.details}${seriesID}`)

    console.log(data);
    return tdmbDetailAdapter(data);
    
  };
  
  export const getDetailSeasonTv = async (seriesID,seasonNumber) => {
    const { data } = await tmdb_api.get(`${tmdb_paths.tv.details}${seriesID}${tmdb_paths.tv.season}${seasonNumber}`)

    return tmdbEpisodeAdapter(data);
    
  };
  
  export const getDetailMovie = async (moviesID) => {
    const { data } = await tmdb_api.get(`${tmdb_paths.movies.details}${moviesID}`)
    
    return tdmbDetailAdapter(data);
    
  };

  export const getRecomendationMovie = async (moviesId) =>{
    const {data} = await tmdb_api.get(`${tmdb_paths.movies.details}${moviesId}${tmdb_paths.movies.recomendation}`)
    console.log(data)

    return Recomendations(data);
  
  }