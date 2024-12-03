function toggleMenu() {
    const menu = document.querySelector(".nav__menu-wrapper")
    const icon = document.querySelector(".mobile-icon")

    menu.classList.toggle("open")
    icon.classList.toggle("open")


}

function toggleDd() {
    const dropDown = document.querySelector(".dd-menu")
    const ddIcon = document.querySelector(".dd-icon")

    dropDown.classList.toggle("open")
    ddIcon.classList.toggle("open")

}

function toggleNoti() {
    const noti = document.querySelector(".noti")

    noti.classList.toggle("close")
}


// NOT MY CODE
 // Function to toggle the display of the custom select items
        function toggleSelect(selectElement) {
            const selectItems = selectElement.nextElementSibling;
            const isActive = selectElement.classList.contains('active');
            closeAllSelect();
            if (!isActive) {
                selectElement.classList.add('active');
                selectItems.style.display = 'block';
            }
        }

        // Function to close all select items
        function closeAllSelect() {
            const customSelects = document.querySelectorAll('.custom-select');
            const selectItems = document.querySelectorAll('.custom-select-items');
            customSelects.forEach(select => select.classList.remove('active'));
            selectItems.forEach(items => items.style.display = 'none');
        }

        // Event listener for custom select click
        document.querySelectorAll('.custom-select').forEach(select => {
            select.addEventListener('click', () => toggleSelect(select));
        });

        // Event listener for select item click
        document.querySelectorAll('.custom-select-items div').forEach(item => {
            item.addEventListener('click', () => {
                const selectId = item.parentElement.getAttribute('data-select-id');
                const selectElement = document.querySelector(`.custom-select[data-select-id="${selectId}"]`);
                const realSelectElement = document.querySelector(`select#${selectId}`);
                selectElement.textContent = item.textContent;
                realSelectElement.value = item.getAttribute('data-value');
                closeAllSelect();
                filterCards();
            });
        });

        // Close all selects when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.matches('.custom-select, .custom-select-items div')) {
                closeAllSelect();
            }
        });

        // JavaScript for filtering functionality
        function filterCards() {
            const locationValue = document.getElementById('location').value;
            const specialtyValue = document.getElementById('specialty').value;
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                const cardLocation = card.getAttribute('data-location');
                const cardSpecialty = card.getAttribute('data-specialty');

                if ((locationValue === 'all' || cardLocation === locationValue) &&
                    (specialtyValue === 'all' || cardSpecialty === specialtyValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }


function moveElementsWithinCards() {
    const cards = document.querySelectorAll('#all-doctors .card');
    
    cards.forEach(card => {
        const movableElement = card.querySelector('.movable-element');
        const oldContainer = card.querySelector('.content__wrapper');
        const newContainer = card.querySelector('.callout');

        if (movableElement) {
            if (window.innerWidth < 601) {
                if (!newContainer.contains(movableElement)) {
                    newContainer.insertBefore(movableElement, newContainer.firstChild); // Append as the first child
                }
            } else {
                if (!oldContainer.contains(movableElement)) {
                    oldContainer.insertBefore(movableElement, oldContainer.firstChild); // Append as the first child
                }
            }
        }
    });
}

// Move the elements on initial load
moveElementsWithinCards();

// Move the elements on window resize
window.addEventListener('resize', moveElementsWithinCards);


 // JavaScript to show/hide datalist and update input value
        document.querySelectorAll('.form-field.data-list input').forEach(input => {
            const datalist = input.nextElementSibling;

            input.onfocus = function () {
                datalist.style.display = 'block';
            };

            input.onblur = function () {
                setTimeout(() => {
                    datalist.style.display = 'none';
                }, 200); // Slight delay to allow click events to register
            };

            datalist.querySelectorAll('option').forEach(option => {
                option.onclick = function () {
                    input.value = this.value;
                    datalist.style.display = 'none';
                };
            });
        });


// JS SCRIPT FOR SUBMITTING THE FORM

// document.addEventListener('DOMContentLoaded', function() {
//     // Initialize EmailJS with your Public Key
//     emailjs.init("pIJk74ByKfq5jcaaa");

//     document.getElementById('contactForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Send form data using EmailJS
//         emailjs.sendForm('service_vms3lbq', 'template_99dl5ka', this)
//             .then(function(response) {
//                 console.log('SUCCESS!', response.status, response.text);
                
//                 // Show success message
//                 document.querySelector('.form__success').style.display = 'block';

//                 // Hide success message after 5 seconds
//                 setTimeout(function() {
//                     document.querySelector('.form__success').style.display = 'none';
//                 }, 5000);

//                 // Clear the form
//                 document.getElementById('contactForm').reset();
//             }, function(error) {
//                 console.error('FAILED...', error);
//             });
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("pIJk74ByKfq5jcaaa");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;

        // Change button text to "Sending..." with animation
        submitButton.disabled = true;
        let dotCount = 0;
        const loadingInterval = setInterval(() => {
            dotCount = (dotCount + 1) % 4;
            submitButton.textContent = `Sending${'.'.repeat(dotCount)}`;
        }, 500);

        // Send form data using EmailJS
        emailjs.sendForm('service_vms3lbq', 'template_99dl5ka', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                clearInterval(loadingInterval);
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Hide form and show success message
                document.querySelector('.form__wrapper form').style.display = 'none';
                document.querySelector('.form__success').style.display = 'flex';

                // Hide success message after 10 seconds and reset form
                setTimeout(function() {
                    document.querySelector('.form__success').style.display = 'none';
                    document.querySelector('.form__wrapper form').style.display = 'flex';
                    document.getElementById('contactForm').reset();
                }, 5000);
            }, function(error) {
                console.error('FAILED...', error);

                clearInterval(loadingInterval);
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;

                // Optionally, handle error case
                alert('Form submission failed. Please try again.');
            });
    });
});
