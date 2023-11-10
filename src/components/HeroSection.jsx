"use client";
import React from 'react'
import Perfil from '../../public/images/perfil.png'
import Image from 'next/image'
import {TypeAnimation} from "react-type-animation"
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section >
      <div className='grid grid-cols-1 sm:grid-cols-12 '>
      <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-4xl font-extrabold'>Mariana Vieira</h1>
        <p className='text-white text-base sm:text-lg mb-6 lg:text-xl '>
        <TypeAnimation 
       sequence={[
        "Especialista em Estética Facial",
        1000,
        "Método Relaxamento Cromoterápico",
        1000,
        "Drenagem linfática",
        1000,
       ]}
       wrapper='span'
       speed={80}
       repeat={Infinity}
       />
       </p>
      <div>
        <Link href={"https://wa.me/5517991115231"}>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-red-400'>Faça agora seu agendamento.</button>
        {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full  bg-white hover:bg-slate-200 text-red-400 border border-white mt-3'>Visualizar</button> */}
        </Link>
      </div>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative'>
        <Image src={Perfil}
        alt='Perfil'
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        width={980}
        height={980}/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
