import Image from 'next/image';
import { FaLaptopCode, FaBrain, FaPuzzlePiece, FaUsers } from 'react-icons/fa'; // Icons for coding, innovation, problem-solving, and teamwork
import aboutMeImage from '../public/assets/HeroImage.webp'; // Ensure this is the correct path to your image

export const AboutSection = () => {
  return (
    <section id="about-me" className="bg-gray-25 text-black font-poppins pt-10 pb-14 px-4 md:px-16 text-justify">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <Image src={aboutMeImage} alt="Akhil Patil Bagili" width={500} height={500} priority />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl text-blue-800 font-bold mb-6">About Me</h2>
          <div className="flex items-center text-lg md:text-xl mb-4">
            <FaLaptopCode className="text-blue-800 mr-6 text-3xl md:text-4xl" />
            <span>I&apos;m Akhil, a Full Stack Developer from San Jose, combining cutting-edge technology with creative design to enhance software solutions.</span>
          </div>
          <div className="flex items-center text-lg md:text-xl mb-4">
            <FaBrain className="text-blue-800 mr-6 text-3xl md:text-4xl" />
            <span>Colleagues recognize my problem-solving skills and dedication to crafting clean, efficient code. I excel in turning challenges into opportunities.</span>
          </div>
          <div className="flex items-center text-lg md:text-xl mb-4">
            <FaPuzzlePiece className="text-blue-800 mr-6 text-3xl md:text-4xl" />
            <span>Driven by innovation, I specialize in developing robust applications and AI-driven solutions that simplify and resolve complexities.</span>
          </div>
          <div className="flex items-center text-lg md:text-xl">
            <FaUsers className="text-blue-800 mr-6 text-3xl md:text-4xl" />
            <span>Eager to collaborate? Let&apos;s combine our strengths and push the boundaries of what technology can achieve.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
