import { useAuth } from "../../auth/hooks/useAuth";
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
import AppInput from "../Input/app_input";
import { Link } from "react-router-dom";
import { AppUsers } from "../appModal.jsx/appUsers";

export{
    useAuth,
    useState,
    Dialog,
    Bars3Icon,
    XMarkIcon,
    filmIcon,
    Avatar,
    homeIcon,
    peliculasIcon,
    seriesIcon,
    categoriasIcon,
    miespacioIcon,
    configuracionIcon,
    descargasIcon,
    buscarIcon,
    AppInput,
    Link,
    AppUsers,
}