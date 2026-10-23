// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// CLose the menu when a link is cliked (for mobile)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// smooth scroll effect for navigations
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Form 1: Buttons Logic "Buy Now" in the Navbar
const buyNowBtn = document.getElementById('buy-now-btn');
const planSelectionModal = document.getElementById('plan-selection-modal');
const closePlanModalBtn = document.getElementById('close-plan-modal');
const modalPlanBtns = document.querySelectorAll('.modal-plan-btn');

// Open the app and select a package when "Buy Now" is clicked.
buyNowBtn.addEventListener('click', function() {
    navbar.classList.remove('active'); // Close the app modal if it's open
    planSelectionModal.classList.add('active');
});

// Close the app and select a package (buttons X)
closePlanModalBtn.addEventListener('click', function() {
    planSelectionModal.classList.remove('active');
});

// Close the app and select a package (click outside the app area)
planSelectionModal.addEventListener('click', function(e) {
    if (e.target === planSelectionModal) {
        planSelectionModal.classList.remove('active');
    }
});


// Form 2: Pre-Order form logic
const buyButtons = document.querySelectorAll('.buy-btn');
const preorderModal = document.getElementById('preorder-modal');
const closeModalBtn = document.getElementById('close-modal');
const selectedPlanText = document.getElementById('selectedPlanText');
const orderForm = document.getElementById('orderForm');

// Function to open the pre-order app (triggered by the button in the pricing section)
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.getAttribute('data-plan');
        if (selectedPlanText) {
            selectedPlanText.textContent = `You are pre-ordering the ${planName} Plan.`;
        }
        preorderModal.classList.add('active');
    });
});

// Function to open the pre-order app (from the package selection options in the app)
modalPlanBtns.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.getAttribute('data-plan');
        
        // Update text in the form
        if (selectedPlanText) {
            selectedPlanText.textContent = `You are pre-ordering the ${planName} Plan.`;
        }
        
        // Close the app to selection, open the app for form
        planSelectionModal.classList.remove('active');
        preorderModal.classList.add('active');
    });
});

// Close the app pre-order (button X)
closeModalBtn.addEventListener('click', function() {
    preorderModal.classList.remove('active');
});

// Close the app pre-order (clikck outside the app area)
preorderModal.addEventListener('click', function(e) {
    if (e.target === preorderModal) {
        preorderModal.classList.remove('active');
    }
});

// Function to handle submit form
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const plan = selectedPlanText.textContent;
        
        alert(`Thank you! Your pre-order has been received.\n\n${plan}`);
        
        this.reset();
        preorderModal.classList.remove('active');
        selectedPlanText.textContent = 'Please select a plan above to proceed.';
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});