import React from 'react'
import novedades from "../assets/img/novedadesInfo.jpeg";
import novedades1 from "../assets/img/novedadesinfo1.jpeg";

export const DiarioHoy = () => {
  return (
    <div className='sm:flex mt-10 gap-4 mb-10 border-b-2 border-GrayishBlue pb-20'>
       
        <div className='w-full h-auto sm:w-1/2 mt-10'>
          <img src={novedades} alt="" className=''/>
          <p className='mt-10 text-center text-[18px]'>
            Para leer la nota completa haga click <a rel='noreferrer noopener' className='text-blue-500 hover:text-SoftOrange' target='_blank' href="https://hoydia.com.ar/deportes/profesionalizar-el-rugby-el-gran-desafio-de-arpro-en-cordoba-y-el-pais/">
             aquí
            </a>
          </p>
        </div>
        <div className='w-full pt-10 sm:pt-0 sm:w-1/2 font-bebas text-VeryDarkBlue'>
          <p>
            El rugby en Argentina crece a pasos agigantados, no solo en resultados gracias a las grandes actuaciones de los Pumas, 
            sino también gracias a la participación de miles de jóvenes en todo el país. Sin embargo, 
            la cruda verdad es que la gran mayoría de clubes en el país aún compiten bajo la sombra del amateurismo. 
            “Somos una asociación que tiene como objetivo el desarrollo profesional de este deporte. Sabemos que el rugby es un deporte amateur 
            en Argentina y también en América Latina”, comentó Federico Velez Bergami, de ARPro, 
            una asociación de rugby profesional que busca desarrollar el deporte en Argentina y América Latina, siguiendo el modelo de países como Australia y Nueva Zelanda.
          </p>
          <p className='mt-4'>
            Con dos años de trayectoria, la Asociación se enfoca en promover el desarrollo profesional del rugby, así como de otros deportes, 
            estableciendo conexiones internacionales y buscando expandirse por toda la región. “Tenemos un contacto con coaches y entrenadores 
            de otros países. Principalmente de países de Sudáfrica y Estados Unidos, con los cuales buscamos poder cooperar y poder brindar un 
            servicio conjunto”
            </p>
        </div>
    </div>
  )
}

