'use client';
import React, { useState } from 'react';
import { AiOutlineLink, AiOutlineLeft, AiOutlineRight, AiFillGithub } from 'react-icons/ai';
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import ProjectCard from './ProjectCard';

interface Technology {
  icon: JSX.Element;
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

const initialProjects: Project[] = [
  {
    title: "Magic Square Puzzle Solver",
      description: "Magic Square Puzzle Solver is an engaging web application that challenges users to solve magic square puzzles.",
      url: "http://54.242.48.248/",
      githubUrl: "https://github.com/Akhil-Patil-Bagili/magic-square-puzzle-solver",
      images: [
        "/assets/msps/1.png", 
        "/assets/msps/2.png",
        "/assets/msps/5.png",
        "/assets/msps/6.png"
      ],
      technologies: [
        { icon: <DiReact />, name: "React" },  
        { icon: <DiNodejsSmall />, name: "Node.js" }  
      ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };

  return (
    <section id="projects" className="py-10 bg-gray-50 text-black font-poppins md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
