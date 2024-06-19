import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-4xl mx-auto shadow-lg p-10 bg-white rounded-lg">
        <h1 className="text-4xl font-bold mb-6 border-b pb-4">Privacy Policy</h1>
        <p className="mb-4">Your privacy is important to us. It is APatil&apos;s policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://portfolio.apatil.net/" className="text-blue-600 hover:underline">portfolio.apatil.net</a>, and other sites we own and operate.</p>
        <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we are collecting it and how it will be used.</p>
        <p className="mb-4">We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we will protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        <p className="mb-4">We do not share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p className="mb-4">Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p className="mb-4">You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <p className="mt-6 italic">This policy is effective as of 18th June, 2024.</p>
      </div>
    </div>
  );
};

export default Privacy;
