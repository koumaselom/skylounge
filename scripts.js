/* // Open the lightbox and display the clicked image
function openLightbox(imageSrc) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imageSrc;
}

// Close the lightbox when clicked outside the image or on the close button
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
} */
// Function to open the lightbox and display the clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-img');
    
    // Show the lightbox
    lightbox.style.display = 'flex';
    lightbox.classList.add('show');  // Add the 'show' class to scale the image

    // Set the image source to the clicked image
    lightboxImage.src = imageSrc;
}

// Function to close the lightbox when clicked outside the image or on the close button
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Remove the 'show' class to reset the image scale
    lightbox.classList.remove('show');
    
    // Hide the lightbox
    lightbox.style.display = 'none';
}



