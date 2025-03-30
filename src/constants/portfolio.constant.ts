import { PortfolioItem } from "../types";

// Define the base path (use public folder if deploying to GitHub Pages)
export const ASSETS_BASE_PATH = `/assets`;

// Function to dynamically generate asset paths
export const getAssetPath = (
  category: keyof typeof AssetPaths.Portfolio,
  filename: string
) => `${AssetPaths.Portfolio[category]}/${filename}`;

export const AssetPaths = {
  Portfolio: {
    Awards: `${ASSETS_BASE_PATH}/portfolio/awards`,
    Certificates: `${ASSETS_BASE_PATH}/portfolio/certificates`,
    Events: `${ASSETS_BASE_PATH}/portfolio/events`,
    Recognitions: `${ASSETS_BASE_PATH}/portfolio/recognitions`,
  },
};

// Portfolio Data
export const PortfolioItems: PortfolioItem[] = [
  {
    category: "Recognitions",
    imageUrl: getAssetPath("Recognitions", "A&B_Q1.jpg"),
    title: "Above & Beyond 2024",
  },
  {
    category: "Recognitions",
    imageUrl: getAssetPath("Recognitions", "SpotAward_JUN2023.jpg"),
    title: "Spot Award June 2023",
  },
  {
    category: "Recognitions",
    imageUrl: getAssetPath("Recognitions", "SpotAward_JAN2023.jpg"),
    title: "Spot Award January 2023",
  },
  {
    category: "Recognitions",
    imageUrl: getAssetPath("Recognitions", "SpotAward_Aug2022.jpg"),
    title: "Spot Award August 2022",
  },
  {
    category: "Certifications",
    imageUrl: getAssetPath("Certificates", "AWS_SAA.jpg"),
    link: "https://www.credly.com/badges/ffa2737a-55cd-4b1e-b3f0-c59a0d54da3e/public_url",
    title: "AWS SAA CO3",
  },
  {
    category: "Certifications",
    imageUrl: getAssetPath("Certificates", "GCP_AI_Badge.jpg"),
    link: "https://www.credly.com/badges/4d25f9df-fdc1-436e-8093-87ba7fc13797/public_url",
    title:
      "Develop Advanced Enterprise Search and Conversation Applications Skill Badge",
  },
  {
    category: "Certifications",
    imageUrl: getAssetPath("Certificates", "Coursera_Angular.jpg"),
    link: "https://coursera.org/share/b2b0ca4720b96345fcd02440b8e6033c",
    title: "SPA with AngularJS",
  },
  {
    category: "Certifications",
    imageUrl: getAssetPath("Certificates", "NPTEL_Ethical_Hacking.jpg"),
    title: "Ethical Hacking",
  },
  {
    category: "Certifications",
    imageUrl: getAssetPath("Certificates", "NPTEL_Python.jpg"),
    title: "Programming, Data Structures and Algorithms using Python",
  },
  {
    category: "Awards",
    imageUrl: getAssetPath("Awards", "Hackathon_2022.jpg"),
    title: "Winner of Hackathon 2022",
  },
  {
    category: "Awards",
    imageUrl: getAssetPath("Awards", "Hackathon_2023.jpg"),
    title: "Runner up of Hackathon 2023",
  },
  {
    category: "Awards",
    imageUrl: getAssetPath("Awards", "Hackathon_2024.jpg"),
    title: "Winner of Hackathon 2024",
  },
  {
    category: "Events",
    imageUrl: getAssetPath("Events", "Masterclass_2023.jpg"),
    title: "Masterclass on 2023",
  },
  {
    category: "Events",
    imageUrl: getAssetPath("Events", "One_Presidio_2022.jpg"),
    title: "One Presidio Cultural Event 2022",
  },
  {
    category: "Events",
    imageUrl: getAssetPath("Events", "One_Presidio_2023.jpg"),
    title: "One Presidio Cultural Event 2023",
  },
  {
    category: "Events",
    imageUrl: getAssetPath("Events", "AZ_Conf_2023.jpg"),
    title: "AZ Cloud & AI Conference",
  },
];
