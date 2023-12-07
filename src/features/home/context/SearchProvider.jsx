import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import useSWR from 'swr';
import { getDetailMovie, getDetailSeasonTv, getDetailTv, getSearchMovie } from '../services/movies.services';

const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [search,setSearch] = useState('');
  const [searchHistory,setSearchHistory]=useState({
    movie: [],
  });
  const { data: searchMovie, mutate } = useSWR(['getSearchMovie',search], () => getSearchMovie(search));

  const [serieId,setSerieId] = useState();
  const [seasonID,setSeasonID] =useState(1);

  const { data: detailTv } = useSWR(['getDetailTv', serieId], () => getDetailTv(serieId));
  // const {data: detailMovie } = useSWR(['getDetailMovie',serieId],()=> getDetailMovie(serieId))
// console.log(detailTv)

  const {data: seasonDetailTv} = useSWR(['getDetailSeasonTv',serieId, seasonID],()=> getDetailSeasonTv(serieId,seasonID))
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Array.isArray(searchMovie)) {
      setSearchHistory((prevSearchHistory) => {
        const newSearchHistory = { ...prevSearchHistory, movie: searchMovie };
        localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
        return newSearchHistory;
      });
      mutate();
    }

    setSearch('');
  };

  useEffect(() => {
    setSearch('');
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    setSearchHistory(storedHistory);

  }, []);
  
 
    return (
    <SearchContext.Provider value={{search, setSearch, searchMovie,handleSubmit,searchHistory,serieId,setSerieId,detailTv,seasonDetailTv,seasonID,setSeasonID}}>
      {children}
    </SearchContext.Provider>
  )
};

export const useSearch = () =>{
  return useContext(SearchContext);
};