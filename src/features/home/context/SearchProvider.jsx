import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import useSWR from 'swr';
import { getDetailMovie, getDetailSeasonTv, getDetailTv, getRecomendationMovie, getSearchMovie } from '../services/movies.services';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [searchHistory, setSearchHistory] = useState({
    movie: [],
  });
  const { data: searchMovie, mutate: searchMovieM } = useSWR(['getSearchMovie', search], () => getSearchMovie(search));

  const [serieId, setSerieId] = useState(() => JSON.parse(localStorage.getItem('serieId')) || null);
  const [seasonID, setSeasonID] = useState(1);

  const { data: detailTv} = useSWR(['getDetailTv', serieId], () => getDetailTv(serieId));

  const [movieId, setMovieId] = useState(() => JSON.parse(localStorage.getItem('movieId')) || null);
  const { data: detailMovie  } = useSWR(['getDetailMovie', movieId], () => getDetailMovie(movieId));

  const { data: seasonDetailTv } = useSWR(['getDetailSeasonTv', serieId, seasonID], () => getDetailSeasonTv(serieId, seasonID));

  const {data: moviesRecomendation } = useSWR(['getRecomendationMovie',movieId],()=>getRecomendationMovie(movieId) )


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Array.isArray(searchMovie)) {
      setSearchHistory((prevSearchHistory) => {
        const newSearchHistory = { ...prevSearchHistory, movie: searchMovie };
        localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
        return newSearchHistory;
      });
      searchMovieM();
    }

    setSearch('');
  };

  useEffect(() => {
    localStorage.setItem('serieId', JSON.stringify(serieId));
  }, [serieId]);

  useEffect(() => {
    setSearch('');
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    setSearchHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem('movieId', JSON.stringify(movieId));
  }, [movieId]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchMovie,
        handleSubmit,
        searchHistory,
        serieId,
        setSerieId,
        detailTv,
        seasonDetailTv,
        seasonID,
        setSeasonID,
        setMovieId,
        detailMovie,
        moviesRecomendation,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
