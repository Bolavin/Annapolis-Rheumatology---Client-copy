document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn--filter');
    const containerWrapper = document.querySelector('.conditions__wrapper');
    const containers = containerWrapper.querySelectorAll('.condition-block');

    function updateActiveSection(hash) {
        // Remove 'active' class from all buttons
        buttons.forEach(button => button.classList.remove('active'));

        // Add 'active' class to the corresponding button
        const activeButton = document.querySelector(`.btn--filter[href="${hash}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Add 'is-hidden' class to all containers
        containers.forEach(container => container.classList.add('is-hidden'));

        // Remove 'is-hidden' class from the corresponding container
        const activeContainer = document.querySelector(hash);
        if (activeContainer) {
            activeContainer.classList.remove('is-hidden');
        }
    }

    // Handle initial load with hash
    if (window.location.hash) {
        updateActiveSection(window.location.hash);
    }

    // Handle click events on buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Get the hash from the href attribute
            const hash = this.getAttribute('href');

            // Update the active section
            updateActiveSection(hash);

            // Update the URL hash
            history.pushState(null, null, hash);
        });
    });

    // Handle back/forward navigation
    window.addEventListener('hashchange', function() {
        updateActiveSection(window.location.hash);
    });
});
