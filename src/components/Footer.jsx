import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#d49696] text-white py-8 mt-auto ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-4">

          <a href="https://www.instagram.com/esteticistamarianavieira/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://wa.me/5517991115231" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-green-400 transition" />
          </a>
        </div>

        <div className="flex items-center space-x-4">

          <a href="mailto:marianavieira2206@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>

        <p className="text-sm mt-4">
          © 2023 MV Estética. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
