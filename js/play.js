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