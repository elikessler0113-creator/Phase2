
// PHOTOWHEEL//
<script>
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
</script>
