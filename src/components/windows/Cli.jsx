import React from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"
import Terminal from "./Terminal";
import "./Terminal.scss";

const Cli = ({
    windowName,
    setWindows,
    isActive,
    zIndex,
    onFocus,
}) => {
    const commands = {
    about: {
        description: "About me",
        usage: "about",
        fn: () => `Hi! I'm Akarshak Guleria, a B.Tech Computer Science Engineering student passionate about Full Stack Development, Artificial Intelligence, and building interactive web applications. I enjoy solving Data Structures & Algorithms problems and creating polished user experiences like this macOS-inspired portfolio.`
    },

    skills: {
        description: "List technical skills",
        usage: "skills",
        fn: () => `Languages
• JavaScript
• C++
• Python
• SQL

Frontend
• React.js
• HTML5
• CSS3
• SCSS

Backend
• Node.js
• Express.js

Database
• MongoDB
• MySQL

Tools
• Git
• GitHub
• VS Code
• Vite
• Postman

Other
• Data Structures & Algorithms
• REST APIs
• Object Oriented Programming
• NLP
• Machine Learning`
    },

    projects: {
        description: "View projects",
        usage: "projects",
        fn: () => `1. macOS Portfolio Desktop (React)
2. Automatic Prompt Quality Scoring (NLP)
3. AI Tic Tac Toe
4. Portfolio Website
5. Interactive CLI Terminal
6. Multiple Data Structures & Algorithms Projects`
    },

    experience: {
        description: "Experience",
        usage: "experience",
        fn: () => `🎓 B.Tech Computer Science Engineering Student

• Building Full Stack Applications
• Strong DSA & Problem Solving
• React Developer
• NLP Research Project
• Active Open Source Learner`
    },

    contact: {
        description: "Contact information",
        usage: "contact",
        fn: () => `Name : Akarshak Guleria

Email : guleriaakarshak90@gmail.com

Phone : +91 8219112925`
    },

    github: {
        description: "Open GitHub",
        usage: "github",
        fn: () => {
            window.open(
                "https://github.com/Akarshak78",
                "_blank"
            );
            return "Opening GitHub profile...";
        }
    },

    resume: {
        description: "Open Resume",
        usage: "resume",
        fn: () => {
            window.open("/resume.pdf", "_blank");
            return "Opening Resume...";
        }
    },

    social: {
        description: "LinkedIn Profile",
        usage: "social",
        fn: () => {
            window.open(
                "https://www.linkedin.com/in/akarshak-guleria-ak47/",
                "_blank"
            );

            return "Opening LinkedIn...";
        }
    },

    whoami: {
        description: "Current user",
        usage: "whoami",
        fn: () => "Akarshak Guleria"
    },

    pwd: {
        description: "Present working directory",
        usage: "pwd",
        fn: () => "/Users/akarshak/Desktop/Portfolio"
    },

    ls: {
        description: "List files",
        usage: "ls",
        fn: () => `Desktop
Documents
Projects
Resume.pdf
Skills
GitHub
LinkedIn`
    },

    neofetch: {
        description: "System information",
        usage: "neofetch",
        fn: () => `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.

OS: macOS Portfolio
Host: Akarshak's Portfolio
Kernel: React 19
Shell: Portfolio CLI
Terminal: React Terminal
CPU: Full Stack Developer
Memory: Unlimited Curiosity
Uptime: Always Learning 🚀
`
    },

    echo: {
        description: "Echo text",
        usage: "echo <text>",
        fn: (...args) => args.join(" ")
    }
};

   const welcomeMessage = `
    Welcome to Akarshak's Portfolio CLI  

Hi! 👋 I'm Akarshak Guleria.

Welcome to my interactive macOS-inspired portfolio.

Available Commands

about         About Me
skills        Technical Skills
projects      Featured Projects
experience    Education & Experience
contact       Contact Details
github        Open GitHub
resume        Open Resume
social        Open LinkedIn

whoami
pwd
ls
neofetch

help
clear

Enjoy exploring 🚀
`;

    return (
        <MacWindow
    windowName={windowName}
    setWindows={setWindows}
    isActive={isActive}
    zIndex={zIndex}
    onFocus={onFocus}
>
            <div className="cli-window">
    <Terminal
        commands={commands}
        welcomeMessage={welcomeMessage}
    />
</div>
        </MacWindow>
    )
}

export default Cli