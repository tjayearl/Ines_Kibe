document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const modal = document.getElementById('hiddenMessageModal');
    const closeButton = document.querySelector('.close-button');

    const birthdaySound = document.getElementById('birthdaySound');

    // Function to show the modal with a smooth transition
    const showModal = () => {
        modal.classList.add('visible');
        // Play sound, handling the promise in case autoplay is blocked
        birthdaySound.play().catch(error => {
            // This is common in browsers; no need to show an error.
            console.log("Audio playback was prevented by the browser.");
        });
    };

    // Function to hide the modal
    const hideModal = () => {
        modal.classList.remove('visible');
        // Stop and reset the sound for the next time
        birthdaySound.pause();
        birthdaySound.currentTime = 0;
    };

    // Event listeners to open and close the modal
    revealButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

    // Also, close the modal if the user clicks on the dark overlay
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
});