// Custom JavaScript for Django Admin Dashboard

document.addEventListener('DOMContentLoaded', function () {
    // Replace deprecated Unload event listeners with beforeunload
    window.addEventListener('beforeunload', function (event) {
        console.log('You are about to leave the page. Make sure all changes are saved.');
        // Custom logic for beforeunload can be added here
    });

    // Example: Adding a toggle theme button in the Django admin
    const themeToggleButton = document.createElement('button');
    themeToggleButton.innerText = 'Toggle Theme';
    themeToggleButton.style.position = 'fixed';
    themeToggleButton.style.top = '10px';
    themeToggleButton.style.right = '10px';
    themeToggleButton.style.zIndex = '1000';
    themeToggleButton.classList.add('button', 'theme-toggle-button');

    document.body.appendChild(themeToggleButton);

    themeToggleButton.addEventListener('click', function () {
        const currentTheme = document.body.dataset.theme;
        if (currentTheme === 'dark') {
            document.body.dataset.theme = 'light';
        } else {
            document.body.dataset.theme = 'dark';
        }
    });

    // Any additional customization for the admin can be added below
    console.log('Custom admin.js loaded successfully');
});
