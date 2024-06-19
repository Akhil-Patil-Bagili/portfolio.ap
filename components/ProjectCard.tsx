'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineLink, AiOutlineLeft, AiOutlineRight, AiFillGithub } from 'react-icons/ai';

interface Technology {
  name: string;
}

interface Project {
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  images: string[];
  technologies: Technology[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg relative max-w-lg mx-auto flex flex-col h-full">
      <h3 className="text-xl font-bold">{project.title}</h3>

      <div className="relative mt-6 mb-6">
        <div className="relative w-full h-52 overflow-hidden rounded-md">
        <Image 
            src={project.images[currentImageIndex]} 
            alt={`${project.title} screenshot`} 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <button onClick={previousImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full">
            <AiOutlineLeft />
          </button>
          <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full">
            <AiOutlineRight />
          </button>
        </div>
      </div>

      <p>{project.description}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold">Technologies Used:</h4>
        <ul className="flex flex-wrap">
          {project.technologies.map((tech, i) => (
            <li key={i} className="flex items-center m-2">
              <span className="ml-2 text-sm">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex justify-between items-center pt-4">
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
            Visit <AiOutlineLink className="ml-2" />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black flex items-center">
            GitHub <AiFillGithub className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
