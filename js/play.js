document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn--filter');
    const containerWrapper = document.querySelector('.conditions__wrapper');
    const containers = containerWrapper.querySelectorAll('.condition-block');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Add 'is-hidden' class to all containers
            containers.forEach(container => container.classList.add('is-hidden'));

            // Remove 'is-hidden' class from the corresponding container
            const containerId = button.id;
            containerWrapper.querySelector(`#${containerId}`).classList.remove('is-hidden');
        });
    });
});
