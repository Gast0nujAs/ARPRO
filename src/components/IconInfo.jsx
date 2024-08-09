import React from 'react'

const IconInfo = ({text, icon}) => {
  return (
    <div className='flex justify-center text-center mx-auto'>
        {icon}
        <h6 className='font-medium px-2'>{text}</h6>
    </div>
  )
}

export default IconInfo