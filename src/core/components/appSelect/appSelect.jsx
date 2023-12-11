import React from 'react'
import { useSearch } from '../../../features/home/context/SearchProvider'

export const AppSelect = (props) => {
    const {seasons} = props

    const {seasonID,setSeasonID,seasonDetailTv}=useSearch();
    // console.log(seasons)
      return (
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full p-2 max-w-fit rounded-sm bg-[#263237] text-[#E4C49D] text-sm lg:text-lg"
            onChange={(e)=>setSeasonID(e.target.value)}
          >
            {seasons?.map((item) => (
              <option key={item.id} value={item.seasonNumber}            
              selected={item.seasonNumber === 0 ? false : item.seasonNumber === 1}
              >
            {item.seasonNumber === 0 ? 'Especiales' : `Temporada ${item.seasonNumber}`}
              </option>
            ))}
          </select>
        </div>
      );
    };
