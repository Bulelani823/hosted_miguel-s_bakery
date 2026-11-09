// Feature: Search functionality

// Select the search input field
const searchInput = document.getElementById("searchInput");

// Select all the product course cards
const courseCards = document.querySelectorAll("article.courses-card");

// Select the no result message element (optional check)
const noResult = document.getElementById("noResults");

// Ensure the search input exists before adding the event listener
if (searchInput) {
    // Run the code whenever the user types
    searchInput.addEventListener("input", () => {
        
        // Get the search text and convert it to lowercase
        const searchText = searchInput.value.toLowerCase().trim();

        // Count how many products match the search
        let matchCount = 0;

        // Loop through every product card
        courseCards.forEach((card) => {

            // Get the product title element
            const titleElement = card.querySelector("h3");
            // Get the description element
            const descElement = card.querySelector(".description");

            // Safety check: only process if the elements exist inside the card
            if (titleElement && descElement) {
                const CourseName = titleElement.textContent.toLowerCase();
                const DescriptionName = descElement.textContent.toLowerCase();

                // Check whether the search matches the name or description
                if (CourseName.includes(searchText) || DescriptionName.includes(searchText)) {
                    // Display matching cards
                    card.hidden = false;
                    // Increase matching count
                    matchCount++;
                } else {
                    // Hide the cards that do not match
                    card.hidden = true;
                }
            }
        });

        // Toggle the "no results" message if available
        if (noResult) {
            if (matchCount === 0) {
                noResult.hidden = false;
            } else {
                noResult.hidden = true;
            }
        }
    });
}
