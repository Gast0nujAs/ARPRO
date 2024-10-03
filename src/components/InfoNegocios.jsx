import React from 'react'
import novedades1 from "../assets/img/novedadesinfo1.jpeg";

export const InfoNegocios = () => {
  return (
    <div className='sm:flex sm:flex-row-reverse mt-10 gap-4 mb-10 pb-20'>
       
        <div className='w-full h-auto sm:w-1/2 mt-10'>
          <img src={novedades1} alt="" className='h-[100px] sm:h-auto'/>
          <p className='mt-10 text-center text-[18px]'>
            Para leer la nota completa haga click <a rel='noreferrer noopener' className='text-blue-500 hover:text-SoftOrange' target='_blank' href="https://hoydia.com.ar/deportes/profesionalizar-el-rugby-el-gran-desafio-de-arpro-en-cordoba-y-el-pais/">
             aquí
            </a>
          </p>
        </div>
        <div className='w-full pt-10 sm:pt-0 sm:w-1/2 font-bebas text-VeryDarkBlue'>
          <p>
            Históricamente el rugby en Argentina ha estado ligado al amateurismo y la tradición propia del deporte, algo que,
            si bien ha habido intentos, sigue fiel a su estilo en pleno 2024.
          </p>
          <p className='mt-4'>
            Ante esta situación es que nace la Asociación de Rugby Profesional, una institución deportiva que busca ir 
            por otro camino para profesionalizar el rugby, incluyendo no solo a todos aquellos clubes de la ovalada que se quieran sumar,
             sino también darle las herramientas a todo tipo de clubes para que tengan su propia división de rugby.
            </p>
            <p className='mt-4'>
                Para ello, ARPro brinda un programa integral dividido en cuatro áreas que son la fuerza motriz de la profesionalización 
                del deporte en los clubes
            </p>
        </div>
    </div>
  )
}

