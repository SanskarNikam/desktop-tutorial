// JavaScript for home page functionality
document.getElementById("searchButton").addEventListener("click", function () {
    // Handle search functionality here
    // Redirect to service pages based on user search
});

document.addEventListener("DOMContentLoaded", function() {
    const movingCostForm = document.getElementById("movingCostForm");

    movingCostForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get user inputs
        const fromAddress = document.getElementById("fromAddress").value;
        const toAddress = document.getElementById("toAddress").value;
        const moveDate = document.getElementById("moveDate").value;
        const moveSize = document.getElementById("moveSize").value;

        // Perform cost estimation (you can add your own logic here)
        const estimatedCost = calculateMovingCost(moveSize);

        // Display the estimated cost to the user
        alert(`Estimated moving cost from ${fromAddress} to ${toAddress} on ${moveDate}: $${estimatedCost}`);

        // Optionally, you can redirect to a new page with the estimated cost
        // window.location.href = `result.html?cost=${estimatedCost}`;
    });

    // Function to calculate moving cost based on move size (customize as needed)
    function calculateMovingCost(moveSize) {
        let baseCost = 100; // Base cost for moving
        if (moveSize === "medium") {
            baseCost += 50;
        } else if (moveSize === "large") {
            baseCost += 100;
        }
        return baseCost;
    }
});
