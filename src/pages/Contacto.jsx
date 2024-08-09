import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import IconInfo from '../components/IconInfo'
import { IconMail } from '../assets/icons/IconMail'
import { IconPhone } from '../assets/icons/IconPhone'
import { Controller, useForm } from 'react-hook-form'
import { FormElement } from '../components/FormElement'
import axios from 'axios';
import { useState } from 'react';
import { Svgs } from '../components/Svgs';
export const Contacto = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form)
    const serviceID = "service_29q2waf";
    const templateID = "template_w7oqqwg";
    const apiKey = "qLxjg2xQeyodNgFRe";
    emailjs.sendForm(serviceID, templateID, form.current, apiKey)
      .then((result) => {
        console.log(result.text);
        alert("Enviado, Gracias por tu tiempo")
      }, (error) => {
        console.log(error.text);
      });
  };


  


  return (
    <div>
      <div className='flex justify-center'
        style={{
          background: 'radial-gradient(circle, rgb(255, 187, 92)0%, rgb(0, 0, 0) 100%)',
          height: '250px',
        }}>

        <h1 className='text-5xl sm:text-7xl font-bold pt-12 text-white '>Contacto</h1>
      </div>
      <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
        <div className='rounded-lg shadow-lg bg-white -mt-24 py-10 md:py-12 px-4 md:px-6'>
          <div className='grid space-y-6 sm:space-y-0 text-[12px] sm:text-[18px]  sm:grid-cols-3 gap-x-6 mb-12 mx-auto'>
            <IconInfo icon={<IconMail />} text="info@arugbypro.com" />
            <Svgs className=''/>
            <IconInfo icon={<IconPhone />} text="11-67698456" />
            
          </div>
          <form onSubmit={sendEmail} ref={form} className='grid grid-cols-1 gap-y-6 gap-x-4'>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Name:</label>
              <input
                className='h- 14 px-2 border-2'
                type="text"
                name='name'
                
              />
            </div>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Email:</label>
              <input
                
                type="email"
                className='h-14 px-2 border-2 rounded'
                name='email'
              />
            </div>
            <div className='grid grid-cols-1 gap-y-6 gap-x-4 '>
              <label>Message:</label>
              <textarea
                type="text"
                className='h-32 px-2 border-2 rounded'
                name='message'
              />
            </div>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
             rounded w-1/6 sm:w-1/4 w-full hover:cursor-pointer hover:opacity-90 hover:transition-120 inline-block'>
                Enviar
                </button>
          </form>

        </div>

      </div>
    </div>
  );

}