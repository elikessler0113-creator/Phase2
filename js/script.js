// Wait for the HTML to finish loading before running any scripts
document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // 1. MOBILE NAVIGATION TOGGLE
  // =========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Only run if the button actually exists on the page
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      // Toggles the dropdown menu open and closed
      navLinks.classList.toggle('active');
    });
  }


  // =========================================
  // 2. IMAGE GALLERY (PHOTOWHEEL)
  // =========================================
  const track = document.getElementById('galleryTrack');

  // Only run this if the gallery actually exists on the current page
  if (track) {
    
    // YOUR MASTER LIST OF PHOTOS
    const photoFiles = [
      '1.png', 
      '2.png', 
      '3.png'
    ];

    const folderPath = 'assets/images/photowheel/';
    const galleryImages = []; 

    // Build the images
    photoFiles.forEach((filename, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = folderPath + filename;
      imgElement.alt = 'Gallery Image ' + (index + 1);
      imgElement.classList.add('gallery-img');
      
      if (index === 0) {
        imgElement.classList.add('active');
      }
      
      track.appendChild(imgElement);
      galleryImages.push(imgElement);
    });

    // Button Logic
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImgIndex = 0;

    function switchImage(newIndex) {
      galleryImages[currentImgIndex].classList.remove('active');
      currentImgIndex = newIndex;
      galleryImages[currentImgIndex].classList.add('active');
    }

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        let newIndex = (currentImgIndex + 1) % galleryImages.length;
        switchImage(newIndex);
      });

      prevBtn.addEventListener('click', () => {
        let newIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        switchImage(newIndex);
      });
    }
  }

});
