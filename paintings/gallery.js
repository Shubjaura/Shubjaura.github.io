// Data: The "State" of your gallery
const paintingsData = [

    {
        id: 1,
        title: "City View",
        medium: "BC Scenaries",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/CityView.jpeg", 
        status: "available",
        price: "$250"
    },   
    {
        id: 2,
        title: "Lord Ganesh",
        medium: "Random",
        mediumDisplay: "Canvas",
        size: "18x24 inches",
        year: 2023,
        image: "../images/Picture1.jpg",
        status: "sold",
        price: "Sold"
    },
    {
        id: 3,
        title: "Bunnies and the Moon",
        medium: "Random",
        mediumDisplay: "Canvas",
        size: "A1",
        year: 2024,
        image: "../images/Picture4.jpg", 
        status: "available",
        price: "$100"
    },
        {
        id: 4,
        title: "Beauty and Bees",
        medium: "Random",
        mediumDisplay: "Canvas",
        size: "A1",
        year: 2024,
        image: "../images/Picture3.jpg", // Placeholder
        status: "available",
        price: "$100"
    },    
    {
        id: 5,
        title: "Petals Canvas",
        medium: "Random",
        mediumDisplay: "Canvas",
        size: "A1",
        year: 2024,
        image: "../images/Picture2.jpg", // Placeholder
        status: "available",
        price: "$100"
    },
    {
        id: 6,
        title: "Ocean Abstract",
        medium: "Random",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/Ocean Abstract.jpeg", 
        status: "available",
        price: "$250"
    },
    {
        id: 7,
        title: "Sunset Abstract",
        medium: "Random",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/Sunset Abstract.jpeg", 
        status: "available",
        price: "$250"
    },
    {
        id: 1,
        title: "Vancouver Sealine",
        medium: "BC Scenaries",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/Vancouver Sealine.jpeg", 
        status: "available",
        price: "$250"
    },
    {
        id: 1,
        title: "Chilliwack Lake",
        medium: "BC Scenaries",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/Chilliwack Lake.jpeg", 
        status: "available",
        price: "$250"
    },
    {
        id: 1,
        title: "BC Hike",
        medium: "BC Scenaries",
        mediumDisplay: "Canvas", 
        size: "24x36 inches",
        year: 2024,
        image: "../images/BC Hike.jpeg", 
        status: "available",
        price: "$250"
    }
];

// DOM Elements
const galleryGrid = document.getElementById('gallery-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('art-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeBtn = document.querySelector('.close-lightbox');

// Function to render paintings
function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = ''; // Clear current grid

    const filteredData = filter === 'all' 
        ? paintingsData 
        : paintingsData.filter(p => p.medium === filter || p.status === filter);

    filteredData.forEach(painting => {
        // Create Card Element
        const card = document.createElement('div');
        card.className = 'painting-card';
        card.setAttribute('data-id', painting.id);
        
        // HTML Template for Card
        card.innerHTML = `
            <div class="painting-image-container">
                <img src="${painting.image}" alt="${painting.title}" loading="lazy">
            </div>
            <div class="painting-info">
                <h3 class="painting-title">${painting.title}</h3>
                <p class="painting-meta">${painting.mediumDisplay} • ${painting.year}</p>
                <span class="painting-status ${painting.status}">
                    ${painting.status === 'available' ? painting.price : 'Sold'}
                </span>
            </div>
        `;

        // Add Click Event for Lightbox
        card.addEventListener('click', () => openLightbox(painting));
        
        galleryGrid.appendChild(card);
    });
}

// Lightbox Logic
function openLightbox(painting) {
    lightboxImg.src = painting.image;
    lightboxTitle.textContent = painting.title;
    lightboxDesc.textContent = `${painting.mediumDisplay} | ${painting.size} | ${painting.year}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightboxFunc() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Event Listeners
closeBtn.addEventListener('click', closeLightboxFunc);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightboxFunc();
});

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
        // Render
        renderGallery(btn.getAttribute('data-filter'));
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});