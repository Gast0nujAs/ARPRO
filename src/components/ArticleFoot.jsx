import React from 'react';
import imgP from "../assets/img/pexels-w-rugby-6373836.jpg"

export const ArticleFoot = ( {image, title, text}) => {
  return (
    <article className='flex flex-row-wrap space-around gap-x-4 md:gap-x-2 mx-auto lg:w-[346px] w-full  h-[162px] items-center mb-10'>
        <div className=' sm:h-auto'>
            <img src={image} alt='img' className='rounded-[10px] border-b-[5px] border-VeryDarkBlue hover:border-SoftOrange w-[250px] lg:w-[650px] h-[100px] hover:cursor-pointer '/>
        </div>
        <div className='pl-6'>
            <h2 className='text-[20px] sm:text-[16px] font-bold mb-4 hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-VeryDarkBlue md:text-[14px] font-semibold sm:text-[10px]'>{text}</p>

        </div>
    </article>
  )
}

