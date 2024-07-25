// This is a simple example to demonstrate dynamic content.
// In a real application, you'd fetch location-based search results from a server.
document.addEventListener("DOMContentLoaded", function () {
    // Simulated location-based search results (replace this with real data)
    const locationSearchResults = [
        {
            location: "Pune",
            results: [
                {
                    title: "Ac Service ",
                    description: "Description of Service 1 in Pune",
                    link: "ac1.html",
                },
                {
                    title: "handyman Services",
                    description: "Description of Service 2 in Pune",
                    link: "handyman.html",
                },
                // Add more results specific to Pune
            ],
        },
        {
            location: "Delhi",
            results: [
                {
                    title: "Pest Service ",
                    description: "Description of Service 1 in Delhi",
                    link: "pest.html",
                },
                {
                    title: "Service 2 in Mumbai",
                    description: "Description of Service 2 in Delhi",
                    link: "plumbers.html",
                },
                // Add more results specific to Mumbai
            ],
        },
        {
            location: "Mumbai",
            results: [
                {
                    title: "Service 1 in Mumbai",
                    description: "Description of Service 1 in Mumbai",
                    link: "saloonmen.html",
                },
                {
                    title: "Service 2 in Mumbai",
                    description: "Description of Service 2 in Mumbai",
                    link: "plumbers.html",
                },
                {
                    title: "Service 3 in Mumbai",
                    description: "Description of Service 3 in Mumbai",
                    link: "pest.html",
                },
                // Add more results specific to Mumbai
            ],
        },
        {
            location: "Chennai",
            results: [
                {
                    title: "Service 1 in Chennai",
                    description: "Description of Service 1 in Chennai",
                    link: "saloonwomen.html",
                },
                {
                    title: "Service 2 in Chennai",
                    description: "Description of Service 2 in Chennai",
                    link: "plumbers.html",
                },
                // Add more results specific to Mumbai
            ],
        },
        {
            location: "Bangalore",
            results: [
                {
                    title: "Service 1 in Banglore",
                    description: "Description of Service 1 in Banglore",
                    link: "handyman.html",
                },
                {
                    title: "Service 2 in Banglore",
                    description: "Description of Service 2 in Banglore",
                    link: "plumbers.html",
                },
                {
                    title: "Service 3 in Banglore",
                    description: "Description of Service 3 in Banglore",
                    link: "rent_car.html",
                },
                // Add more results specific to Mumbai
            ],
        },
        // Add more location-based search results as needed
    ];

    // Function to display location-based search results
    function displayLocationSearchResults(locationResults) {
        const searchResultsContainer = document.getElementById("search-results");

        // Clear any existing results
        searchResultsContainer.innerHTML = "";

        locationResults.forEach((locationResult) => {
            const locationHeader = document.createElement("h2");
            locationHeader.textContent = `Results in ${locationResult.location}`;
            searchResultsContainer.appendChild(locationHeader);

            if (locationResult.results.length === 0) {
                const noResults = document.createElement("p");
                noResults.textContent = "No results found in this location.";
                searchResultsContainer.appendChild(noResults);
            } else {
                locationResult.results.forEach((result) => {
                    const resultItem = document.createElement("div");
                    resultItem.classList.add("result-item");

                    const title = document.createElement("h3");
                    title.textContent = result.title;

                    const description = document.createElement("p");
                    description.textContent = result.description;

                    const link = document.createElement("a");
                    link.href = result.link;
                    link.textContent = "Learn More";

                    resultItem.appendChild(title);
                    resultItem.appendChild(description);
                    resultItem.appendChild(link);

                    searchResultsContainer.appendChild(resultItem);
                });
            }
        });
    }

    // Simulate location-based searching when the page loads (you can replace this with actual user input)
    const location = "Pune"; // Replace with the user's location input
    const locationResults = locationSearchResults.filter((result) =>
        result.location.toLowerCase() === location.toLowerCase()
    );

    // Display location-based search results
    displayLocationSearchResults(locationResults);
});
