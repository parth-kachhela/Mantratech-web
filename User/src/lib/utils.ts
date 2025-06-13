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

export const leaders = [
  {
    name: "Divyesh Kachhela",
    role: "CEO, MantraTechSystem",
    image: "/ceo.jpeg",
    bio: "Divyesh has transformed MantraTech into a tech powerhouse through vision-driven leadership and relentless innovation.",
  },
  {
    name: "Parth kachhela",
    role: "President, MantraTechSystem",
    image: "/president.jpeg",
    bio: "Parth pioneered operational excellence, leading the team to deliver 100+ successful projects across 3 cities.",
  },
];

export const services = [
  {
    title: "Custom Web Development",
    image: "/images/web.jpg",
    points: [
      "Responsive, SEO-friendly websites",
      "Built with React, Next.js, and Tailwind",
      "Fully scalable and performance-optimized",
    ],
  },
  {
    title: "Mobile App Development",
    image: "/images/app.jpg",
    points: [
      "Cross-platform iOS/Android apps",
      "Built with Flutter and React Native",
      "Smooth animations and native experience",
    ],
  },
  {
    title: "AI & ML Solutions",
    image: "/images/ai.jpg",
    points: [
      "Custom AI model integration",
      "Predictive analytics and automation",
      "Smart workflows with real-world impact",
    ],
  },
  {
    title: "UI/UX Design",
    image: "/images/ui:ux.jpg",
    points: [
      "Wireframes and hi-fi prototypes",
      "Figma, Adobe XD, and design systems",
      "User-centered accessible design",
    ],
  },
  {
    title: "Cybersecurity & IT Consulting",
    image: "/images/cyber.png",
    points: [
      "Risk assessment & compliance",
      "Infrastructure hardening",
      "Strategic digital transformation advice",
    ],
  },
];

export const industries = [
  {
    title: "Healthcare",
    icon: "/industries/healthcare.jpg",
    description:
      "HIPAA-compliant apps, telemedicine platforms, and smart diagnostics for modern healthcare.",
  },
  {
    title: "Finance",
    icon: "/industries/banking.jpg",
    description:
      "Secure fintech solutions, AI-based fraud detection, and seamless payment systems.",
  },
  {
    title: "Education",
    icon: "/industries/education.png",
    description:
      "E-learning platforms, virtual classrooms, and student analytics built for the future.",
  },
  {
    title: "Retail",
    icon: "/industries/retail.jpg",
    description:
      "Omnichannel eCommerce, inventory automation, and CRM systems that boost conversions.",
  },
  {
    title: "Logistics",
    icon: "/industries/logistics.jpg",
    description:
      "Fleet tracking, warehouse automation, and route optimization tailored for logistics.",
  },
  {
    title: "Communication",
    icon: "/industries/communication.jpg", // Make sure this icon exists in your public/icons folder
    description:
      "We build real-time messaging platforms, video conferencing tools, and VoIP systems to streamline communication.",
  },
];
