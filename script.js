// import {portfolioData} from "./data.js";

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* TYPING ANIMATION*/
(function initTypingAnimation() {
    const titles = [
        { text: "Software Engineer",   color: "#f394c4" },  // pink (existing primary)
        { text: "Frontend Developer",  color: "#66e929" },  // red
        { text: "Fullstack developer",      color: "#a78bfa" },  // violet/purple
        { text: "Web Developer",       color: "#34d399" },  // emerald green
    ];

    const typedTextEl = document.getElementById("typed-text");
    const typedTitleEl = document.getElementById("typed-title");
    const glowEl       = document.getElementById("profile-glow");

    if (!typedTextEl || !typedTitleEl) return;

    let titleIndex = 0;
    let charIndex  = 0;
    let isDeleting = false;

    // Delays (ms)
    const TYPE_SPEED   = 80;
    const DELETE_SPEED = 45;
    const PAUSE_AFTER  = 1800;  // pause when fully typed
    const PAUSE_BEFORE = 300;   // pause before starting to delete

    function setColor(color) {
        typedTitleEl.style.color = color;
        if (glowEl) {
            // Update the CSS custom property on the glow element directly
            glowEl.style.background =
                `radial-gradient(ellipse 70% 60% at 50% 40%, ${color} 0%, transparent 70%)`;
        }
    }

    function tick() {
        const current = titles[titleIndex];
        const fullText = current.text;

        // Apply color of the current title
        setColor(current.color);

        if (!isDeleting) {
            // Type one character
            typedTextEl.textContent = fullText.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === fullText.length) {
                // Fully typed — pause then start deleting
                isDeleting = true;
                setTimeout(tick, PAUSE_AFTER);
                return;
            }
            setTimeout(tick, TYPE_SPEED);
        } else {
            // Delete one character
            typedTextEl.textContent = fullText.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // Fully deleted — move to next title
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(tick, PAUSE_BEFORE);
                return;
            }
            setTimeout(tick, DELETE_SPEED);
        }
    }

    // Kick off after a short initial delay
    setTimeout(tick, 600);
})();
/* ============================ */


function buildSkillsSection() {
    const skillsGrid = document.getElementById("skills-grid");

    if (!portfolioData || !portfolioData.skills) {
        console.error("portfolioData is missing");
        return;
    }

    skillsGrid.innerHTML = portfolioData.skills.map(skillCategory =>
        `<div class="skill-category">
            <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <div class="skill-list">
                ${skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join("")}
            </div>
        </div>`
    ).join("");
}

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

buildSkillsSection();
// console.log(portfolioData);

// const portfolioData = {
//     skills: [
//         {
//             category: "Programming Languages",
//             icon: "fas fa-code",
//             items: ["Java", "C#", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"]
//         },
//         {
//             category: "Development Tools",
//             icon: "fas fa-tools",
//             items: ["Git", "Docker", "GitLab", "CI/CD", "Build Pipelines", "Testing", "Linux", "Virtual Machines"]
//         },
//         {
//             category: "Frameworks & Technologies",
//             icon: "fas fa-database",
//             items: ["WordPress", "Bootstrap", "Sass", "Javalin", "REST APIs", "Databases", "UML", "SDLC"]
//         },
//         {
//             category: "Soft Skills",
//             icon: "fas fa-users",
//             items: ["Problem Solving", "Adaptability", "Communication", "Attention to Detail", "Mentoring"]
//         }
//     ],


// }

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



// // function myFunction() {
// //    var element = document.body;
// //    element.classList.toggle("dark-mode");
// // }




