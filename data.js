
const portfolioData = {
    skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS", "Dart" ]
        },
        {
            category: "Development Tools",
            icon: "fas fa-tools",
            items: ["Git", "Docker", "GitLab", "CI/CD", "Build Pipelines", "Unit Testing", "Virtual Machines", "JetBrains", "VS Code"]
        },
        {
            category: "Frameworks & Technologies",
            icon: "fas fa-database",
            items: ["Bootstrap", "Javalin", "REST APIs","BaaS","Databases","Django", "Flask", "Flutter", "Tailwind" ]
        },
        {
            category: "Soft Skills",
            icon: "fas fa-users",
            items: ["Creativity","Critical thinking", "Analytical Problem Solving", "Adaptability", 
                "Effective Communication", "Active listening", "Team-oriented collaboration",
                , "Discipline"
            ]
        }
    ],
}

// buildSkillsSection();

// function buildSkillsSection() {
//     const skillsGrid = document.getElementById('skills-grid');
//     skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => 
//         `<div class="skill-category">
//             <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
//             <div class="skill-list">
//                 ${skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
//             </div>
//         </div>`
//     ).join('');
// }

// export default portfolioData;