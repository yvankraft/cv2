import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { href: "https://github.com/yvankraft", label: "GitHub", icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/yvan-ngone-271b2b30b/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  { href: "https://x.com/wildisyvan53?s=11", label: "Twitter", icon: FaTwitter },
];

export default function Footer() {
  return (
    <footer className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 border-t border-black/10 text-center">
      <div className="flex justify-center gap-8 mb-6">
        {socials.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-black hover:scale-110 transition-all duration-300"
          >
            <Icon className="text-3xl" />
          </a>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
        © 2026 Yvan Wildis Ngone Tchinda
      </p>
    </footer>
  );
}
