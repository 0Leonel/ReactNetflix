import { tmdb_paths } from "../../../../core/datasource/remote/tmdb/tmdb_api";

export const tmdbSeasonAdapter = (season) => {
  return {
    id: season.id,
    title: season.name || season.title,
    description: season.overview,
    airDate: season.air_date,
    episodeCount: season.episode_count,
    poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${season.poster_path}`,
    seasonNumber: season.season_number,
    voteAverage: season.vote_average,
  };
};
export const tdmbDetailAdapter = (item) => {
  return {
    id: item?.id,
    title: item?.original_title || item?.name,
    airDate: item?.air_date || item?.release_date,
    time: item?.runtime,
    poster: `${tmdb_paths.images?.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`,
    backdrop: `${tmdb_paths.images?.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
    description: item?.overview,
    releaseDate: item?.release_date || item?.first_air_date,
    rating: item?.vote_average,
    votes: item?.vote_count,
    video: item?.video,
    seasons: item?.seasons?.map(tmdbSeasonAdapter),
    creditos: item?.created_by,
    genero: item.genres,
  };
};
export const tmdbEpisodeAdapter = (item) => {
  return {
    airDate: item.air_date,
    episodes: item.episodes.map(datosDelEpisodio),
    id: item.id,
    name: item.name,
    description: item.overview,
    poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`,
    seasonNumber: item.season_number,
    voteAverage: item.vote_average,
  };
};


export const datosDelEpisodio = (item) => {
  return{
    date: item.air_date,
    episode:  item.episode_number,
    // episode_type: "standard",
    id: item.id,
    title: item.name,
    description: item.overview,
    tiempo: item.runtime,
    seasonNumber: item.season_number,
    // show_id: 94605,
    poster: `${tmdb_paths.images.poster.url}${tmdb_paths.images.poster.sizes.original}${item.still_path}`,
    voteAverage: item.vote_average,
    voteCount: item.vote_count,
  }
};

export const movieRecomendation = (item) =>{
  return{
      id:item.id,
      origin: item.original_title,
      description: item.overview,
      popularit: item.popularity,
      poster: `${tmdb_paths.images?.poster.url}${tmdb_paths.images.poster.sizes.original}${item.poster_path}`,
      backdrop: `${tmdb_paths.images?.backdrop.url}${tmdb_paths.images.backdrop.sizes.original}${item.backdrop_path}`,
      airDate:item.release_date,
      title: item.title,
      video: item.video,
      votos: item.vote_average,
      votosCount: item.vote_count,

  }

}
export const Recomendations = (item) =>{
  return{
    pag:item.page,
    results: item?.results?.map(movieRecomendation), 
    pages: item.total_pages,
    total: item.total_results,
  }
}