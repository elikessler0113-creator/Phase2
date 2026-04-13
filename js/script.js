/**
 * ==========================================================================
 * MISBA CLUB UMD - MASTER JAVASCRIPT FILE
 * ==========================================================================
 * * TABLE OF CONTENTS:
 * 1. MOBILE NAVIGATION TOGGLE (Header Hamburger Menu)
 * 2. IMAGE GALLERY / PHOTOWHEEL (Homepage & Activities Page)
 * 3. ABOUT PAGE INTERACTIVE CARDS (Board Members & FAQ)
 * ==========================================================================
 */

// This wrapper ensures the browser finishes building the HTML page completely 
// before it tries to attach any click events to buttons or images.
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. MOBILE NAVIGATION TOGGLE
     ========================================================================== */
  
  // Find the hamburger button and the hidden list of links
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Only run this code if the navigation actually exists on the current page
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      // Toggles the 'active' CSS class on and off, which makes the dropdown appear/disappear
      navLinks.classList.toggle('active');
    });
  }


  /* ==========================================================================
     2. IMAGE GALLERY (PHOTOWHEEL)
     ========================================================================== */
  
  // Find the container where the photos belong
  const track = document.getElementById('galleryTrack');

  // Only run this code if the gallery track actually exists on the current page
  if (track) {
    
    // ---> HOW TO ADD NEW PHOTOS TO THE GALLERY:
    // 1. Save your image into the 'assets/images/photowheel/' folder.
    // 2. Add the exact file name to the list below. 
    //    Make sure it has quotes around it, and a comma after it!
    const photoFiles = [
      '1.png', 
      '2.png', 
      '3.png'
    ];

    // The root folder path where the script will look for the images
    const folderPath = '/assets/images/photowheel/';
    const galleryImages = []; 

    // Build the images automatically based on the list above
    photoFiles.forEach((filename, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = folderPath + filename;
      imgElement.alt = 'Gallery Image ' + (index + 1);
      imgElement.classList.add('gallery-img');
      
      // Make the very first image visible by default
      if (index === 0) {
        imgElement.classList.add('active');
      }
      
      // Inject the newly created image into the HTML and save it to our array
      track.appendChild(imgElement);
      galleryImages.push(imgElement);
    });

    // --- BUTTON LOGIC ---
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImgIndex = 0;

    // Handles the smooth crossfade transition between images
    function switchImage(newIndex) {
      galleryImages[currentImgIndex].classList.remove('active'); // Hide current
      currentImgIndex = newIndex; // Update the tracker
      galleryImages[currentImgIndex].classList.add('active'); // Show new
    }

    if (nextBtn && prevBtn) {
      // NEXT BUTTON: Moves forward. 
      // The % math creates an endless loop, going back to 0 when it hits the end.
      nextBtn.addEventListener('click', () => {
        let newIndex = (currentImgIndex + 1) % galleryImages.length;
        switchImage(newIndex);
      });

      // PREVIOUS BUTTON: Moves backward. 
      // The extra math prevents the index from ever becoming a negative number.
      prevBtn.addEventListener('click', () => {
        let newIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        switchImage(newIndex);
      });
    }
  }


  /* ==========================================================================
     3. ABOUT PAGE INTERACTIVE CARDS
     ========================================================================== */
  
  // --- MEET THE BOARD CARDS (Slide-up effect) ---
  const boardCards = document.querySelectorAll('.board-card');
  
  boardCards.forEach(card => {
    card.addEventListener('click', () => {
      // Automatically close any other board cards that are currently open
      boardCards.forEach(c => { 
        if (c !== card) c.classList.remove('is-active'); 
      });
      // Toggle the slide-up overlay on the card that was just clicked
      card.classList.toggle('is-active');
    });
  });

  // --- FAQ FLIP CARDS (3D Rotation effect) ---
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      // Toggles the 180-degree flip. 
      // Note: Unlike the board cards, multiple FAQ cards can be flipped at once.
      card.classList.toggle('is-flipped');
    });
  });

}); // <-- THIS CLOSES THE DOMContentLoaded EVENT (DO NOT DELETE!)
