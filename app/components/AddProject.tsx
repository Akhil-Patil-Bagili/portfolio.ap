'use client';
import React from 'react';
import { DiReact, DiNodejsSmall } from 'react-icons/di'; // Import icons used for technologies

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

interface AddProjectProps {
  onAddProject: (project: Project) => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onAddProject }) => {
  const handleAddProject = () => {
    const newProject: Project = {
      title: "New Dynamic Project",
      description: "Description of a newly added project.",
      url: "http://newproject.com",
      githubUrl: "http://github.com/newproject",
      images: [
        "/assets/msps/1.png",
        "/assets/msps/2.png"
      ],
      technologies: [
        { icon: <DiReact />, name: "React" },
        { icon: <DiNodejsSmall />, name: "Node.js" }
      ],
    };
    onAddProject(newProject);
  };

  return (
    <button onClick={handleAddProject} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add New Project
    </button>
  );
};

export default AddProject;
