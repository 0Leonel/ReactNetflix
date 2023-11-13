import { useAuth } from "../../../core/auth/hooks/useAuth";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import filmIcon from "/public/documental.png"
import { Avatar } from 'flowbite-react';
import homeIcon from '../../../assets/Navbar/home.svg'
import peliculasIcon from '../../../assets/Navbar/peliculas.svg'
import seriesIcon from '../../../assets/Navbar/series.svg'
import categoriasIcon from '../../../assets/Navbar/categoria.svg'
import miespacioIcon from '../../../assets/Navbar/miespacio.svg'
import configuracionIcon from '../../../assets/Navbar/configuracion.svg'
import descargasIcon from '../../../assets/Navbar/descargas.svg'
import buscarIcon from '../../../assets/Navbar/buscar.svg'


export const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { logout, isLoggedIn } = useAuth();

  const navigation = [
    { icon: buscarIcon,name: 'Buscar', href: '#'},
    { icon: homeIcon, name: 'Inicio', href: '#' },
    { icon: peliculasIcon,name: 'Películas', href: '#' },
    { icon: seriesIcon, name: 'Series',href: '#' },
    { icon: categoriasIcon, name:'Categorías',href: '#' },
    { icon: miespacioIcon, name: 'Mi espacio', href: '#'},
    { icon: configuracionIcon, name: 'Configuración', href: '#'},
    { icon: descargasIcon, name: 'Descargas' ,href: '#'}
  ]
  console.log(isLoggedIn);
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
          {/* <div className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900"
                                onClick={logout}
                                >
              Logout <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}

<div className="hidden lg:flex  fixed inset-y-0 left-0 z-10 overflow-y-auto bg-[#232C32] py-6">
    <div className="flex flex-col">
        <div className="flow-root">
            <div className="space-y-2 py-6">
                {navigation.map((item) => (
                    <div key={item.name} className="group">
                        <a
                            href={item.href}
                            className=" block rounded-lg  py-2 text-base font-semibold leading-7 text-[#E4C49D] hover:bg-[#2B3337] relative"
                        >
                            <div className="flex items-center">
                                <img
                                    className="w-[2.5rem]"
                                    src={item.icon}
                                    alt={item.name}
                                />
                                <p className="hidden ml-2 group-hover:block">{item.name}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col items-center mt-auto py-8">
            <a className="hover:text-[#E4C49D] justify-end text-[#C6AA88]" onClick={logout}>
                <Avatar
                    img="https://www.w3schools.com/howto/img_avatar.png"
                    className="border-4 border-transparent hover:border-[#FFF] hover:border-collapse  hover:border-4  hover:rounded-full"
                    alt="avatar of Jese"
                    rounded
                />
            </a>
        </div>
    </div>
</div>

        </nav>
        <Dialog  className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-[#232C32]  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10">
            <div className="flex items-center justify-end">
              {/* <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={filmIcon}
                  alt=""
                />
              </a> */}
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
                    <a
                    key={item.name}
                    href={item.href}
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
                    
                </a>
                  ))}
                </div>
                <div className="py-6">
                <a className="flex   hover:text-[#E4C49D] text-[#C6AA88] py-2  "
                onClick={logout}>
                  <Avatar img="https://www.w3schools.com/howto/img_avatar.png"  className="m-4 hover:border-4 hover:rounded-full" alt="avatar of Jese" rounded />
                    
                  </a>
                  {/* <a
                  onClick={logout}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#C6AA88] hover:bg-gray-50"
                  >
                    Logout
                  </a> */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}
