// ContactSection.tsx
'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import emailjs-com to send emails

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        source: 'PortfolioSite'  // Define the source field initially
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            console.log('Email successfully sent!', result.text);
            alert('Message Sent Successfully!');
            setFormData({ name: '', email: '', subject: '', message: '', source: 'PortfolioSite' }); // Reset form with the source field
        } catch (error: any) {
            console.error('Failed to send email:', error.text);
            alert('Message Sending Failed!');
        }
    };

    return (
        <section id="contact" className="py-10 bg-gray-100 text-black font-poppins">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 font-semibold">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-1 font-semibold">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 font-semibold">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
