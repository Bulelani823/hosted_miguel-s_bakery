

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













