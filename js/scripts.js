function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
     setTimeout(() => {
        const toggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.getElementById('alienNavbar');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    }, 300);
}
function activatePowers() {
    const modal = document.getElementById('powerModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        const cards = document.querySelectorAll('.info-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = `cardSlideIn 0.5s ease forwards`;
            }, index * 100);
        });
    }, 300);
}

function closePowerModal() {
    const modal = document.getElementById('powerModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; 
}


function downloadCV() {
    const cvUrl = './Mohammad_Al_Soliman.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openEmail() {
    const email = 'slymanmhamad86@gmail.com';
    const subject = 'Contact from Portfolio - Mohammad Al Soliman';
    const body = 'Hello Mohammad,%0D%0A%0D%0AI found your portfolio and would like to discuss...';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
}


// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePowerModal();
    }
});

// keyboard navigation for power orbs
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('power-orb')) {
            event.preventDefault();
            activateOrb(focusedElement);
        }
    }
});

// keyboard navigation for nav items
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('nav-item')) {
            event.preventDefault();
            const sectionId = focusedElement.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            if (sectionId) {
                scrollToSection(sectionId);
            }
        }
    }
});

// Animation keyframe for card entrance
const style = document.createElement('style');
style.textContent = `
    @keyframes cardSlideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// smooth scrolling for all browsers
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical resources
    const img = new Image();
    img.src = 'my-image.jpg';
    
    // Add loading animation
    const powerOrbs = document.querySelectorAll('.power-orb');
    powerOrbs.forEach((orb, index) => {
        orb.style.animationDelay = `${index * 0.1}s`;
    });
});



