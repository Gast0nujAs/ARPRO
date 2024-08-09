import React from 'react'
import svgFacebook from "../assets/svg/icons8-facebook-nuevo.svg"
import svgInstagram from "../assets/svg/icons8-instagram.svg"
import svgLinkedin from "../assets/svg/icons8-linkedin.svg"
import svgWsp from "../assets/svg/icons8-whatsapp.svg"

export const Svgs = () => {
  return (
    <div className='flex space-x-4 mx-auto sm:mx-12 justify-start'>
                        <a target='_blank' rel='noreferrer noopener' href="https://www.facebook.com/profile.php?id=61556635130396" className=''>
                            <img src={svgFacebook} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300  w-8" />
                        </a>
                        <a target='_blank' rel='noreferrer noopener' href="https://www.instagram.com/arpro.rugby/" className=''>
                            <img src={svgInstagram} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 w-8" />
                        </a>
                        <a target='_blank' rel='noreferrer noopener' href="https://ar.linkedin.com/company/asociaci%C3%B3n-de-rugby-profesional" className=''>
                            <img src={svgLinkedin} alt="Facebook" className="rounded-full hover:scale-125 
            hover:cursor-pointer hover:duration-300 w-8" />
                        </a>
                        
                    </div>
  )
}
