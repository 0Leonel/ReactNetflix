import { Typography } from "@material-tailwind/react";
import filmIcon from '../../../../public/documental.png'
export const AppFooter=()=> {
  return (
    <footer className="w-full bg-[#2B3337] p-8">
      <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center ">
        <img src={filmIcon} alt="logo-ct" className="w-10" />
        <ul className="grid grid-cols-4 items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C]  transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Política de privacidad 
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C]  transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Acuerdo de suscripción
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C]  transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Cancelar suscripción
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C] transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Ayuda
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C] transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Dispositivos compatibles
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C] transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Acerca de ReactFilmix
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal text-[#E3E09C] transition-colors hover:text-[#8C8960] focus:text-[#8C8960]"
            >
              Publicidad personalizada
            </Typography>
          </li>
        </ul>
        <div className="max-w-xl">
            <p className="text-[#E3E09C] ">ReactFilmix es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. El servicio ReactFilmix es comercializado por React Company (Codo a codo) S.A., Tucumán 1, Piso 4° (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT 30-63984459-1.</p>
        </div>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center  text-[#E3E09C] font-normal">
        &copy; 2023 ReactFilmix
      </Typography>
    </footer>
  );
}