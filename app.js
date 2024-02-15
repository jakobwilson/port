document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.about .name');
    const titleElement = document.querySelector('.about .title');

    
    setTimeout(function() {
        nameElement.classList.add('fade-in');
        titleElement.classList.add('fade-in');
    }, 200); 
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};