import { useState } from 'react'
import { useSearch } from '../../../features/home/context/SearchProvider';
import { AppSelect } from '../appSelect/appSelect';
import { AppSwiper2 } from '../carousel/appSwiper2';

export const Detalles = () => {

    const {detailTv ,seasonDetailTv, detailMovie, moviesRecomendation}= useSearch();

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded(!expanded);
    };
    const data = detailTv || detailMovie;

    const truncatedText = expanded ? data?.description : `${data?.description.slice(0, 325)}...`;

    const meses = {
      1: "enero",
      2: "febrero",
      3: "marzo",
      4: "abril",
      5: "mayo",
      6: "junio",
      7: "julio",
      8: "agosto",
      9: "septiembre",
      10: "octubre",
      11: "noviembre",
      12: "diciembre",
    };

    function Hours(minutos) {
      const horas = Math.floor(minutos / 60);
      const minutosRestantes = minutos % 60;

      return `${horas}h ${minutosRestantes}min`;
    }
  return (
    <>
    <section
    className="relative bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${data?.backdrop})` }}>
  <div
    className="absolute inset-0  bg-black/50   ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:justify-start lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-[#E4C49D] font-extrabold sm:text-5xl">
        {data?.title}
        <strong className="block font-extrabold text-rose-700">
        {data?.seasons ?  <AppSelect seasons={data?.seasons}/> :'' }
      </strong>
      </h1>


      <p className="mt-4 max-w-lg text-[#E4C49D] text-sm/relaxed lg:text-xl/relaxed">
        {truncatedText}
      </p>
      {!expanded && data?.description.length > 5 && (
        <button
          className="text-[#E4C49D] underline mt-2"
          onClick={handleToggle}
        >
          Ver Más
        </button>
      )}
      <div  className='py-3'>
              <span className=" text-[#E4C49D] opacity-70 text-md font-medium me-2 px-2.5 py-0.5  ">{seasonDetailTv?.airDate?.slice(0,4)}</span>
              {seasonDetailTv?.episodes?.length > 0 ? (
                <span className="text-[#E4C49D] opacity-70 text-md font-medium me-2 px-2.5 py-0.5 ">
                  {`${seasonDetailTv?.episodes?.length} episodios`}
                </span>
              ) : <div>
                  <span className=" text-[#E4C49D] opacity-70 text-md font-medium me-2 px-2.5 py-0.5 rounded ">{`${Hours(data?.time)}`} </span>
                   <span className="text-[#E4C49D] opacity-70 text-md font-medium me-2 px-2.5 py-0.5 ">{data?.airDate?.slice(0,4)}</span>
                   </div>}
            </div>
        <div className='w-full flex justify-center'>
          {data?.genero?.map((item)=>(
            <div key={item.id} className=''>
              <span className="bg-[#263237] text-[#E4C49D] text-xs font-medium me-2 px-2.5 py-0.5 rounded ">{item.name}</span>

            </div>
          ))}
        </div>
      <div className="mt-8 flex flex-wrap gap-4 text-center justify-end">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Ver
        </a>

        <a
          href="#"
          className="block w-full rounded bg-[#A3998C] px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Trailer
        </a>
      </div>
    </div>


  </div>
</section>
<article className='mt-10 min-h-screen'>
{seasonDetailTv ?
(<div className="gap-8  grid  w-full items-center justify-center min-h-[700px] h-full ">
{seasonDetailTv?.episodes?.map((item)=>(
<a href={`#${item.id}`}
 className="grid grid-cols-2 items-center bg-transparents  gap-7 rounded-lg shadow  lg:md:max-w-6xl "
 key={item.id}>
    <img className="object-center w-full rounded-t-lg h-full md:h-auto md:w-full md:rounded-none md:rounded-s-lg"
  src={item.poster && item.poster.endsWith('.jpg') ? item.poster : 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/01/krusty-payaso.jpg?tf=3840x'}
  alt={item.title}/>
    <div className="flex flex-col justify-between  leading-normal">
        <h5 className="mb-2 lg:text-lg font-bold tracking-tight text-[#E4C49D] ">T{item.seasonNumber} E{item?.episode}  {item?.title}</h5>
        <h6 className="mb-2 lg:text-lg tracking-tight text-[#E4C49D90] ">{item.date?.slice(8,10)} de {meses[item.date?.slice(5,7)]} de {item.date?.slice(0,4)} {item.tiempo}min</h6>
        <p className="mb-3 font-normal lg:text-md text-[#E4C49D95]  ">{item?.description}</p>
    </div>
</a>

  ))}
</div>):
(<>
    {moviesRecomendation?.total != 0 ? <AppSwiper2 title='Otros clientes también vieron' data={moviesRecomendation?.results}/>:null}
</>
  )}

</article>
</>
  )
}
// {/* {moviesRecomendation?.results.map((item)=>(
//   <a href="#" className="group relative block bg-black" key={item.id}>
//   <img
//     alt="Developer"
//     src={item.backdrop}
//     className="absolute inset-0 h-full w-full object-center opacity-75 transition-opacity group-hover:opacity-50"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p> */}

//     <p className="text-xl font-bold text-white sm:text-2xl">{item.title}</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           {item.description}
//         </p>
//       </div>
//     </div>
//   </div>  </a> ))} */}