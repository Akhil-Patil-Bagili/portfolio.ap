import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-black p-8">
      <div className="max-w-4xl mx-auto shadow-lg p-10 bg-white rounded-lg">
        <h1 className="text-4xl font-bold mb-6 border-b pb-4">Terms of Service</h1>
        <p className="mb-4">By accessing the website at <a href="http://apatil.net" className="text-blue-600 hover:underline">apatil.net</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        <p className="mb-4">The materials contained in this website are protected by applicable copyright and trademark law.</p>
        <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Apatil&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on Apatil&apos;s website;</li>
          <li>Remove any copyright or other proprietary notations from the materials;</li>
          <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
        </ul>
        <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Apatil at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
      </div>
    </div>
  );
};

export default Terms;
