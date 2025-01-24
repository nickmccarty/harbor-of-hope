// Toggle navigation menu visibility on small screens
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
});
