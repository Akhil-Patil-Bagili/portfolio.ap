"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import myImage from '../assets/HeroImage.webp';
import { ButtonDark } from './ButtonDark';
import { ButtonLight } from './ButtonLight';
import { animateScroll as scroll } from 'react-scroll';

const roles = ["<Frontend Developer/>", "<Backend Developer/>", "<DevOps Engineer/>"];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/akhil_patil_bagili_resume.pdf'; 
    link.setAttribute('download', 'Resume_Akhil_Patil_Bagili.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      scroll.scrollTo(contactSection.offsetTop, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-25 text-black font-poppins">
      <div className="flex justify-center md:flex-1 mt-10 mb-4 pb-16 md:mb-0 max-w-full">
        <Image src={myImage} alt="Akhil Patil Bagili" layout="responsive" width={500} height={500} objectFit="cover" />
      </div>
      <div className="flex-1 text-center md:text-left p-2 overflow-hidden">
        <div className="mb-4 md:mr-8 max-w-full">
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm <span className="text-blue-800">Akhil Patil Bagili,</span></h1>
          <p className="text-xl md:text-3xl font-semibold mt-4 animate-pulse pb-4 text-blue-800">
            {roles[currentRole]}
          </p>
          <p className="text-lg md:text-xl mt-2 text-slate-600 pb-6 font-normal">Crafting the future with code, where each line is a step towards innovative web experiences. As a Full Stack Developer, I'm at the heart of this transformation.</p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-x-0 md:space-x-4 mt-4 space-y-2 md:space-y-0">
            <ButtonLight onClick={handleScrollToContact} label="Get in Touch"/>
            <ButtonDark onClick={handleDownloadResume} label="Download Resume"/>
          </div>
        </div>
      </div>
    </section>
  );
};
