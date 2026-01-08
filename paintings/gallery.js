// Data: The "State" of your gallery
const paintingsData = [
    {
        id: 1,
        title: "Sunset over Vancouver",
        medium: "oil", // used for filtering
        mediumDisplay: "Oil on Canvas", // displayed text
        size: "24x36 inches",
        year: 2024,
        image: "../images/image_5f85fe.jpg", // Path to your image
        status: "available",
        price: "$450"
    },
    {
        id: 2,
        title: "Abstract Dreams",
        medium: "acrylic",
        mediumDisplay: "Acrylic on Wood",
        size: "18x24 inches",
        year: 2023,
        image: "../images/image_5f865c.jpg",
        status: "sold",
        price: "Sold"
    },
    // Add more painting objects here
    {
        id: 3,
        title: "Neon City",
        medium: "digital",
        mediumDisplay: "Digital Print",
        size: "A1",
        year: 2024,
        image: "../images/image_5f85fe.jpg", // Placeholder
        status: "available",
        price: "$120"
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