// Animate circular progress bars
document.querySelectorAll('.circular-progress').forEach((progressBar) => {
    const progressValue = progressBar.getAttribute('data-progress');
    progressBar.style.setProperty('--progress', `${progressValue}%`);
});
// Filter Projects
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
        // Filter projects
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
// Lightbox/Popup Functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const projectCard = button.closest('.project-card');
        const projectImage = projectCard.querySelector('.project-image').src;
        const projectTitle = projectCard.querySelector('.project-title').textContent;
        const projectDescription = projectCard.querySelector('.project-description').textContent;

        // Create a Lightbox/Popup
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${projectImage}" alt="${projectTitle}">
                <h3>${projectTitle}</h3>
                <p>${projectDescription}</p>
                <a href="${button.href}" target="_blank" class="btn btn-primary">Open Project</a>
                <button class="close-btn">&times;</button>
            </div>
        `;

        // Append Lightbox to the body
        document.body.appendChild(lightbox);

        // Close Lightbox
        const closeBtn = lightbox.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
        });

        // Close Lightbox when clicking outside
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});
// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
