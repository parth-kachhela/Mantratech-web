import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Capabilities = [
  {
    title: "Custom Web Development",
    description:
      "SEO-ready, responsive, scalable solutions using modern frameworks.",
  },
  {
    title: "Mobile App Development",
    description:
      "Flutter and React Native apps delivering seamless UX across platforms.",
  },
  {
    title: "AI & ML Solutions",
    description:
      "Custom models, automation, and predictive systems for business intelligence.",
  },
  {
    title: "Cybersecurity & IT Consulting",
    description:
      "Compliance, infrastructure hardening, and strategic digital advisory.",
  },
];

export const IndustriesName = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Logistics",
  "Communication",
];

interface TeamState {
  ProjectsDelivered: string;
  EmployeesHiredMonthly: string;
  CitiesWeServe: string;
  ClientSatisfaction: string;
}

export const TeamState: TeamState = {
  ProjectsDelivered: "100+",
  EmployeesHiredMonthly: "30+",
  CitiesWeServe: "2+",
  ClientSatisfaction: "99%",
};

export const teams = [
  {
    name: "CodeCrafters",
    description: "Focused on building scalable web apps for modern businesses.",
    members: ["/member1.jpg", "/member2.jpg", "/member3.jpg"],
    fullDetails:
      "CodeCrafters specialize in full-stack web development using React, Node.js, and modern architecture patterns. They deliver projects with performance, security, and SEO in mind.",
  },
  {
    name: "AppStormers",
    description: "Building cross-platform mobile experiences.",
    members: ["/member4.jpg", "/member5.jpg", "/member6.jpg"],
    fullDetails:
      "AppStormers team crafts engaging mobile apps using Flutter, React Native and native tools, ensuring beautiful design and top performance on iOS and Android.",
  },
  {
    name: "BrainBotics",
    description: "Pioneering AI & ML-based software innovations.",
    members: ["/member7.jpg", "/member8.jpg", "/member9.jpg"],
    fullDetails:
      "BrainBotics explores AI/ML-driven solutions, including predictive analytics, NLP and smart automation for industries like fintech, healthtech, and logistics.",
  },
  {
    name: "PixelPulse",
    description: "Designers of immersive UI/UX experiences.",
    members: ["/member10.jpg", "/member11.jpg", "/member12.jpg"],
    fullDetails:
      "PixelPulse enhances user journeys through intuitive, accessible, and stunning design experiences. They specialize in Figma, Adobe XD, and design systems.",
  },
];
