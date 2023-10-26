import NetflixNav from './assets/Netflix.svg'
import Comenzar from './assets/Comenzar.svg'
import './App.css'

export default function Example() {

  return (
    <div className="bg-black ">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto "
                    src={NetflixNav}
                    alt="Your Company"
                  />
                </div>
         
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
                href="#"
                className="rounded-md bg-[#E50914] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C11119] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                iniciar sesión
              </a>          
            </div>
        </nav>
        
      </header>

      <div className="relative isolate px-6 opacity-80 bg-gradient-to-t from-black via-transparent to-black bg-opacity-80 lg:px-8">
        <div
          className="absolute inset-x-0  -z-10 w-full h-full transform-gpu overflow-hidden   "
          aria-hidden="true"
        >
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/9ce0a71b-a6d4-491f-8da2-ce81f3d00072/AR-es-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
          alt="" 
          className='w-full h-full transform scale-y-125 translate-y-[-10%]'
          />

        </div>
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl w-full font-bold tracking-tight text-white ">
              Películas y series ilimitadas y mucho más
            </h1>
            <p className="mt-6 text-2xl leading-8 text-white">
            Disfruta donde quieras. Cancela cuando quieras.
            </p>
            <h3 className="mt-6 text-lg leading-2 text-white">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.            </h3>
            <div className="mt-12 flex text-2xl items-center justify-center w-full ">
              <button
                className="rounded px-3 py-6 q bg-[#E50914] text-center font-medium text-white shadow-sm hover:bg-[#C11119] flex items-center"
              >
                Comenzar 
                
                <img src={Comenzar} alt="" className='ml-2'/>
              </button>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
