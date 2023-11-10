"use client"
import React from 'react'
import Imagem01 from '../../public/images/projects/imagem01.png'
import Imagem02 from '../../public/images/projects/imagem02.png'
import Imagem03 from '../../public/images/projects/imagem03.png'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id='pro'>

      <h2 className='text-center text-4xl font-bold text-white mt-2 mb-8 md:mb-12'>Procedimentos</h2>
      <div className="text-white flex flex-col md:flex-row justify-center items-center gap-2 md:py-12 lg:space-x-12">
      <div className="w-full md:w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image src={Imagem02} className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Tratamento Facial</h2>
            <p className="text-gray-600">Limpeza de Pele</p>
            <p className="text-gray-600">Relaxamento Facial</p>
            <div className="flex justify-between items-center mt-4">
                <Link href={"https://www.instagram.com/esteticistamarianavieira/"} alt="Instagram">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Saiba mais</button>
                </Link>
            </div>
        </div>
      </div>
      <div className="w-full md:w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image src={Imagem03} className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Tratamento Corporal</h2>
            <p className="text-gray-600">Drenagem Linfática</p>
            <p className="text-gray-600">Modelagem Corporal</p>

            <div className="flex justify-between items-center mt-4">
                <Link href={"https://www.instagram.com/esteticistamarianavieira/"} alt="Instagram">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Saiba mais</button>
                </Link>
            </div>
        </div>
      </div>
      <div className="w-full md:w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Image src={Imagem01} className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" />
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Relaxamento Cromoterápico</h2>
            <p className="text-gray-600">Relaxamento Corporal</p>
            <div className="flex justify-between items-center mt-4">
                <Link href={"https://www.instagram.com/esteticistamarianavieira/"} alt="Instagram">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Saiba mais</button>
                </Link>
            </div>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Projects
