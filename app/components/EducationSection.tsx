import { FiMapPin } from 'react-icons/fi'; // Ensure you have imported FiMapPin from 'react-icons/fi'

export const EducationSection = () => {
  return (
    <section id="education" className="bg-white text-black font-poppins py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800">Education</h2>
        <div className="relative border-l-2 border-gray-200 space-y-10 md:space-y-0">
          <div className="mb-10 ml-4 md:ml-6 group">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow duration-200 space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800">San Jose State University (SJSU)</h3>
                <p className="text-sm md:text-lg text-gray-600">Aug 2022 - May 2024</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-14 pb-2 text-center md:text-left">
                <p className="text-sm md:text-lg">Master of Science in Computer Science</p>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-black" />
                  <p className="text-sm md:text-lg">San Jose, California, United States</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Software Project</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Database System Principles</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Intro to Machine Learning</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Reinforcement Learning</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Data Structures & Analysis of Algorithms</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Advanced Parallel Processing</span>
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Cryptography & Computer Security</span>
              </div>
            </div>
          </div>
          <div className="mb-10 ml-4 md:ml-6 group">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow duration-200 space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-blue-800">B V Raju Institute of Technology (BVRIT)</h3>
                <p className="text-sm md:text-lg text-gray-600">Aug 2015 - May 2019</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-14 pb-2 text-center md:text-left">
                <p className="text-sm md:text-lg">Bachelor of Science in Computer Science</p>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-black" />
                  <p className="text-sm md:text-lg">Narsapur, Telangana, India</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">C Programming</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Advanced Data Structures through C++</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Java Programming</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Database Management Systems</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Operating Systems</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Linux Programming</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Ethical Hacking</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compiler Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






// import { FiMapPin } from 'react-icons/fi'; // Ensure you have imported FiMapPin from 'react-icons/fi'

// export const EducationSection = () => {
//   return (
//     <section className="bg-white text-black font-poppins py-10 px-4 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800">Education</h2>
//         <div className="relative border-l-2 border-gray-200 space-y-10 md:space-y-0">
//           <div className="mb-10 ml-4 md:ml-6 group">
//             <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
//             <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200 space-y-2">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl md:text-2xl font-bold text-blue-800">San Jose State University (SJSU)</h3>
//                 <p className="text-lg text-gray-600">Aug 2022 - May 2024</p>
//               </div>
//               <div className="flex items-center space-x-2 pb-4">
//                 <p className="text-md md:text-lg mr-6">Master of Science in Computer Science</p>
//                 <FiMapPin className="text-black" />
//                 <p className="text-md md:text-lg">San Jose, California, United States</p>
//               </div>
//               <div className="flex flex-wrap gap-2 justify-start">
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Software Project</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Database System Principles</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Intro to Machine Learning</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Reinforcement Learning</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Data Structures & Analysis of Algorithms</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Advanced Parallel Processing</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Cryptography & Computer Security</span>
//               </div>
//             </div>
//           </div>
//           <div className="mb-10 ml-4 md:ml-6 group">
//             <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
//             <div className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200 space-y-2">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl md:text-2xl font-bold text-blue-800">B V Raju Institute of Technology (BVRIT)</h3>
//                 <p className="text-lg text-gray-600">Aug 2015 - May 2019</p>
//               </div>
//               <div className="flex items-center space-x-2 pb-4">
//                 <p className="text-md md:text-lg mr-6">Bachelor of Science in Computer Science</p>
//                 <FiMapPin className="text-black" />
//                 <p className="text-md md:text-lg">Narsapur, Telangana, India</p>
//               </div>
//               <div className="flex flex-wrap gap-2 justify-start">
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">C Programming</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Advanced Data Structures through C++</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Java Programming</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Database Management Systems</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Operating Systems</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Linux Programming</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Machine Learning</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Ethical Hacking</span>
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Compiler Design</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
