import React from 'react'
import { Link } from 'react-router-dom';

export const Fail404 = () => {
  return (
    <div className="grid h-screen px-4 bg-[#2B3337] place-content-center">
  <div className="text-center">
    <h1 className="font-black text-[#FFFC9C] text-9xl">404</h1>

    <p className="text-2xl font-bold tracking-tight text-[#C6AA88] sm:text-4xl">
      Uh-oh!
    </p>

    {/* <p className="mt-4 text-[#FFFC9C] text-xl">No se encontro la página</p> */}

    <Link
      to="/"
      className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#8C6161] rounded hover:bg-[#8C616180] focus:outline-none focus:ring"
    >
      Volver a Inicio
    </Link>
  </div>
</div>
  )};