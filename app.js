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



function handleScroll() {
    var experienceSection = document.getElementById('experience');
  
    if (isInViewport(experienceSection)) {
      experienceSection.classList.add('fade-in');
    } else {
      experienceSection.classList.remove('fade-in');
    }
  }
  

  window.addEventListener('scroll', handleScroll);
  
  