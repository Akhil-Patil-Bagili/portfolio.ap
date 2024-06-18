import { FiMapPin } from 'react-icons/fi'; // Correcting the import statement for consistency

export const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Cognizant',
      period: 'Feb 2022 - Aug 2022',
      role: 'Full Stack Software Developer',
      location: 'Hyderabad, India',
      accomplishments: [
        'Engineered a React and Tailwind CSS-driven analytics dashboard for a restaurant company, elevating data visualization efficiency by 40% with dynamic PostgreSQL integration.',
        'Refined a Node.js application by integrating custom middlewares, input validations, and JWT authentication, enhancing security.',
        'Orchestrated the deployment of scalable cloud solutions using AWS services (EC2, S3, CDN), optimizing resource utilization and operational cost.',
      ],
    },
    {
      company: 'Wipro Technologies',
      period: 'May 2020 - Feb 2022',
      role: 'Backend Developer',
      location: 'Hyderabad, India',
      accomplishments: [
        'Enhanced backend performance for an oil and natural gas company’s project using Node.js, achieving a 20% improvement in response times.',
        'Pioneered the use of Redis for state management and session caching, significantly reducing server response times.',
        'Directed the adoption of CI/CD pipelines leveraging Jenkins and Docker to cut deployment times by 50%.',
      ],
    },
    {
      company: 'Wipro Technologies',
      period: 'Nov 2019 - May 2020',
      role: 'Oracle Cloud Technical Developer',
      location: 'Hyderabad, India',
      accomplishments: [
        'Leveraged PL/SQL to automate critical financial processes, boosting efficiency and reducing manual intervention by 40%.',
        'Led SQL optimization achieving a reduction in report load times, earning client praise for efficiency improvements.',
        'Worked on the migration from Oracle EBS to Oracle Cloud focusing on Oracle Financials and reporting tools.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 bg-gray-50 text-black font-poppins px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800">Experience</h2>
        <div className="relative border-l-2 border-gray-200 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="ml-4 md:ml-6 group">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow duration-200 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">{exp.company}</h3>
                  <p className="text-sm md:text-lg text-gray-600">{exp.period}</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:space-x-14 pb-2 text-center md:text-left">
                  <p className="text-sm md:text-lg">{exp.role}</p>
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="text-black" />
                    <p className="text-sm md:text-lg">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-sm md:text-md">
                  {exp.accomplishments.map((acc, idx) => (
                    <li key={idx} className="text-gray-800">{acc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
