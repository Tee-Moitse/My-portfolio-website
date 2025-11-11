const portfolioData = {
    skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["Java", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"]
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

// export default portfolioData;