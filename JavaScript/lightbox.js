

//function to open lightbox
        function openLightbox(imageSrc)
        {
            //get the lightbox container
            const lightbox = document.getElementById("lightbox")

            //get the large image
            const lightboxImage = document.getElementById("lightboxImage")

            //set the large image to the clicked image
            lightboxImage.src = imageSrc;

            //display the lightbox
            lightbox.style.display = "flex";
        }

        //function to close the lightbox
        function closeLightbox()
        {
            //hide the lightbox
            document.getElementById("lightbox").style.display = "none";
        }


//Feature 3: Lightbox

//Select all gallery Images
const galleryImages = document.querySelectorAll(".gallery-image");

//Select the ligthbox background 
const lightbox = document.getElementById("lightbox")

//Select the enlarged image element
const lightboxImage = document.getElementById("lightboxImage");

//Select the close button
const closeLightboxs = document.getElementById("closeLightbox");

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
        closeLightboxs.focus();
    }

});













