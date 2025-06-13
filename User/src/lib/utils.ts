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
