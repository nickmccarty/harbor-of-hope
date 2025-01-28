// Toggle navigation menu visibility on small screens
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
});

// JavaScript to toggle dropdown menus
document.addEventListener('DOMContentLoaded', () => {
    // Select all SVG icons
    const svgIcons = document.querySelectorAll('.menu-svg');

    // Add click event listener to each SVG
    svgIcons.forEach((svg) => {
        svg.addEventListener('click', (event) => {
            // Find the corresponding dropdown menu
            const dropdownMenu = svg.parentElement.querySelector('.dropdown-menu');

            // Close any open dropdown menus first
            document.querySelectorAll('.dropdown-menu.active').forEach((menu) => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('active');
                }
            });

            // Toggle the active class for the clicked dropdown
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('active');
            }
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-items')) {
            document.querySelectorAll('.dropdown-menu.active').forEach((menu) => {
                menu.classList.remove('active');
            });
        }
    });
});
