import { ResumeData } from "../types/resume.types";
import { AssetPaths } from "./app.constant";

export const ProfessionalDetails: ResumeData[] = [
  {
    title: "Senior Engineer",
    period: "Feb 2023 - Present",
    content: [
      {
        description: "Presidio",
        badge: "EDI Healthcare - Webscraping",
        details: [
          "Developed a web scraping solution using Puppeteer with NodeJS to extract patient eligibility information from multiple payer websites.",
          "Managed session handling for multiple provider credentials to ensure seamless data retrieval.",
          "Automated MFA implementation to streamline user authentication.",
          "Conducted a meticulous data mapping process to transform scraped data into a standardized structure.",
          "Integrated OpenAI to convert human-readable limitation text into JSON format.",
          "Effectively handled dynamic webpage flows and managed error scenarios.",
          "Managed high volumes of eligibility requests while ensuring scalability and minimizing the load on payer portals.",
        ],
        image: `${AssetPaths.Portfolio.Recognitions}/A&B_Reveal.jpg`,
      },
      {
        badge: "EDI Healthcare - Application support and Internal development",
        details: [
          "Gained expertise in the Apache Wicket framework and contributed to its implementation.",
          "Managed and worked across 8+ applications, understanding their workflows and functionalities.",
          "Developed new features, debugged, and resolved high-priority issues efficiently.",
          "Worked extensively with 15+ MySQL databases, ensuring data integrity and performance optimization.",
          "Handled EDI file format data for claims, including parsing and writing processes.",
          "Operated as a single-handed resource, independently managing tasks and delivering results.",
        ],
      },
    ],
  },

  {
    title: "Software Engineer",
    period: "Jun 2021 - Jan 2023 (1 year 7 months)",
    content: [
      {
        description: "Presidio",
        badge: "Healthcare Provider Security Application",
        details: [
          "Developed a Ping Identity-based Security and OPS Console Application for a U.S.-based Healthcare Data Provider.",
          "Served as a Full-stack Developer, focusing extensively on security services implementation.",
          "Designed and developed various AWS services such as API Gateway, Lambda, SNS, SES, SQS, and DynamoDB.",
          "Built a custom UI with Angular for end-user authentication, including multi-factor authentication (MFA).",
          "Designed an LDAP schema integrated with the SCIM API in Ping Directory for internal user data storage.",
          "Implemented MFA for internal users by integrating PingOne with PingFederate.",
          "Managed configurations for both internal and third-party authentication and authorization in PingFederate.",
          "Developed Machine-to-Machine APIs leveraging Ping-provided APIs without exposing them.",
          "Utilized PingOne for MFA implementation.",
          "Developed backend APIs using the NestJS framework.",
          "Created front-end unit test cases with Karma and Jasmine frameworks.",
          "Implemented backend unit test cases using the JEST framework.",
          "Worked with FHIR Standard resources to ensure compliance with healthcare data standards.",
        ],
      },
      {
        badge: "EDH application for Healthcare",
        details: [
          "Contributed to a cloud-based .NET project.",
          "Developed data transformation logic and optimized queries.",
          "Transformed CDC data from EHR systems into FHIR format.",
        ],
      },
      {
        badge: "U.S based Hotel Management System",
        details: [
          "Developed APIs for handling SOAP requests.",
          "Integrated with APIGEE to receive and validate SOAP XML requests.",
          "Implemented and configured various APIGEE policies.",
          "Worked with Node.js within the APIGEE hosted target environment.",
          "Integrated the APIGEE proxy with AWS S3 for data storage and retrieval.",
        ],
      },
    ],
  },
  {
    title: "Software Developer - Internship",
    period: "Sep 2020 - Apr 2021 (8 months)",
    content: [
      {
        description: "Presidio",
        badge: "E-Commerce Application",
        details: [
          "UI designs were achieved through bootstrap integration on HTML along with custom CSS code.",
          "Spring boot framework used along with JSP page render.",
          "JavaScript employed for responsive functionalities in UI.",
          "Integrated Hibernate framework and SQL transactions.",
          "Utility functions and services were created and made accessible all over the control Centre",
        ],
      },
      {
        badge: "IT Ticketing system",
        details: [
          "Worked in an 8-member team to develop a web-based IT ticketing system.",
          "Implemented SSO login using Enterprise application and Azure Active Directory.",
          "Designed UI using Angular and Tailwind CSS.",
          "Implemented Authentication using Cognito.",
          "Designed AWS cloud formation templates for Cognito and S3 proxy.",
          "Implemented SES for sending reports to users.",
          "Coordinated with the team to give the best results within the stipulated time.",
        ],
      },
    ],
  },
];
