import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "E-Commerce Platforms",
    projectUrls: {
      site: {
        url: "https://modere.com",
        icon: <RiExternalLinkLine size={20} />,
      },
    },
    imageUrl:
      "https://res.cloudinary.com/djmdikgs1/image/upload/v1732948208/modere-home.png",
    description: `Building robust e-commerce platforms that deliver seamless shopping experiences`,
    tech: ["TypeScript", "Next.js", "TailwindCSS", "ContentStack"],
    cards: {
      a: {
        title: "Crafting Intuitive and Engaging UX/UI Designs",
        text: `Focused on creating intuitive and visually appealing user experiences, I designed interfaces that prioritize usability and accessibility. By combining modern design principles with user-centered methodologies, I ensured the final product is both engaging and easy to navigate.`,
      },
      b: {
        title: "Integration with Headless CMS ContentStack",
        text: `Utilizing the robust features of ContentStack, I implemented seamless integration to efficiently manage and deliver content. This solution enables dynamic updates, streamlines content workflows, and ensures scalability for evolving project needs.`,
      },
    },
  },
  {
    title: "Content pages",
    projectUrls: {
      site: {
        url: "https://www.modere.com/collagensciences",
        icon: <RiExternalLinkLine size={20} />,
      },
      //   repo: {
      //     name: "",
      //     owner: "",
      //     showStarCount: true,
      //   },
    },
    imageUrl:
      "https://res.cloudinary.com/djmdikgs1/image/upload/v1732948214/content-page.png",
    description: `A project showcasing the creation of compelling content pages for eCommerce platforms, designed to promote products and drive customer actions.`,
    tech: ["TypeScript", "Next.js", "TailwindCSS", "SASS"],
    cards: {
      a: {
        title: "Engaging Product Promotion Pages",
        text: `Designed and developed content pages tailored to showcase eCommerce products with high-impact visuals and persuasive messaging. These pages effectively highlight product value and guide customers toward making a purchase.`,
      },
      b: {
        title: "Driving Conversions with Effective CTAs",
        text: `By combining well-placed call-to-action buttons and strategic design elements, I created pages that deliver a seamless shopping experience. This approach ensures a high conversion rate, turning visitors into loyal customers.`,
      },
    },
  },
];
