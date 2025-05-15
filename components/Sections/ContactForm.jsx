'use client';

import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { Input } from "@/components/ui/InputButton";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/magicui/magic-card";

function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const ContactFromInfo = [
        { icon: faEnvelope, title: "Email", value: "wolfhunting49@gmail.com", link: "mailto:alex.chen@example.com" },
        { icon: faPhone, title: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
        { icon: faMapMarkerAlt, title: "Location", value: "Lahore,Pakistan" },
        { icon: faClock, title: "Working Hours", value: "Mon-Fri: 9AM - 6PM" },
    ];

    return (
        <section id="ContactFrom" className="text-white py-16 md:py-4 lg:py-8 overflow-hidden">
            <div className="max-w-[768px] w-full xl:max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="h-1 w-10 bg-indigo-500" />
                        <span className="text-indigo-400 uppercase text-sm tracking-widest font-medium">ContactFrom Me</span>
                        <div className="h-1 w-10 bg-indigo-500" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">Get In Touch</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-gray-900 dark:text-gray-50">
                        Have a project in mind or just want to say hello? Feel free to reach out.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <MagicCard className="bg-white/5 border border-gray-600 backdrop-blur-md text-white rounded-2xl p-6 md:p-8 h-full">
                            <div>
                                <h3 className="text-gray-50 text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">ContactFrom Information</h3>
                                <p className="text-gray-300 mb-8 text-gray-900 dark:text-gray-50">Let turn your ideas into reality.</p>
                            </div>

                            <div className="space-y-6">
                                {ContactFromInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-indigo-500/20 text-indigo-300 p-3 rounded-lg">
                                            <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-blue-800 dark:text-blue-700" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1 text-gray-900 dark:text-gray-50">{item.title}</h4>
                                            {item.link ? (
                                                <a href={item.link} className="text-gray-900 dark:text-gray-50 hover:text-indigo-400 transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-900 dark:text-gray-50">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <h4 className="text-gray-900 dark:text-gray-50 text-lg font-semibold mb-4">Connect With Me</h4>
                                <div className="flex gap-4">
                                    {[faLinkedin, faTwitter, faDribbble].map((icon, idx) => (
                                        <a key={idx} href="#" aria-label="Social link"
                                            className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors">
                                            <FontAwesomeIcon icon={icon} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </MagicCard>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full md:w-1/2"
                    >
                        <MagicCard className="bg-white/5 border border-gray-600 backdrop-blur-md text-white rounded-2xl p-6 md:p-8">
                            <h3 className="text-gray-900 dark:text-gray-50 text-2xl font-bold mb-6">Send Me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="text-sm text-gray-900 dark:text-gray-50 mb-2 block">Your Name</label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm text-gray-900 dark:text-gray-50 mb-2 block">Your Email</label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="text-sm text-gray-900 dark:text-gray-50 mb-2 block">Subject</label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Project Discussion"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-gray-900 dark:text-gray-50 text-smtext-gray-900 dark:text-gray-50 mb-2 block">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                        className="w-full bg-black/20 border border-gray-500 rounded-lg py-3 px-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Hello, I’d like to talk about..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto text-gray-300 dark:text-gray-50 font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                                >
                                    Send Message
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                                </Button>
                            </form>
                        </MagicCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
