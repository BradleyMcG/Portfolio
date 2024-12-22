// Handle hamburger menu toggle
const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 

    // Toggle menu visibility and icons
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else { 
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    } 
});

// Handle skill selection and description update
function selectSkill(element) {
    // Remove 'selected' class from all skill elements
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => skill.classList.remove('selected'));
  
    // Add 'selected' class to the clicked skill
    element.classList.add('selected');
  
    // Update skill description dynamically
    const description = document.getElementById('skill-description');
    const skillDescriptions = {
        'PYTHON': 'Python is a versatile programming language used for machine learning, data science, and backend development.',
        'AWS/GCP/AZURE': 'AWS, GCP, and Azure are popular cloud platforms for deploying scalable applications and services.',
        'HTML/CSS/REACT': 'HTML, CSS, and React are essential tools for building responsive and interactive web applications.'
    };
  
    // Set description or fallback message
    description.textContent = skillDescriptions[element.textContent] || 'Click a skill to see its description.';
}
