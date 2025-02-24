document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!"); // Debugging step

    // Select all elements with the 'plus' class
    const plusIcons = document.querySelectorAll(".plus");

    if (plusIcons.length === 0) {
        console.warn("No plus icons found! Check your HTML structure.");
    }

    // Loop through each plus icon and add a click event
    plusIcons.forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent any unexpected event bubbling

            // Find the related feature card text
            const featureText = this.parentElement.innerText.trim();
            console.log("Clicked on:", featureText); // Debugging step

            // Show a pop-up (Replace with a modal if needed)
            alert(`More details coming soon for: ${featureText}`);
        });
    });
});