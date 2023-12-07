import buscarIcon from '../../../assets/Navbar/buscar.svg';
import { useSearch } from '../../../features/home/context/SearchProvider';

const AppInput = (props) => {
  const { handleSubmit, search, setSearch } = useSearch();

  return (
    <div className='w-full relative'>
      <form className='relative z-50 flex items-center gap-2 group' onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder = "Search"
          className=" pl-8 focus:ring-[#E4C49D] w-11/12 focus:ring-2 focus:border-1 group-focus:bg-[#596A72] focus:outline-none  focus:border-[#E4C49D]  bg-[#596A72] rounded-lg h-12 text-xl text-[#E4C49D] ring-[#E4C49D] hover:ring-2"
          {...props}
          type='text'
        />
        <button className='focus:bg-[#2D363A] w-[50px] h-12 rounded-lg hover:outline outline-[#E4C49D] bg-[#495056]'>
          <img
            src={buscarIcon}
            className='absolute inset-y-0 right-0 p-2 lg:pl-3 h-full '
            alt='Buscar'
          />
        </button>
          <img
            src={buscarIcon}
            className='absolute inset-y-0 left-0 p-[.75rem_0_.75rem_.5rem]   h-full transition-opacity opacity-100 group-focus-within:opacity-0'
            alt='Buscar'
          />
      </form>
    </div>
  );
};

export default AppInput;
