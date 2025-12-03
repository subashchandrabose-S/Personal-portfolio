// Project Filter System
let activeCategory = 'all';
let activeTech = 'all';

const categoryBtns = document.querySelectorAll('.category-btn');
const techDropdown = document.getElementById('tech-filter');
const projectCards = document.querySelectorAll('.project-card');

// Category filter
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeCategory = btn.dataset.category;
        filterProjects();
    });
});

// Technology filter  
techDropdown.addEventListener('change', () => {
    activeTech = techDropdown.value;
    filterProjects();
});

// Filter logic
function filterProjects() {
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardTechs = card.dataset.tech.split(',');

        const categoryMatch = activeCategory === 'all' || cardCategory === activeCategory;
        const techMatch = activeTech === 'all' || cardTechs.includes(activeTech);

        if (categoryMatch && techMatch) {
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
        }
    });
}
