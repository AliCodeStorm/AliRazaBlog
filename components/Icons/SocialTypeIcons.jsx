"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faYoutube,
    faTwitter,
    faInstagram,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
    { icon: faGithub, url: "https://github.com/yourprofile", label: "GitHub" },
    { icon: faLinkedin, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: faYoutube, url: "https://youtube.com/@yourchannel", label: "YouTube" },
    { icon: faTwitter, url: "https://twitter.com/yourhandle", label: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com/yourprofile", label: "Instagram" },
    { icon: faXTwitter, url: "https://x.com/yourhandle", label: "X" },
];

export default function SocialIcons() {
    return (
        <div className="flex gap-7 text-gray-950 mt-12 dark:text-gray-50 mb-4">
            {socialLinks.map(({ icon, url, label }) => (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="transition transform hover:scale-110 hover:text-cyan-400 duration-500 hover:-translate-y-1 hover:shadow-lg hover:rotate-[15deg]"
                >
                    <FontAwesomeIcon icon={icon} size="2x" />
                </a>
            ))}
        </div>
    );
}
