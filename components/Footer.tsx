'use client';
import React from 'react';
import { SocialMediaIcons } from './SocialMediaIcons';  

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-center md:text-left font-semibold">© {new Date().getFullYear()} APatil. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-4 md:mt-2">
          {SocialMediaIcons.map(icon => (
            <a href={icon.url} key={icon.id} className="hover:text-blue-500 transition-colors duration-200" aria-label={icon.title} title={icon.title} target="_blank" rel="noopener noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="/privacy" target="_blank" className="mt-6 md:mb-3 md:mr-4 hover:text-blue-500 transition-colors duration-200">Privacy Policy</a>
          <a href="/terms" target="_blank" className="hover:text-blue-500 md:mt-3 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );

};
