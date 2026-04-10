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

    const folderPath = './assets/images/photowheel/';
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
// =========================================
  // 3. ABOUT PAGE INTERACTIVE CARDS
  // =========================================
  
  // Meet the Board Cards
  const boardCards = document.querySelectorAll('.board-card');
  boardCards.forEach(card => {
    card.addEventListener('click', () => {
      // Removes the active state from all other cards if you click a new one
      boardCards.forEach(c => { if(c !== card) c.classList.remove('is-active'); });
      // Toggles the clicked card
      card.classList.toggle('is-active');
    });
  });

  // FAQ Flip Cards
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  });
