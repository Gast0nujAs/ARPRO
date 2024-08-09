import React from 'react'
import { Svgs } from './Svgs'

export const Footer = () => {
  return (
    <footer className='bg-VeryDarkBlue text-white py-10 mt-5  items-center'>
      <div className='text-center text-[15px] font-bold sm:text-[30px] '>
        <h2 className='cursor-pointer'>Asociacion de Rugby Profesional (A.R.Pro.)</h2>
      </div>
      <div className='flex mt-4 sm:flex-row sm:justify-between'>
        <Svgs />
        <p className='text-end text-[10px] sm:text-[18px] text-SoftOrange px-3'>Copyright © 2024 ARPRO, Todos los Derechos Reservados</p>
      </div>

    </footer>
  )
}
