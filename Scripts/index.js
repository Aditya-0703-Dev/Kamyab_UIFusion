const places = [
    {
      name: "Paris",
      image: "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=2048x2048&w=is&k=20&c=IfD0giUk7Zy7DVMsTblk-MSA3rp9o980Ga_Y9X4IsrM=",
      description: "The City of Lights, known for its romantic ambiance and rich history.",
    },
    {
        name: "Qutub Minar",
          image: "https://media.istockphoto.com/id/1160975059/photo/qutub-minar-and-its-monuments-delhi.jpg?s=1024x1024&w=is&k=20&c=BhuKUL1LK5tdBzLU9j3D_p5YbDmDgnZN6j1XY9WZcx4=",
          description: "The Place of battles, known for its ancient history.",
    },
    
    {
    name: "Taj Mahal",
      image: "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=2048x2048&w=is&k=20&c=IvXaJ9sZ6DWp3wwnK_j-k_eyaL_Lu61ym1Ejm-T7IaM=",
      description: "The Place of Loves, known for its romantic ambiance and rich history.",
    },
    {
        name: "New York",
        image: "https://media.istockphoto.com/id/538811669/photo/manhattan-panorama-with-its-skyscrapers-illuminated-at-dusk-new-york.jpg?s=2048x2048&w=is&k=20&c=A23Ek2HSVBj5nXFQ7zGdGdc8XtQF0tskm_G-_KPMmZ4=",
        description: "The city that never sleeps, with iconic landmarks and vibrant culture.",
      },
    {
        
            name: "Tokyo",
            image: "https://media.istockphoto.com/id/1201905814/photo/view-shibuya-crossing-at-sunset-tokyo-2020-japan.jpg?s=2048x2048&w=is&k=20&c=jngjiPH91nzVzaJD7n1n_dtHt8_2jqIlAV1jEU9FBtw=",
            description: "A bustling metropolis blending ancient culture with modern technology.",
          
    },
    {
        name: "Golden Temple",
          image: "https://media.istockphoto.com/id/478673422/photo/golden-temple-amritsar.jpg?s=2048x2048&w=is&k=20&c=U2I7m_BfVQAggpeVSYdTjyuPOOMvbbuhfoWKI00A5kA=",
          description: "The City of sikhs, known for its bravier ",
        },
        {
            name: "Akshar Dham",
              image: "https://media.istockphoto.com/id/1345570628/photo/hindu-temple-in-new-delhi-india.jpg?s=2048x2048&w=is&k=20&c=N3C3vENew9YkGuFDXVb3uYR2Ohj6jbEOggfMiZNY74s=",
              description: "The Temple of Swami Narayan.",
            },
            {
                name: "Disneyland",
                  image: "https://media.istockphoto.com/id/625812814/photo/fairy-tale-inside-baloons.jpg?s=2048x2048&w=is&k=20&c=AersduWFKFaWCdzB9pqWVG0eWzSW5-ddL5cbXY12jRk=",
                  description: "Fun amusment park based on disney charachters",
                },
            
        
    

  ];
  
  const cardContainer = document.getElementById('card-container');
  const body = document.body;
  
  places.forEach(place => {
    const card = document.createElement('a');
    card.classList.add('place-card');
    card.href = `place.html?name=${encodeURIComponent(place.name)}`; // Link to individual page
  
    card.classList.add('card');

    // Set the HTML content for each card
    card.innerHTML = `
        <img src="${place.image}" alt="${place.name}" class="place-image">
        <div class="place-content">
            <h2 class="place-name">${place.name}</h2>
            <p class="place-description">${place.description}</p>
        </div>
    `;

    card.addEventListener('mouseenter', function() {
      body.style.backgroundImage = `url(${place.image})`;
      document.body.classList.add('fade-in');
  });

  // Remove the background image when the hover ends
  card.addEventListener('mouseleave', function() {
      body.style.backgroundImage = '';
      document.body.classList.remove('fade-in');
  });
  
    cardContainer.appendChild(card);
  });

  