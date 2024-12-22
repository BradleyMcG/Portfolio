//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

function selectSkill(element) {
    // Remove the 'selected' class from all skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => skill.classList.remove('selected'));
  
    // Add the 'selected' class to the clicked skill
    element.classList.add('selected');
  
    // Update the description based on the selected skill
    const description = document.getElementById('skill-description');
    switch (element.textContent) {
      case 'PYTHON':
        description.textContent = 'Python is a versatile programming language used for machine learning, data science, and backend development.';
        break;
      case 'AWS/GCP/AZURE':
        description.textContent = 'AWS, GCP, and Azure are popular cloud platforms for deploying scalable applications and services.';
        break;
      case 'HTML/CSS/REACT':
        description.textContent = 'HTML, CSS, and React are essential tools for building responsive and interactive web applications.';
        break;
      default:
        description.textContent = 'Click a skill to see its description.';
    }
  }
  