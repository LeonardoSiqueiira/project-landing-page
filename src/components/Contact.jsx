"use client"
import React from 'react'



const Contact = () => {
  return (
<section id='contact'>

  <div className="text-white flex flex-col md:flex-row justify-center items-center gap-2 md:py-10 lg:space-x-10">
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="block rounded-lg border border-zinc-950 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[#d49696]">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1865.7435546945642!2d-48.9023122217274!3d-20.731041796613802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc6e47ebcb7bf5%3A0xa42dd03c6e843ec1!2sR.%20Valentino%20Ferranti%2C%20409%20-%20Jardim%20Paulista%2C%20Ol%C3%ADmpia%20-%20SP%2C%2015400-000!5e0!3m2!1spt-BR!2sbr!4v1699293498216!5m2!1spt-BR!2sbr" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="w-full lg:w-6/12 xl:w-8/12 text-white text-center md:text-left p-6">
              <h2 className="text-3xl font-bold mb-4">Contato</h2>
             
              <p className="mb-4">
                WhatsApp: +55 (17) 99111-5231
              </p>
              <p className="mb-4">
                Horários de Funcionamento:
                <br />
                • Segundas a Sexta: 08:00h - 12:00h e 13:00h - 18:30h
                <br />
                • Sábado: 08:00h - 12:00h e 13:00h - 17:00h
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</section>

  )
}

export default Contact
