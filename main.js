// Navigation
const pulseNav = document.getElementById('pulseNav');
const mainNav = document.getElementById('mainNav');
const closeNav = document.getElementById('closeNav');
const navLinks = document.querySelectorAll('.nav-link');

pulseNav.addEventListener('click', () => {
    mainNav.classList.add('active');
});

closeNav.addEventListener('click', () => {
    mainNav.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    fadeInObserver.observe(element);
});

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = `${progress}%`;
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Portfolio
const portfolioData = [
    {
        id: 1,
        title: 'Modern Luxury Brand',
        category: 'branding',
        image: 'https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg',
        description: 'Complete brand identity redesign for a luxury fashion label.'
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        category: 'web',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        description: 'High-conversion e-commerce website with seamless checkout experience.'
    },
    {
        id: 3,
        title: 'Tech Startup Positioning',
        category: 'strategy',
        image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
        description: 'Market positioning and growth strategy for an AI startup.'
    },
    {
        id: 4,
        title: 'Premium Product Launch',
        category: 'branding',
        image: 'https://images.pexels.com/photos/3178744/pexels-photo-3178744.jpeg',
        description: 'End-to-end product launch strategy for a premium gadget.'
    },
    {
        id: 5,
        title: 'Real Estate Website',
        category: 'web',
        image: 'https://images.pexels.com/photos/7173056/pexels-photo-7173056.jpeg',
        description: 'Luxury real estate platform with virtual tours and booking system.'
    },
    {
        id: 6,
        title: 'Restaurant Rebranding',
        category: 'branding',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
        description: 'Complete rebranding for an upscale restaurant chain.'
    }
];

const portfolioGrid = document.querySelector('.portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderPortfolio(items) {
    portfolioGrid.innerHTML = items.map(item => `
        <div class="portfolio-item fade-in" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="category">${item.category}</span>
            </div>
        </div>
    `).join('');

    // Reattach observers to new items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        fadeInObserver.observe(item);
    });
}

renderPortfolio(portfolioData);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter portfolio items
        const filteredItems = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === filter);
        
        renderPortfolio(filteredItems);
    });
});

// Booking Types
const bookingTypes = [
    {
        id: 'discovery',
        name: 'Discovery Call',
        duration: '30 min',
        description: 'Initial consultation to discuss your needs and explore how I can help.',
        isPaid: false
    },
    {
        id: 'strategy',
        name: 'Strategy Session',
        duration: '60 min',
        description: 'Deep dive into your brand challenges with actionable recommendations.',
        isPaid: true
    },
    {
        id: 'workshop',
        name: 'Custom Workshop',
        duration: 'Custom',
        description: 'Tailored workshop for your team on brand strategy or design thinking.',
        isPaid: true
    }
];

const bookingTypesContainer = document.querySelector('.booking-types');

bookingTypesContainer.innerHTML = bookingTypes.map(type => `
    <div class="booking-type" data-type="${type.id}">
        <div class="booking-type-header">
            <h4>${type.name}</h4>
            <span class="duration">${type.duration}</span>
        </div>
        <p>${type.description}</p>
        <div class="booking-type-footer">
            ${type.isPaid 
                ? '<span class="text-signature">Paid consultation</span>' 
                : '<span class="text-success">Free consultation</span>'
            }
        </div>
    </div>
`).join('');

// Form Handling
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real implementation, this would subscribe the user to a newsletter
    alert('Thank you for subscribing to my newsletter!');
    newsletterForm.reset();
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();