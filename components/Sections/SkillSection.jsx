'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faNodeJs,
    faJs,
    faGithub,
    faCss3Alt,
    faHtml5,
    faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";
import { Particles } from "@/components/magicui/particles";

const skills = [
    { name: "React", icon: faReact },
    { name: "Next.js", icon: faCode },
    { name: "Node.js", icon: faNodeJs },
    { name: "MongoDB", icon: faDatabase },
    { name: "Tailwind CSS", icon: faCss3Alt },
    { name: "JavaScript", icon: faJs },
    { name: "Git", icon: faGitAlt },
    { name: "GitHub", icon: faGithub },
    { name: "HTML", icon: faHtml5 },
];

export default function SkillsSection() {
    const loopItems = [...skills, ...skills];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-black dark:text-white" id="skills">
            <div className="absolute inset-0 -z-10">
                <Particles />
            </div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold">Skills & Technologies</h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 mt-4">Tools and technologies I work with</p>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
                </div>

                <div className="overflow-hidden relative w-full">
                    <div className="flex animate-marquee gap-8 whitespace-nowrap">
                        {loopItems.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center bg-gray-200 dark:bg-gray-800 rounded-lg px-6 py-4 min-w-[150px]"
                            >
                                <FontAwesomeIcon icon={skill.icon} className="text-blue-500 w-8 h-8 mb-2" />
                                <span className="text-lg font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
