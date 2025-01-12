// Smooth scrolling for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out, Tejaswini will get back to you soon!');
});

// Event listeners for Skills, Education, and Experience buttons
document.getElementById('skills-btn').addEventListener('click', () => {
    displayDetails(
        'Skills',
        ['Python', 'Java', 'Web Development']
    );
});

document.getElementById('education-btn').addEventListener('click', () => {
    displayDetails(
        'Education',
        [
            'Vignan Global Gen School (Completed in 2019)',
            'Vignan Junior College (Completed in 2021)',
            'Methodist College of Engineering and Technology (Currently Pursuing)'
        ]
    );
});

document.getElementById('experience-btn').addEventListener('click', () => {
    displayDetails(
        'Experience',
        ['Internship - Electronic Arts Company: Focused on software development and game development']
    );
});

// Function to display details for Skills, Education, and Experience
function displayDetails(title, items) {
    const detailsContainer = document.getElementById('about-details');
    detailsContainer.innerHTML = `
        <h3>${title}</h3>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    detailsContainer.style.display = 'block';
}