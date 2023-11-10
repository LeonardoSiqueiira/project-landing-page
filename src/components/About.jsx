"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import Profile from '../../public/images/about.png'
import TabButton from './TabButton'
import NavBar from './NavBar'

const TAB_DATA = [
    {
        title: "Formação",
        id: "formacao",
        content: (
            <>
            <ul className='list-disc pl-2'>
                <li>Estética e Cosmética</li>

            </ul>
            </>
        ),
    },
    {
        title: "Especialidade",
        id: "especialidade",
        content: (
            <>
            <ul className='list-disc pl-2'>
                <li>Estética Facial</li>
                <li>Relaxamento Corporal com Luzes</li>
                <li>Drenagem</li>
                <li>Modelagem Corporal e Reflexologia</li>
            </ul>
           </> 
        ),
    },
]

const About = () => {
    const [Tab, setTab] = useState("formacao")
    const [isPending, startTransition ] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }


  return (
    

    
    <section className='text-white' id='about'>
        <NavBar />
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
        <Image  src={Profile} alt='Profile About' width={300} height={300} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'> Quem sou eu? </h2>
            <p className='text-base lg:text-lg'>
                Mariana A. Vieira, nascida e criada na cidade de Olímpia, cresci cercada pelo mundo dos cosméticos e pela área da beleza, onde encontrei minha maior paixão em elevar a auto estima
                das pessoas melhorando sua saúde e bem estar.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={() => handleTabChange("formacao")} active={Tab === "formacao"}>{""}Formação{""}</TabButton>
                <TabButton selectTab={() => handleTabChange("especialidade")} active={Tab === "especialidade"}>{""}Especialidade{""}</TabButton>
            </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === Tab).content}</div>
        </div>
      </div>
    </section>
  )
}

export default About

