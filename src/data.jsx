import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.gyazo.com/4644102a6dd25e7380f6c842b4e4fe6a.png",
    url: "https://vics-comfystore.netlify.app/",
    github: "https://github.com/victorsonet/comfy_store",
    title: "Comfy Store",
    text: "A site where you can purchase home fornitures and additional products like lamps etc. There is an opportunity to keep track of your cart and orders and you can use those by Registering or with the Demo user.",
  },
  {
    id: nanoid(),
    img: "https://i.gyazo.com/3473d7691cc91cb9b1c144954bcb7861.png",
    url: "https://vics-jobster-project.netlify.app/",
    github: "https://github.com/victorsonet/jobster-project",
    title: "Jobster",
    text: "A job tracking App where you can keep track of your job applications so you always know which phase are you in with them. Additional stats page provided.",
  },
  {
    id: nanoid(),
    img: "https://i.gyazo.com/382408ff74f75a45dfc9055f13613751.png",
    url: "https://vics-github-users-search.netlify.app/",
    github: "https://github.com/victorsonet/github_users",
    title: "Github Users Search",
    text: "A place where you can search for GitHub users profile informations (amount of repos, amount of followers etc.) with an included Login page and authentication.",
  },
];
