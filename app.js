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

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const textElements = document.querySelectorAll('.about .name, .about .title, .about .me, .about .bio, .about a, .orange .exp, .orange .des, .orange .icons');
    
    
    const navbarPosition = navbar.getBoundingClientRect().bottom;
    
    
    textElements.forEach(function(textElement) {
        
        const textElementPosition = textElement.getBoundingClientRect().top;
        
        
        if (textElementPosition < navbarPosition) {
            
            textElement.style.opacity = '0';
        } else {
            
            textElement.style.opacity = '1';
        }
    });
});



  
  