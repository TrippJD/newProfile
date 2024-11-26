import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "Josh Tripp",
  subTitle:
    "Crafting Seamless Digital Experiences with Modern Web Technologies",
  highlight: ["Experiences"],
};

export const profileCard = {
  title: "Joshua Tripp",
  subTitle: "Fullstack Software Developer",
  body: `Driven to create intuitive, scalable web applications with a focus on user experience. Continuously seeking innovative technologies and refining best practices to enhance development workflows.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/jdtripp",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/TrippJD",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath:
      "https://res.cloudinary.com/djmdikgs1/image/upload/v1732087387/Tripp-image.png",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
