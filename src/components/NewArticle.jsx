import React from 'react'

export const NewArticle = ( {title , text }) => {
  return (
    <article className='w-[230px]  h-[200px] border-b-2 border-GrayishBlue mx-auto  '>
        <h2 className='cursor-pointer hover:text-SoftOrange text-[18px] px-3 mt-6 sm:px-0 
        font-bold '>{title}</h2>
        <p className='text-[12px] px-3 sm:text-[14px] sm:px-0 '>{text}</p>
    </article>
  )
}

