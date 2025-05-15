import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";

function ExperienceSection() {
    return (
        <section  id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 -z-10">
                <Particles />
            </div>

            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold">My Experience</h2>
                    <p className="text-xl text-gray-700 mt-4">Here's a summary of my work experience and internships.</p>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Frontend Developer (Intern)",
                            company: "TechCorp Inc.",
                            year: "2022",
                            description: "Worked on building dynamic, responsive websites using React and Next.js.",
                        },
                        {
                            title: "Backend Developer (Intern)",
                            company: "DevSolutions",
                            year: "2021",
                            description: "Worked on the server-side development using Node.js, Express, and MongoDB.",
                        },
                        {
                            title: "Backend Developer (Intern)",
                            company: "DevSolutions",
                            year: "2021",
                            description: "Worked on the server-side development using Node.js, Express, and MongoDB.",
                        },
                    ].map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                            className="shadow-lg rounded-lg p-6 bg-gray-100 dark:bg-gray-800 hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{experience.title}</h3>
                            <h4 className="text-xl text-gray-600 dark:text-gray-300">{experience.company} - {experience.year}</h4>
                            <p className="text-gray-700 dark:text-gray-400 mt-2">{experience.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
