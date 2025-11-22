import {portfolioData} from "./data.js";

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
// console.log(portfolioData);

const portfolioData = {
    skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["Java", "C#", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"]
        },
        {
            category: "Development Tools",
            icon: "fas fa-tools",
            items: ["Git", "Docker", "GitLab", "CI/CD", "Build Pipelines", "Testing", "Linux", "Virtual Machines"]
        },
        {
            category: "Frameworks & Technologies",
            icon: "fas fa-database",
            items: ["WordPress", "Bootstrap", "Sass", "Javalin", "REST APIs", "Databases", "UML", "SDLC"]
        },
        {
            category: "Soft Skills",
            icon: "fas fa-users",
            items: ["Team Leadership", "Problem Solving", "Adaptability", "Communication", "Attention to Detail", "Mentoring", "Project Management"]
        }
    ],

    projects: [
        {
            title: "Salon Appointment Management System",
            description: "A comprehensive system that allows both salon staff and clients to efficiently manage, save, and email appointment information. Features intuitive scheduling, automated notifications, and seamless communication.",
            skills: ["Java", "Database", "Email API"],
            link: "https://github.com/NkosiMlaba/SalonAppointmentManagement"
        },
        {
            title: "Facial Recognition Attendance System",
            description: "An innovative attendance tracking system using facial recognition technology. Provides accurate, contactless attendance monitoring with real-time processing and comprehensive reporting capabilities.",
            skills: ["Python", "OpenCV", "Machine Learning"],
            link: "https://github.com/NkosiMlaba/Facial-Recognition-Attendance-System"
        },
        {
            title: "AI Resume Builder",
            description: "A dynamic web application for creating ATS-friendly, job-specific resumes and generating tailored cover letters. Leverages AI to optimize content for specific job requirements and industries.",
            skills: ["JavaScript", "AI Integration", "Web Development"],
            link: "https://github.com/NkosiMlaba/Dynamic-Resume-Builder-with-AI"
        }
    ]
}

buildSkillsSection();

function buildSkillsSection() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => 
        `<div class="skill-category">
            <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <div class="skill-list">
                ${skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        </div>`
    ).join('');
}



// function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
// }




