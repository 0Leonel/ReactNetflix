import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import useSWR from 'swr';
import { getSearchMovie } from '../services/movies.services';

const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [search,setSearch] = useState('');
  const [searchHistory,setSearchHistory]=useState([]);
  const { data: searchMovie, mutate } = useSWR(['getSearchMovie',searchHistory || search], () => getSearchMovie(search));

  const handleSumit = (e) =>{
      e.preventDefault();
      setSearchHistory([...searchHistory,searchMovie])
      mutate();
  }

  useEffect(() => {
    setSearch('');
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory'));
    setSearchHistory(storedHistory);

  }, []);
  
  
  useEffect(()=>{
    setSearch('');
    localStorage.setItem('searchHistoy', JSON.stringify(searchHistory))
  },[searchHistory])


    return (
    <SearchContext.Provider value={{search, setSearch, searchMovie,handleSumit,searchHistory}}>
      {children}
    </SearchContext.Provider>
  )
};

export const useSearch = () =>{
  return useContext(SearchContext);
};