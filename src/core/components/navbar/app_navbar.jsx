import useSWR from 'swr';
import * as index from './index'
import { getSearchMovie } from '../../../features/home/services/movies.services';

const { useAuth, useState, Dialog, Bars3Icon, XMarkIcon,
  filmIcon, Avatar, homeIcon, peliculasIcon, seriesIcon,
  categoriasIcon, miespacioIcon, configuracionIcon, descargasIcon,
  buscarIcon, AppInput, Link, AppUsers } = index;

export const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { logout, isLoggedIn } = useAuth();
  const [showModal,setShowModal]= useState({
    show1:false,
    show2: false,
  });

  const navigation = [
    { icon: buscarIcon,name: 'Buscar', href: '/search',current:true},
    { icon: homeIcon, name: 'Inicio', href: '/', current: false },
    { icon: peliculasIcon,name: 'Películas', href: '/peliculas', current: false },
    { icon: seriesIcon, name: 'Series',href: '/series', current: false },
    { icon: categoriasIcon, name:'Categorías',href: '/categorias', current: false },
    { icon: miespacioIcon, name: 'Mi espacio', href: '/mi-espacio', current: false},
    { icon: configuracionIcon, name: 'Configuración', href: '/configuracion', current: false},
    { icon: descargasIcon, name: 'Descargas' ,href: '/descargas', current: false}
  ]
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between lg:justify-end  p-6 lg:px-8" aria-label="Global">

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#FFFC9C]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={filmIcon}
                alt=""
              />
            </a>
          </div>


<div className="hidden lg:flex   fixed inset-y-0 left-0 z-10 overflow-y-auto bg-[#232C32] py-6">
    <div className="flex flex-col">
        <div className="flow-root">
            <div className="space-y-2 py-6">
                {navigation.map((item) => (
                    <div key={item.name} className="group">
                        <Link
                            to={item.href}
                            onClick={item.current ? ()=> setShowModal({...showModal, show1: true}):null}
                            className=" block rounded-lg  py-2 text-base font-semibold leading-7 text-[#E4C49D] hover:bg-[#2B3337]  hover:pr-3 focus:bg-[#3A4852] relative"
                         >
                            <div className="flex items-center ">
                                <img
                                    className="w-[2.5rem] "
                                    id={`#${item.name}`}
                                    src={item.icon}
                                    alt={item.name}
                                />
                                <p className="hidden ml-2  group-hover:block font-amazon">{item.name}</p>
                            </div>
                          </Link>
                    </div>))}
            </div>
        </div>
        <div className="flex flex-row items-center justify-start mt-auto py-8 group hover:pr-2" >
            <a className="hover:text-[#E4C49D] justify-end text-[#C6AA88] flex flex-row items-center" onClick={()=>setShowModal({...showModal,show2:true})}>
                <Avatar
                    img="https://www.w3schools.com/howto/img_avatar.png"
                    className="border-4 border-transparent hover:border-[#FFF] hover:border-collapse hover:border-4 hover:rounded-full"
                    alt="avatar of Jese"
                    rounded
                />
            <p className="hidden ml-2 group-hover:block text-[#C6AA88]">User</p>
            </a>
        </div>

    </div>
    {/* {showModal.show1 ? (
    <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none mr-1 mb-1 transition-all duration-150" onClick={()=>setShowModal({...showModal,show1: false})}>
      <div className="relative w-auto my-6 mx-auto max-w-3xl" >
        <div className="border-0 rounded-lg  relative flex flex-col w-full bg-[#2B3337] " onClick={(e)=>e.stopPropagation()}>
          <div className="flex items-start justify-between p-5 outline-none  rounded-t">
              <AppInput />
          </div>
           </div>
        </div>
     </div>):null} */}


     {showModal.show2 ? (
      <AppUsers onClick={()=>setShowModal({...showModal,show2: false})} onClose={logout}/>
     ):null}

</div>

        </nav>
        <Dialog  className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-42 overflow-y-auto bg-[#232C32]  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10">
            <div className="flex items-center justify-end">

              <button
                type="button"
                className="-m-2.5  rounded-md p-2.5 text-[#8C7860]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                    key={item.name}
                    to={item.href}
                    onClick={item.current ? ()=>setShowModal({...showModal,show1:true}):null}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#E4C49D] hover:bg-[#2B3337]"
                    >
                    <div className="flex items-center">
                                <img
                                    className="w-[2.5rem]"
                                    src={item.icon}
                                    alt={item.name}
                                />
                                <p className=" ml-2 ">{item.name}</p>
                            </div>
                    </Link>))}
                </div>
                <div className="flex  mt-auto py-8 group hover:pr-2" >
            <a className="hover:text-[#E4C49D] justify-end text-[#C6AA88] flex items-center "
            onClick={()=>setShowModal({...showModal,show2:true})}>
                <Avatar
                    img="https://www.w3schools.com/howto/img_avatar.png"
                    className="border-4 border-transparent hover:border-[#FFF] hover:border-collapse hover:border-4 hover:rounded-full"
                    alt="avatar of Jese"
                    rounded
                />
            <p className=" ml-2 text-[#C6AA88] font-amazon">User</p>
            </a>
        </div>
              </div>
            </div>
            {/* {showModal.show1 ? (
            <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none mr-1 mb-1 transition-all duration-150" onClick={()=>setShowModal({...showModal,show1:false})}>
              <div className="relative w-auto my-6 mx-auto max-w-3xl" >
                <div className="border-0 rounded-lg  relative flex flex-col w-full bg-[#2B3337] " onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-start justify-between p-3 outline-none rounded-t">
                  <AppInput/>
                  </div>
                  </div>
                </div>
                </div>):null} */}

                {showModal.show2 ? (
      <AppUsers onClick={()=>setShowModal({...showModal,show2: false})} onClose={logout}/>
     ):null}
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}
