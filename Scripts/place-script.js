const placeData = {
    "Paris": {
      name: "Paris",
      description: "Paris, the City of Lights, is celebrated for its romantic ambiance and rich history. From the Eiffel Tower to the Louvre, there's endless art, culture, and beauty to explore.",
      images: [
        "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1718035557075-5111d9d906d2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    "Qutub Minar": {
      name: "Qutub Minar",
      description: "The Qutub Minar is a towering minaret in Delhi, India. At 73 meters (240 feet), it is the tallest brick minaret in the world. It is an important example of Indo-Islamic architecture.",
      images: [
        "https://images.unsplash.com/photo-1718366512326-3103e22bd9e5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1718366512393-b255c182f32e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1716747713125-9ed86e1ad436?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1697729640715-b4f8b691b9ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    "Taj Mahal": {
      name: "Taj Mahal",
      description: "The Taj Mahal is a white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is an iconic symbol of love and an architectural masterpiece.",
      images: [
        "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1523980077198-60824a7b2148?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1697729441569-f706fdd1f71c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1523981729822-80f25e681301?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    }
  };
  

const places = {
    "Paris": {
      description: "Paris, the capital of France, is celebrated for its art, architecture, and cuisine. From the Eiffel Tower to the Louvre, there's endless history and beauty to explore."
    },
    "Qutub Minar": {
      description: "The Qutub Minar is a towering minaret located in Delhi, India. Standing at 73 meters (240 feet), it is the tallest brick minaret in the world. Built in the early 13th century by Qutb-ud-Din Aibak, the founder of the Delhi Sultanate, it was later completed by his successors. The minaret is an example of Indo-Islamic Afghan architecture, with intricate carvings and inscriptions in Arabic. It is part of the Qutub Complex, a UNESCO World Heritage site, and is a significant symbol of India's rich cultural and architectural history."
    },
    "Taj Mahal": {
      description: "The Taj Mahal is a stunning white marble mausoleum located in Agra, India. Built between 1631 and 1653 by the Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is considered one of the most iconic symbols of love. The Taj Mahal is renowned for its breathtaking architecture, featuring intricate carvings, symmetrical gardens, and a large central dome. It combines elements of Persian, Ottoman, and Indian architectural styles and is recognized as a UNESCO World Heritage site. The Taj Mahal attracts millions of visitors each year, celebrated for its beauty and historical significance."
    }
  };
  
  // Get place name from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const placeName = urlParams.get('name');
  
  const place = places[placeName];
  
  // Display place details if found
  if (place) {
    document.getElementById('place-name').textContent = placeName;
    document.getElementById('place-description').textContent = place.description;
  } else {
    document.querySelector('.place-details').innerHTML = "<p>Place not found!</p>";
  }

  
  const documentPlaceName = document.getElementById('place-name');
  const placeDescription = document.getElementById('place-description');
  const carouselImages = document.querySelector('.carousel-images');
  
  // Sample data (replace this with dynamic content based on the place)
  
  // Display the place name and description
  documentPlaceName.textContent = placeData[placeName].name;
  placeDescription.textContent = placeData[placeName].description;
  
  // Load images dynamically into the carousel
  placeData[placeName].images.forEach((imgSrc, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = `User image ${index + 1}`;
    carouselImages.appendChild(imgElement);
  });

  const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const totalImages = carouselImages.children.length;

carouselImages.style.width = `${totalImages * 100}%`;
let currentIndex = 0;

// Function to move to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarouselPosition();
}

// Function to move to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarouselPosition();
}

// Update the position of the carousel based on the current index
function updateCarouselPosition() {
  const offset = -currentIndex * 20; // Shift to the left by 100% per image
  carouselImages.style.transform = `translateX(${offset}%)`;
}

updateCarouselPosition();
// Event listeners for the buttons
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);
  
  // Fade place name on scroll and carousel interaction
  window.addEventListener('scroll', () => {
    const opacity = Math.max(1 - window.scrollY / 200, 0);
    documentPlaceName.style.opacity = opacity;
  });
  
  carouselImages.addEventListener('mouseover', () => {
    documentPlaceName.style.opacity = 0.3;
  });
  
  carouselImages.addEventListener('mouseleave', () => {
    documentPlaceName.style.opacity = 1;
  });
  