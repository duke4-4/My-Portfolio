export type Project = {
  title: string;
  description: string;
  stack: string[];
  siteUrl?: string;
  codeUrl?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Eco4 Website",
    description:
      "A Modern E-Commerce Template for Enhanced Shopping Experience. Featuring a mobile and user friendly design.",
    stack: ["HTML5", "SCSS", "JavaScript"],
    siteUrl: "https://duke4-4.github.io/eco4/",
    codeUrl: "https://github.com/duke4-4/eco4",
    image: "/images/eco4.png",
  },
  {
    title: "Meikles Foundation",
    description:
      "A fully responsive website for the Meikles Foundation featuring a clean, professional design that effectively communicates the company's mission and values.",
    stack: ["HTML5", "CSS3", "JavaScript", "React"],
    siteUrl: "https://duke4-4.github.io/Meikles-Foundation/",
    codeUrl: "https://github.com/duke4-4/Meikles-Foundation",
    image: "/images/meikles.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My fully responsive portfolio website which was one of my first projects as a developer.",
    stack: ["HTML5", "CSS3", "BOOTSTRAP", "JavaScript"],
    codeUrl: "https://github.com/duke4-4/My-Portfolio",
    image: "/images/portfolio.png",
  },
  {
    title: "Herah Rhema",
    description:
      "A fully responsive E-commerce website built with WordPress and frontend technologies to ensure user-friendliness and a seamless experience.",
    stack: ["CSS3", "HTML5", "JQuery", "PHP", "MySql"],
    siteUrl: "https://rhema-herah.com/",
    image: "/images/rhema.png",
  },
  {
    title: "WeCodeZW",
    description:
      "My second WordPress website. The site offers a clean, modern design and a fully responsive layout, ensuring a seamless experience across all devices. I customized the theme and integrated essential plugins to enhance functionality.",
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySql"],
    siteUrl: "https://wecode.co.zw/",
    image: "/images/wecode.png",
  },
];

export type Skill = { name: string; icon: string };

export const skills: Skill[] = [
  { name: "HTML5", icon: "/images/html-5.png" },
  { name: "CSS3", icon: "/images/css-3.png" },
  { name: "Sass", icon: "/images/sass.png" },
  { name: "Figma", icon: "/images/figma.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "WordPress", icon: "/images/wordpress.png" },
  { name: "Adobe XD", icon: "/images/xd.png" },
  { name: "Version Control", icon: "/images/merge.png" },
  { name: "Github", icon: "/images/github.svg" },
];

export type SocialLink = { name: string; url: string; icon: string };

export const socialLinks: SocialLink[] = [
  { name: "Twitter", url: "https://x.com/Duke_4_4?t=V-S1H6MTO703xRcXln6gmw&s=09", icon: "/images/twitter.svg" },
  { name: "Github", url: "https://github.com/duke4-4", icon: "/images/github.svg" },
  { name: "WhatsApp", url: "https://wa.me/qr/LZHSAEG4ZWY7G1", icon: "/images/whatsapp.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tashinga-duke-chizengwe-132a09209", icon: "/images/linkedin.svg" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
