// Select the search input field
const searchInputs = document.getElementById("searchInput");

// Select all the product cards (Change your HTML <article> class to "course-item" or target "article.courses-card")
const courseCards = document.querySelectorAll("article.courses-card");

// Select the no result message
const noResult = document.getElementById("noResults");

// Run the code whenever the user types
searchInputs.addEventListener("input", () => {

    // Get the search text and convert it to lowercase
    const searchText = searchInputs.value.toLowerCase().trim();

    // Count how many products match the search
    let matchCount = 0;

    // Loop through every product card
    courseCards.forEach((card) => {

        // Get the product title
        const CourseName = card.querySelector("h3").textContent.toLowerCase();

        // Get the description text
        const DescriptionName = card.querySelector(".description").textContent.toLowerCase();

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
    });

    if (noResult) {
        if (matchCount === 0) {
            noResult.hidden = false;
        } else {
            noResult.hidden = true;
        }
    }
});

//Feature 3: Lightbox

//Select all gallery Images
const galleryImages = document.querySelectorAll(".gallery-image");

//Select the ligthbox background 
const lightbox = document.getElementById("lightbox")

//Select the enlarged image element
const lightboxImage = document.getElementById("lightboxImage");

//Select the close button
const closeLightbox = document.getElementById("closeLightbox");

//Remember the element used to open the lightbox
let previousFocus = null;

//Function to open the lightbox
function openLightBox(image){

  //Save the current keyboard focus
  previousFocus = document.activeElement;

  //Use the image that you clicked 
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  //Display the lightbox overlay 
  lightbox.classList.add("active");

  //Move focus to the close button
  closeLightbox.focus();


}

//Function to close the lightbox
function hideLightBox(){

  //Hide the lightbox overlay
  lightbox.classList.remove("active");

  //Return focus to the previous element
  if(previousFocus){
    previousFocus.focus();
  }

}

// Add a click event to each image
galleryImages.forEach((image) => {

    image.addEventListener("click", () => {
        openLightBox(image);
    });

    // Allow keyboard users to open the image using Enter
    image.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            openLightBox(image);
        }

    });

});

// Close when the X button is clicked
closeLightbox.addEventListener("click", hideLightBox);

// Close when the dark background is clicked
lightbox.addEventListener("click", (event) => {

    // Only close if the overlay itself was clicked
    if (event.target === lightbox) {
        hideLightBox();
    }

});

// Close lightbox by pressing the Escape key
document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {
        hideLightBox();
    }

    // Keep keyboard focus within the open lightbox
    if (
        event.key === "Tab" &&
        lightbox.classList.contains("active")
    ) {
        event.preventDefault();
        closeLightbox.focus();
    }

});