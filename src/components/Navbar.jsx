import React from 'react'
import menuBurguer from '../assets/img/menuBurguer.png'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleClick = () => {

        setOpen(!open)
    }

    const navigate = useNavigate();
    const content =
        <>
            <ul className={`${open ? "flex" : "hidden"} 
     flex-col text-center block absolute transition mt-10  text-center bg-gradient-to-b from-white %70 to-SoftOrange %20 text-2xl pt-20 space-y-6 left-0  w-full h-[40vh]  
       sm:hidden`}>
                <Link to='/'>
                    <li onClick={() => setOpen(!open)}
                        className="
                        hover:text-SoftOrange  hover:scale-125  hover:cursor-pointer hover:transition ">

                        Home
                    </li>

                </Link>

                <Link to='/sobre-nosotros'>
                    <li onClick={() => setOpen(!open)}
                        className="
                        hover:text-SoftOrange hover:scale-125  hover:cursor-pointer hover:transition ">

                        Nosotros
                    </li>

                </Link>
                <Link to='/contacto'>
                    <li onClick={() => setOpen(!open)}
                        className="
                        hover:text-SoftOrange  hover:scale-125  hover:cursor-pointer hover:transition ">

                        Contacto
                    </li>

                </Link>
            </ul>
        </>




    return (

        <>
            <ul className="hidden sm:flex sm:flex-row text-black text-2xl sm:justify-end  sm:text-4
                sm:items-center space-x-16 sm:mx-24 sm:w-full" >
                <li>
                    <a onClick={() => navigate('/')} className='flex hover:text-SoftOrange hover:scale-125
                     hover:border-b-2 hover:border-b-SoftOrange hover:cursor-pointer hover:transition '>Home</a>
                </li>

                <li>
                    <a onClick={() => navigate('/sobre-nosotros')} className='flex hover:text-SoftOrange hover:scale-125
                     hover:border-b-2 hover:border-b-SoftOrange hover:cursor-pointer hover:transition'>Nosotros</a>
                </li>
                <li>
                    <a onClick={() => navigate('/contacto')} className='flex hover:text-SoftOrange hover:scale-125
                     hover:border-b-2 hover:border-b-SoftOrange hover:cursor-pointer hover:transition'>Contacto</a>
                </li>
            </ul>
            <div>
                {open && content}
            </div>
            <button className="sm:hidden  top-6 right-10 mx-6 justify-center items-center transition  " onClick={handleClick} >
                {open ? <Hamburger color='black' toggled={open} toggle={setOpen} /> : <Hamburger color='black' toggled={open} toggle={setOpen} />}
            </button>

        </>

    )
}

export default Navbar;