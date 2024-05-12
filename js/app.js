// change active when the user selects a different link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(innerLink => {
            innerLink.classList.remove('active');
        });

        link.classList.add('active');
    });
});