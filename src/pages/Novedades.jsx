import React from 'react'
import novedades from "../assets/img/novedadesInfo.jpeg";
import novedades1 from "../assets/img/novedadesinfo1.jpeg";
import { DiarioHoy } from '../components/DiarioHoy';
import { InfoNegocios } from '../components/InfoNegocios';

export const Novedades = () => {
  return (
    <div className='px-10 bg-[#FEFDF7] shadow-2xl'>
        <h1 className='text-2xl font-bold text-VeryDarkBlue pt-10 text-center'>Articulos de Prensa sobre <b>ARPRO</b></h1>
        <DiarioHoy />
        <InfoNegocios />
    </div>
  )
}

