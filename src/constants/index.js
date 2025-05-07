import web from "../assets/icons/web.png";
import html5 from "../assets/icons/html5.png";
import react from "../assets/icons/react.png";
import angular from "../assets/icons/angular.png";
import python from "../assets/icons/python.png";
import firebase from "../assets/icons/google-firebase.png";
import backbone from "../assets/icons/backbone.png";
import javascript from "../assets/icons/javascript.png";
import nodejs from "../assets/icons/nodejs.png";
import bootstrap from "../assets/icons/bootstrap.png";
import cLang from "../assets/icons/C_Programming_Language.svg";
import flask from "../assets/icons/Flask_logo.svg";
import golang from "../assets/icons/Go_Logo_Blue.svg";
import typescript from "../assets/icons/Typescript_logo_2020.svg";
import java from "../assets/icons/Java_programming_language_logo.svg";
import rLang from "../assets/icons/th-2.jpeg";
import sql from "../assets/icons/th.jpeg";
import matlab from "../assets/icons/Matlab_Logo.png";

export const skills = [
    {
        title: "Python",
        icon: python,
    },
    {
        title: "Java",
        icon: java,
    },
    {
        title: "JavaScript",
        icon: javascript,
    },
    {
        title: "TypeScript",
        icon: typescript,
    },
    {
        title: "R",
        icon: rLang,
    },
    {
        title: "C",
        icon: cLang,
    },
    {
        title: "Golang",
        icon: golang,
    },
    {
        title: "MATLAB",
        icon: matlab,
    },
    {
        title: "React",
        icon: react,
    },
    {
        title: "Node.js",
        icon: nodejs,
    },
    {
        title: "HTML5/CSS3",
        icon: html5,
    },
    {
        title: "Bootstrap",
        icon: bootstrap,
    },
    {
        title: "Flask",
        icon: flask,
    },
    {
        title: "SQL",
        icon: sql,
    },
    {
        title: "Pandas",
        icon: python,
    }
    ];

export const navList = [
    { id: 1, data: "Home" },
    { id: 2, data: "Tech" },
    { id: 3, data: "Skills" },
    { id: 4, data: "Experience" },
    { id: 5, data: "Projects" },
    { id: 5, data: "Contact" },
];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Microsoft",
        icon: web,
        iconBg: "#383E56",
        date: "May 2024 – August 2024",
        points: [
            "Worked on Microsoft Teams Performance team to build a tool that analyzes sessions and provides insights for developers to triage bugs.",
            "Enabled faster troubleshooting and bug resolution through improved diagnostic capabilities.",
            "Collaborated with cross-functional teams to implement performance monitoring solutions."
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "LinkedIn Corporation",
        icon: web,
        iconBg: "#0077B5", // LinkedIn blue
        date: "May 2023 – August 2023",
        points: [
            "Worked in an agile-based environment to complete and ship two projects under the LinkedIn Premium Org.",
            "Implemented new Settings and Cancellation Features for Recruiter and Sales Navigator Subscriptions.",
            "Developed new algorithms to redirect users to an interactive Admin Center to increase accessibility to subscription data and actions.",
            "Implemented scalable service architectures using dynamic and asynchronous APIs such as REST+JSON.",
            "Wrote Unit and integration tests in JUnit, Mockito, and QPROD and achieved 90% on test coverage."
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Legal Fundi",
        icon: web,
        iconBg: "#E6DEDD",
        date: "May 2022 – July 2023",
        points: [
            "Built and deployed a React toolbar Component using HTML, CSS, and Bootstrap to enable users to search and add tools to their legal workspaces.",
            "Implemented algorithms using JavaScript and XML to enable state switching based on reactivity of toolbar components.",
            "Decreased latency and time users spend searching for data and increased productivity by 67%."
        ],
    }
];

export const technologies = [
    {
        name: "HTML 5",
        icon: html5,
    },
    {
        name: "Backbone",
        icon: backbone,
    },
    {
        name: "Firebase",
        icon: firebase, 
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React",
        icon: react,
    },
];

export const projects = [
    {
        name: "YouTube Video Filter",
        image: python,
        shortDescription: "Advanced YouTube video search with custom filters.",
        fullDescription:
            "A fully functional web application that enables users to search for videos on YouTube using advanced filters. Built with Python and SQL, deployed on Heroku with 175+ active users.",
        techStack: ["Python", "SQL", "Heroku", "Web Development"],
        demoLink: "#"
    },
    {
        name: "Wack-A-Mascot",
        image: python,
        shortDescription: "Interactive two-player online web game.",
        fullDescription:
            "A fully functional two-player interactive online web game using socket API. Features include collision detection, game logic, and event handling built with Python and the Pygame engine. The game implements algorithms to increase randomness and difficulty based on game length and user accuracy.",
        techStack: ["Python", "Pygame", "Socket API", "Game Development"],
        demoLink: "#"
    },
    {
        name: "Microsoft Teams Performance Tool",
        image: web,
        shortDescription: "Session analysis tool for Microsoft Teams developers.",
        fullDescription:
            "Developed during my internship at Microsoft, this tool analyzes Teams sessions and provides insights to help developers triage bugs. It enables faster troubleshooting and bug resolution through improved diagnostic capabilities.",
        techStack: ["JavaScript", "TypeScript", "React", "Azure"],
        demoLink: "#"
    },
    {
        name: "LinkedIn Subscription Features",
        image: web,
        shortDescription: "Enhanced Settings and Cancellation Features for LinkedIn Premium.",
        fullDescription:
            "Implemented as part of the LinkedIn Premium organization, this project added new Settings and Cancellation Features for Recruiter and Sales Navigator Subscriptions. It includes an interactive Admin Center to increase accessibility to subscription data and actions.",
        techStack: ["Java", "REST API", "JUnit", "SQL"],
        demoLink: "#"
    },
];



    