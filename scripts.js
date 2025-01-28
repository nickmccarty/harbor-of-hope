// Toggle navigation menu visibility on small screens
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all SVG icons for toggling dropdowns
    const svgIcons = document.querySelectorAll('.menu-svg');

    // Add click event listener to each SVG (for opening dropdowns)
    svgIcons.forEach((svg) => {
        svg.addEventListener('click', (event) => {
            // Prevent event from bubbling up to document
            event.stopPropagation();

            // Find the corresponding dropdown menu
            const dropdownMenu = svg.parentElement.querySelector('.dropdown-menu');

            // Close any open dropdown menus first
            document.querySelectorAll('.dropdown-menu.active').forEach((menu) => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('active');
                    menu.style.display = 'none'; // Hide other dropdowns
                }
            });

            // Toggle the active class for the clicked dropdown
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('active');
                dropdownMenu.style.display = dropdownMenu.classList.contains('active') ? 'block' : 'none';
            }
        });
    });

    // Close dropdown if clicked outside (document click handler)
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-items')) {
            document.querySelectorAll('.dropdown-menu.active').forEach((menu) => {
                menu.classList.remove('active');
                menu.style.display = 'none'; // Hide menu if clicked outside
            });
        }
    });

    // Close the dropdown when the "X" SVG is clicked
    const closeSvgs = document.querySelectorAll('.close-svg');
    closeSvgs.forEach((closeSvg) => {
        closeSvg.addEventListener('click', (event) => {
            // Prevent event from bubbling up to document
            event.stopPropagation();

            // Find the parent dropdown and close it
            const dropdownMenu = closeSvg.closest('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('active');
                dropdownMenu.style.display = 'none'; // Ensure the dropdown is hidden
            }
        });
    });
});
