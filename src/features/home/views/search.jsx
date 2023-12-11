import { AppInput } from "../../../core/components/navbar";
import { useSearch } from "../context/SearchProvider"

export const AppSearch = () => {
    const {searchHistory}=useSearch();
    return (
        <div className="min-h-screen">
              <div className=" relative  py-6 mx-auto w-8/12 lg:max-w-2xl" >
                <div className="border-0 rounded-lg absolute flex flex-col w-full bg-[#2B3337] ">
                  <AppInput />
                  </div>
                  </div>

            <div className="pt-16 grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-12">
                {searchHistory?.movie?.map((item,index)=>(
                    <div key={`${item.id}_${index}`} >
                        <h3 className="ml-2 text-[#E4C49D] font-amazon">{item.title} </h3>
                        <img
                        alt={item.title}
                        src={item.poster}
                        className="h-full w-full object-cover rounded "
                        />
                </div>
                ))}
            </div>
        </div>
  )
}
