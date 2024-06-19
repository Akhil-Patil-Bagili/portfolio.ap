'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

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

const initialProjects: Project[] = [
  {
    title: "Magic Square Puzzle Solver",
      description: "Magic Square Puzzle Solver is a fun and interactive web application that challenges users to solve ancient mathematical puzzles, offering various difficulty levels and real-time hints, built with Flask and React.",
      url: "https://github.com/Akhil-Patil-Bagili/magic-square-puzzle-solver",
      githubUrl: "https://github.com/Akhil-Patil-Bagili/magic-square-puzzle-solver",
      images: [
        "/assets/msps/1.png", 
        "/assets/msps/2.png",
        "/assets/msps/5.png",
        "/assets/msps/6.png"
      ],
      technologies: [
        { name: "React" },  
        { name: "TailwindCSS" }, 
        { name: "Flask" },
        { name: "PostgreSQL" },
        { name: "Docker" },
        { name: "AWS" },
      ],
  },
  {
    title: "Expense Tracker",
      description: "Expense Tracker App is a user-friendly tool for managing your finances, built with Django and React. It lets you log expenses and incomes, view spending habits with detailed analytics, and includes an AI chatbot to help with user queries.",
      url: "https://expense-tracker.apatil.net/",
      githubUrl: "https://github.com/Akhil-Patil-Bagili/expense_tracker.ap",
      images: [
        "/assets/expense_tracker/1.png", 
        "/assets/expense_tracker/2.png",
        "/assets/expense_tracker/3.png",
        "/assets/expense_tracker/4.png",
        "/assets/expense_tracker/5.png",
        "/assets/expense_tracker/6.png",
        "/assets/expense_tracker/7.png",
        "/assets/expense_tracker/8.png",
        "/assets/expense_tracker/9.png",
        "/assets/expense_tracker/10.png",

      ],
      technologies: [
        { name: "React" },
        { name: "CSS" },  
        { name: "Django" },
        { name: "PostgreSQL" },
        { name: "OpenAI" },
        { name: "Netlify" },
        { name: "Heroku" },
        { name: "Railway" },
      ],
  },
  {
    title: "GitInsight",
      description: "GitInsight is a powerful tool that offers deep insights into Git repositories, utilizing OpenAI's GPT-4 to simplify querying commits and understanding project trends for developers and project managers.",
      url: "https://github.com/Akhil-Patil-Bagili/gitinsight.ap",
      githubUrl: "https://github.com/Akhil-Patil-Bagili/gitinsight.ap",
      images: [
        "/assets/gitinsight/1.png", 
        "/assets/gitinsight/2.png",
        "/assets/gitinsight/3.png",
        "/assets/gitinsight/4.png",
        "/assets/gitinsight/5.png",
        "/assets/gitinsight/6.png",
        "/assets/gitinsight/7.png",
      ],
      technologies: [
        { name: "React" }, 
        { name: "TailwindCSS" }, 
        { name: "Flask" },
        { name: "AstraDB" },
        { name: "GenAI" },
        { name: "RAG modeling" },
        { name: "GPT-4" },
        { name: "AWS" },
      ],
  },
  
  {
    title: "PayTM",
      description: "PayTM App is a user-friendly platform that allows users to search for existing users and send money to them instantly. Built with React and Node, the app ensures seamless money transfers with real-time balance updates.",
      url: "https://github.com/Akhil-Patil-Bagili/paytm.ap",
      githubUrl: "https://github.com/Akhil-Patil-Bagili/paytm.ap",
      images: [
        "/assets/paytm/1.png", 
        "/assets/paytm/2.png",
        "/assets/paytm/3.png",
      ],
      technologies: [
        { name: "React" }, 
        { name: "TailwindCSS" }, 
        { name: "Node" },
        { name: "MongoDB" },
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
