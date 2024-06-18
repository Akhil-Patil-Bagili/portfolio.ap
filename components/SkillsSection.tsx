import { DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiDjango, DiPostgresql, DiRedis, DiAws, DiMysql } from 'react-icons/di';
import { SiNextdotjs, SiTypescript, SiJquery, SiTailwindcss, SiDocker, SiKubernetes, SiBootstrap, SiFlask, SiNginx, SiOracle } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { FiTerminal } from 'react-icons/fi';
import { BiCodeCurly } from 'react-icons/bi';
import { MdCloudQueue } from 'react-icons/md';

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', icon: DiPython },
        { name: 'JavaScript', icon: IoLogoJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Java', icon: FaJava },
        { name: 'SQL', icon: FaDatabase },
        { name: 'PL/SQL', icon: BiCodeCurly },
      ],
    },
    {
      category: 'Frontend Web Development',
      skills: [
        { name: 'React', icon: DiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'JQuery', icon: SiJquery },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'HTML5', icon: AiOutlineHtml5 },
        { name: 'CSS3', icon: IoLogoCss3 },
      ],
    },
    {
      category: 'Backend Web Development',
      skills: [
        { name: 'Node.js', icon: DiNodejsSmall },
        { name: 'Django', icon: DiDjango },
        { name: 'Flask', icon: SiFlask },
        { name: 'Express', icon: SiNginx },
        { name: 'REST API', icon: RiGitRepositoryLine },
        { name: 'Cloudflare Workers', icon: MdCloudQueue },
      ],
    },
    {
      category: 'Database Technologies',
      skills: [
        { name: 'PostgreSQL', icon: DiPostgresql },
        { name: 'MongoDB', icon: DiMongodb },
        { name: 'MySQL', icon: DiMysql },
        { name: 'Oracle', icon: SiOracle },
        { name: 'Redis', icon: DiRedis },
      ],
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'CI/CD', icon: RiGitRepositoryLine },
        { name: 'AWS', icon: DiAws },
        { name: 'Nginx', icon: SiNginx },
        { name: 'Load Balancers', icon: MdCloudQueue },
      ],
    },
    {
      category: 'Other Tools and Technologies',
      skills: [
        { name: 'Git', icon: DiGit },
        { name: 'Github', icon: RiGitRepositoryLine },
        { name: 'Bash Programming', icon: FiTerminal },
        { name: 'Postman', icon: FiTerminal },
        { name: 'Visual Studio Code', icon: RiGitRepositoryLine },
        { name: 'Toad', icon: SiOracle },
        { name: 'Putty', icon: RiGitRepositoryLine },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-white text-black font-poppins md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Skills</h2>
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-14">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="group flex flex-col items-center bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200 hover:bg-blue-800">
                  <skill.icon className="text-black group-hover:text-white text-5xl mb-3" />
                  <p className="text-md md:text-lg text-black group-hover:text-white">{skill.name}</p>
                </div>
              ))} 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;