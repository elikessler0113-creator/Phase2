
// PHOTOWHEEL//
  // 1. YOUR MASTER LIST OF PHOTOS
  // Whenever you add a new photo to your folder, just add its name here!
  const photoFiles = [
    '1.png', 
    '2.png', 
    '3.png'
    // Add more here like this: '4.png', '5.png'
  ];

  // The folder where all these photos live
  const folderPath = 'assets/images/photowheel/';

  // 2. AUTOMATICALLY BUILD THE GALLERY
  const track = document.getElementById('galleryTrack');
  const galleryImages = []; // We will store the generated images here

  photoFiles.forEach((filename, index) => {
    // Create a new image tag
    const imgElement = document.createElement('img');
    imgElement.src = folderPath + filename;
    imgElement.alt = 'Gallery Image ' + (index + 1);
    imgElement.classList.add('gallery-img');
    
    // Make the very first image visible by default
    if (index === 0) {
      imgElement.classList.add('active');
    }
    
    // Put it inside the HTML track
    track.appendChild(imgElement);
    
    // Save it to our list so the buttons can use it
    galleryImages.push(imgElement);
  });

  // 3. THE BUTTON LOGIC (Same as before)
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentImgIndex = 0;

  function switchImage(newIndex) {
    galleryImages[currentImgIndex].classList.remove('active');
    currentImgIndex = newIndex;
    galleryImages[currentImgIndex].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    let newIndex = (currentImgIndex + 1) % galleryImages.length;
    switchImage(newIndex);
  });

  prevBtn.addEventListener('click', () => {
    let newIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
    switchImage(newIndex);
  });
// =========================================
// PLUG-AND-PLAY MOBILE NAVIGATION
// =========================================

// Wait for the HTML to finish loading before running
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Find the existing navigation and the list of links
  const nav = document.querySelector('nav');
  const navList = document.querySelector('nav ul');

  if (nav && navList) {
    
    // 2. Inject the necessary CSS rules dynamically into the <head>
    const style = document.createElement('style');
    style.innerHTML = `
      /* Hide hamburger by default on desktop */
      .injected-hamburger { 
        display: none; 
        background: none; 
        border: none; 
        color: var(--primary-color, #333); 
        cursor: pointer; 
        padding: 0;
      }
      
      /* Mobile rules */
      @media (max-width: 768px) {
        .injected-hamburger { 
          display: block; 
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        nav ul { 
          display: none; 
          flex-direction: column; 
          position: absolute; 
          top: 100%; 
          left: 0; 
          width: 100%; 
          background-color: #FFFAEB; 
          border-bottom: 1px solid var(--secondary-color, #ccc);
          padding: 1rem 0; 
          box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
          z-index: 999;
          margin: 0;
        }
        /* The class we toggle to show the menu */
        nav ul.mobile-active { 
          display: flex; 
        }
        nav ul li { 
          text-align: center; 
          padding: 1rem 0; 
        }
      }
    `;
    document.head.appendChild(style);

    // 3. Create the Hamburger Button and its SVG icon
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'injected-hamburger';
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');
    hamburgerBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;

    // 4. Insert the button into the navigation bar
    nav.insertBefore(hamburgerBtn, navList);

    // 5. Add the click logic to open/close the menu
    hamburgerBtn.addEventListener('click', () => {
      navList.classList.toggle('mobile-active');
    });
  }
});
      const boardCards = document.querySelectorAll('.board-card');
      boardCards.forEach(card => {
        card.addEventListener('click', () => {
          // Removes the active state from all other cards if you click a new one
          boardCards.forEach(c => { if(c !== card) c.classList.remove('is-active'); });
          // Toggles the clicked card
          card.classList.toggle('is-active');
        });
      });
 const cards = document.querySelectorAll('.flip-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('is-flipped');
        });
      });
