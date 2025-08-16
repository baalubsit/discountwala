// Application data
const appData = {
  "categories": [
    {
      "id": "electronics",
      "name": "Electronics & Gadgets",
      "icon": "📱",
      "subcategories": ["Smartphones", "Laptops", "Tablets", "Accessories", "Home Appliances", "Audio Equipment"]
    },
    {
      "id": "fashion",
      "name": "Fashion & Apparel",
      "icon": "👗",
      "subcategories": ["Men's Clothing", "Women's Clothing", "Kids Wear", "Footwear", "Accessories", "Jewelry"]
    },
    {
      "id": "home_kitchen",
      "name": "Home & Kitchen",
      "icon": "🏠",
      "subcategories": ["Kitchenware", "Home Decor", "Furniture", "Bedding", "Storage", "Appliances"]
    },
    {
      "id": "beauty_health",
      "name": "Beauty & Health",
      "icon": "💄",
      "subcategories": ["Skincare", "Makeup", "Haircare", "Health Supplements", "Personal Care", "Fitness"]
    },
    {
      "id": "grocery_food",
      "name": "Grocery & Food",
      "icon": "🛒",
      "subcategories": ["Fresh Produce", "Packaged Foods", "Beverages", "Snacks", "Dairy", "Organic"]
    },
    {
      "id": "books_education",
      "name": "Books & Education",
      "icon": "📚",
      "subcategories": ["Academic Books", "Fiction", "Non-Fiction", "Children's Books", "E-books", "Stationery"]
    },
    {
      "id": "sports_fitness",
      "name": "Sports & Fitness",
      "icon": "⚽",
      "subcategories": ["Exercise Equipment", "Sports Gear", "Outdoor Activities", "Yoga", "Fitness Wear", "Nutrition"]
    },
    {
      "id": "travel_hotels",
      "name": "Travel & Hotels",
      "icon": "✈️",
      "subcategories": ["Flight Bookings", "Hotel Stays", "Bus Travel", "Train Tickets", "Holiday Packages", "Car Rentals"]
    }
  ],
  "states": [
    {
      "name": "Andhra Pradesh",
      "cities": ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Tirupati"]
    },
    {
      "name": "Karnataka",
      "cities": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga"]
    },
    {
      "name": "Maharashtra",
      "cities": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"]
    },
    {
      "name": "Delhi",
      "cities": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"]
    },
    {
      "name": "Tamil Nadu",
      "cities": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tirunelveli"]
    },
    {
      "name": "Gujarat",
      "cities": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"]
    },
    {
      "name": "Rajasthan",
      "cities": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"]
    },
    {
      "name": "West Bengal",
      "cities": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda"]
    },
    {
      "name": "Uttar Pradesh",
      "cities": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad"]
    },
    {
      "name": "Kerala",
      "cities": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Palakkad"]
    }
  ],
  "discountTypes": [
    {
      "id": "percentage",
      "name": "Percentage Off",
      "description": "Get X% off on your purchase",
      "example": "20% OFF"
    },
    {
      "id": "fixed_amount",
      "name": "Fixed Amount Off",
      "description": "Save a fixed amount in rupees",
      "example": "₹500 OFF"
    },
    {
      "id": "bogo",
      "name": "Buy One Get One",
      "description": "Buy one item, get another free or discounted",
      "example": "BOGO FREE"
    },
    {
      "id": "cashback",
      "name": "Cashback Offers",
      "description": "Get money back on your purchases",
      "example": "10% Cashback"
    },
    {
      "id": "free_shipping",
      "name": "Free Shipping",
      "description": "No delivery charges on orders",
      "example": "FREE DELIVERY"
    },
    {
      "id": "bundle",
      "name": "Bundle Deals",
      "description": "Special pricing on product combinations",
      "example": "COMBO OFFER"
    }
  ],
  "stores": [
    {
      "name": "Amazon India",
      "logo": "🟠",
      "category": "all",
      "cashback": "Up to 5%",
      "rating": 4.5
    },
    {
      "name": "Flipkart",
      "logo": "🟡",
      "category": "all",
      "cashback": "Up to 7%",
      "rating": 4.3
    },
    {
      "name": "Myntra",
      "logo": "🔴",
      "category": "fashion",
      "cashback": "Up to 6.7%",
      "rating": 4.2
    },
    {
      "name": "Nykaa",
      "logo": "💗",
      "category": "beauty_health",
      "cashback": "Up to 8%",
      "rating": 4.4
    },
    {
      "name": "BigBasket",
      "logo": "🟢",
      "category": "grocery_food",
      "cashback": "Up to 4%",
      "rating": 4.1
    },
    {
      "name": "Croma",
      "logo": "🔵",
      "category": "electronics",
      "cashback": "Up to 3%",
      "rating": 4.0
    }
  ],
  "deals": [
    {
      "id": 1,
      "title": "Samsung Galaxy S24 Ultra",
      "store": "Amazon India",
      "category": "electronics",
      "original_price": 124999,
      "discounted_price": 94999,
      "discount_percentage": 24,
      "discount_type": "percentage",
      "cashback": "5% Extra Cashback",
      "location": ["Delhi", "Mumbai", "Bangalore"],
      "state": ["Delhi", "Maharashtra", "Karnataka"],
      "valid_until": "2025-08-31",
      "description": "Latest flagship smartphone with 200MP camera and S Pen",
      "rating": 4.5
    },
    {
      "id": 2,
      "title": "Apple MacBook Air M2",
      "store": "Flipkart",
      "category": "electronics",
      "original_price": 114900,
      "discounted_price": 99900,
      "discount_percentage": 13,
      "discount_type": "fixed_amount",
      "cashback": "7% Cashback",
      "location": ["Chennai", "Hyderabad", "Pune"],
      "state": ["Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
      "valid_until": "2025-09-15",
      "description": "Ultra-thin laptop with M2 chip and 13.6-inch display",
      "rating": 4.7
    },
    {
      "id": 3,
      "title": "Nike Air Max 270",
      "store": "Myntra",
      "category": "fashion",
      "original_price": 12995,
      "discounted_price": 7797,
      "discount_percentage": 40,
      "discount_type": "percentage",
      "cashback": "6.7% Cashback",
      "location": ["Jaipur", "Ahmedabad", "Kolkata"],
      "state": ["Rajasthan", "Gujarat", "West Bengal"],
      "valid_until": "2025-08-25",
      "description": "Premium lifestyle sneakers with Air Max technology",
      "rating": 4.3
    },
    {
      "id": 4,
      "title": "L'Oreal Paris Skincare Kit",
      "store": "Nykaa",
      "category": "beauty_health",
      "original_price": 2999,
      "discounted_price": 1799,
      "discount_percentage": 40,
      "discount_type": "bogo",
      "cashback": "8% Cashback",
      "location": ["Lucknow", "Kochi", "Coimbatore"],
      "state": ["Uttar Pradesh", "Kerala", "Tamil Nadu"],
      "valid_until": "2025-09-01",
      "description": "Complete skincare routine with cleanser, moisturizer and serum",
      "rating": 4.2
    },
    {
      "id": 5,
      "title": "Organic Grocery Combo",
      "store": "BigBasket",
      "category": "grocery_food",
      "original_price": 1500,
      "discounted_price": 1200,
      "discount_percentage": 20,
      "discount_type": "free_shipping",
      "cashback": "4% Cashback",
      "location": ["Surat", "Vadodara", "Nashik"],
      "state": ["Gujarat", "Gujarat", "Maharashtra"],
      "valid_until": "2025-08-30",
      "description": "Fresh organic vegetables, fruits and daily essentials",
      "rating": 4.1
    },
    {
      "id": 6,
      "title": "Sony WH-1000XM5 Headphones",
      "store": "Croma",
      "category": "electronics",
      "original_price": 29990,
      "discounted_price": 24990,
      "discount_percentage": 17,
      "discount_type": "bundle",
      "cashback": "3% Cashback",
      "location": ["Thiruvananthapuram", "Jodhpur", "Howrah"],
      "state": ["Kerala", "Rajasthan", "West Bengal"],
      "valid_until": "2025-09-10",
      "description": "Industry-leading noise canceling with 30-hour battery life",
      "rating": 4.6
    }
  ]
};

// Global variables
let currentDeals = [...appData.deals];
let filteredDeals = [...appData.deals];
let currentModalDeal = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateFilters();
    renderDeals();
    renderCategories();
    renderStores();
    setupEventListeners();
    setupSmoothScrolling();
}

// Populate filter dropdowns
function populateFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const stateFilter = document.getElementById('state-filter');
    const discountTypeFilter = document.getElementById('discount-type-filter');
    
    // Populate categories
    appData.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = category.name;
        categoryFilter.appendChild(option);
    });

    // Populate states
    appData.states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        stateFilter.appendChild(option);
    });

    // Populate discount types
    appData.discountTypes.forEach(discountType => {
        const option = document.createElement('option');
        option.value = discountType.id;
        option.textContent = discountType.name;
        discountTypeFilter.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const stateFilter = document.getElementById('state-filter');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const sortSelect = document.getElementById('sort-select');
    const dealModal = document.getElementById('deal-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const grabDealBtn = document.getElementById('grab-deal-btn');
    const ctaButton = document.querySelector('.cta-button');
    const categoriesGrid = document.getElementById('categories-grid');

    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length >= 2) {
            showSearchSuggestions();
        }
    });
    searchInput.addEventListener('blur', () => {
        setTimeout(hideSearchSuggestions, 200);
    });
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearchSubmit();
        }
    });

    // Filter functionality
    stateFilter.addEventListener('change', handleStateChange);
    applyFiltersBtn.addEventListener('click', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Sorting
    sortSelect.addEventListener('change', handleSort);

    // Modal functionality
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    grabDealBtn.addEventListener('click', () => {
        if (currentModalDeal) {
            handleGrabDeal(currentModalDeal);
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            document.getElementById('deals').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Category cards click
    if (categoriesGrid) {
        categoriesGrid.addEventListener('click', handleCategoryClick);
    }
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) {
        hideSearchSuggestions();
        filteredDeals = [...currentDeals];
        renderDeals();
        return;
    }

    const suggestions = generateSearchSuggestions(query);
    displaySearchSuggestions(suggestions);
    filterDealsBySearch(query);
}

function handleSearchSubmit() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.toLowerCase();
    hideSearchSuggestions();
    
    if (query.length >= 2) {
        filterDealsBySearch(query);
    }
}

function generateSearchSuggestions(query) {
    const suggestions = new Set();
    
    // Search in deals
    appData.deals.forEach(deal => {
        if (deal.title.toLowerCase().includes(query)) {
            suggestions.add(deal.title);
        }
        if (deal.store.toLowerCase().includes(query)) {
            suggestions.add(deal.store);
        }
    });

    // Search in categories
    appData.categories.forEach(category => {
        if (category.name.toLowerCase().includes(query)) {
            suggestions.add(category.name);
        }
    });

    return Array.from(suggestions).slice(0, 5);
}

function displaySearchSuggestions(suggestions) {
    const searchSuggestions = document.getElementById('search-suggestions');
    searchSuggestions.innerHTML = '';
    
    if (suggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }

    suggestions.forEach(suggestion => {
        const div = document.createElement('div');
        div.className = 'search-suggestion';
        div.textContent = suggestion;
        div.addEventListener('mousedown', () => {
            const searchInput = document.getElementById('search-input');
            searchInput.value = suggestion;
            hideSearchSuggestions();
            filterDealsBySearch(suggestion.toLowerCase());
        });
        searchSuggestions.appendChild(div);
    });

    showSearchSuggestions();
}

function showSearchSuggestions() {
    const searchSuggestions = document.getElementById('search-suggestions');
    searchSuggestions.style.display = 'block';
}

function hideSearchSuggestions() {
    const searchSuggestions = document.getElementById('search-suggestions');
    searchSuggestions.style.display = 'none';
}

function filterDealsBySearch(query) {
    filteredDeals = currentDeals.filter(deal => 
        deal.title.toLowerCase().includes(query) ||
        deal.store.toLowerCase().includes(query) ||
        deal.description.toLowerCase().includes(query)
    );
    renderDeals();
}

// State change handler
function handleStateChange(e) {
    const selectedState = e.target.value;
    const cityFilter = document.getElementById('city-filter');
    cityFilter.innerHTML = '<option value="">Select City</option>';
    
    if (selectedState) {
        const stateData = appData.states.find(state => state.name === selectedState);
        if (stateData) {
            stateData.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityFilter.appendChild(option);
            });
            cityFilter.disabled = false;
        }
    } else {
        cityFilter.disabled = true;
    }
}

// Apply filters
function applyFilters() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const dealsGrid = document.getElementById('deals-grid');
    
    showLoading();
    
    setTimeout(() => {
        const categoryFilter = document.getElementById('category-filter');
        const stateFilter = document.getElementById('state-filter');
        const cityFilter = document.getElementById('city-filter');
        const locationFilter = document.getElementById('location-filter');
        const discountTypeFilter = document.getElementById('discount-type-filter');
        
        const filters = {
            category: categoryFilter.value,
            state: stateFilter.value,
            city: cityFilter.value,
            location: locationFilter.value.toLowerCase(),
            discountType: discountTypeFilter.value
        };

        filteredDeals = appData.deals.filter(deal => {
            if (filters.category && deal.category !== filters.category) return false;
            if (filters.state && !deal.state.includes(filters.state)) return false;
            if (filters.city && !deal.location.includes(filters.city)) return false;
            if (filters.location && !deal.location.some(loc => 
                loc.toLowerCase().includes(filters.location))) return false;
            if (filters.discountType && deal.discount_type !== filters.discountType) return false;
            return true;
        });

        currentDeals = [...filteredDeals];
        hideLoading();
        renderDeals();
        
        // Scroll to deals section
        document.getElementById('deals').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

// Clear filters
function clearFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const stateFilter = document.getElementById('state-filter');
    const cityFilter = document.getElementById('city-filter');
    const locationFilter = document.getElementById('location-filter');
    const discountTypeFilter = document.getElementById('discount-type-filter');
    const searchInput = document.getElementById('search-input');
    
    categoryFilter.value = '';
    stateFilter.value = '';
    cityFilter.value = '';
    cityFilter.disabled = true;
    locationFilter.value = '';
    discountTypeFilter.value = '';
    searchInput.value = '';
    
    currentDeals = [...appData.deals];
    filteredDeals = [...appData.deals];
    renderDeals();
}

// Sort functionality
function handleSort(e) {
    const sortBy = e.target.value;
    
    filteredDeals.sort((a, b) => {
        switch (sortBy) {
            case 'discount_percentage':
                return b.discount_percentage - a.discount_percentage;
            case 'price_low':
                return a.discounted_price - b.discounted_price;
            case 'price_high':
                return b.discounted_price - a.discounted_price;
            case 'rating':
                return b.rating - a.rating;
            case 'expiry':
                return new Date(a.valid_until) - new Date(b.valid_until);
            default:
                return 0;
        }
    });
    
    renderDeals();
}

// Loading states
function showLoading() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const dealsGrid = document.getElementById('deals-grid');
    
    loadingSpinner.classList.remove('hidden');
    dealsGrid.style.opacity = '0.5';
}

function hideLoading() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const dealsGrid = document.getElementById('deals-grid');
    
    loadingSpinner.classList.add('hidden');
    dealsGrid.style.opacity = '1';
}

// Render deals
function renderDeals() {
    const dealsGrid = document.getElementById('deals-grid');
    dealsGrid.innerHTML = '';
    
    if (filteredDeals.length === 0) {
        dealsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h4>No deals found</h4>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    filteredDeals.forEach(deal => {
        const dealCard = createDealCard(deal);
        dealsGrid.appendChild(dealCard);
    });
}

// Create deal card
function createDealCard(deal) {
    const card = document.createElement('div');
    card.className = 'deal-card';
    
    const categoryIcon = appData.categories.find(cat => cat.id === deal.category)?.icon || '🛍️';
    const storeInfo = appData.stores.find(store => store.name === deal.store);
    
    card.innerHTML = `
        <div class="deal-image">
            ${categoryIcon}
            <div class="discount-badge">${deal.discount_percentage}% OFF</div>
        </div>
        <div class="deal-content">
            <h4 class="deal-title">${deal.title}</h4>
            <div class="deal-store">
                <span class="store-logo">${storeInfo?.logo || '🏪'}</span>
                <span class="store-name">${deal.store}</span>
            </div>
            <div class="deal-prices">
                <span class="original-price">₹${deal.original_price.toLocaleString()}</span>
                <span class="discounted-price">₹${deal.discounted_price.toLocaleString()}</span>
            </div>
            <div class="deal-details">
                <div class="cashback">${deal.cashback}</div>
                <div class="location">Available in: ${deal.location.join(', ')}</div>
            </div>
            <div class="deal-meta">
                <div class="deal-rating">
                    ${'⭐'.repeat(Math.floor(deal.rating))} ${deal.rating}
                </div>
                <div class="deal-expiry">Expires: ${formatDate(deal.valid_until)}</div>
            </div>
            <button class="btn btn--primary grab-deal-btn" onclick="openDealModal(${deal.id})">
                Grab Deal
            </button>
        </div>
    `;
    
    // Add click event to the entire card for modal opening
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.grab-deal-btn')) {
            openDealModal(deal.id);
        }
    });
    
    return card;
}

// Render categories
function renderCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    
    appData.categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.dataset.categoryId = category.id;
        
        const dealCount = appData.deals.filter(deal => deal.category === category.id).length;
        
        categoryCard.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h4 class="category-name">${category.name}</h4>
            <p class="category-count">${dealCount} deals available</p>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

// Render stores
function renderStores() {
    const storesScroll = document.getElementById('stores-scroll');
    
    appData.stores.forEach(store => {
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        
        storeCard.innerHTML = `
            <span class="store-logo">${store.logo}</span>
            <h4 class="store-name">${store.name}</h4>
            <p class="store-cashback">${store.cashback} Cashback</p>
            <p class="store-rating">${'⭐'.repeat(Math.floor(store.rating))} ${store.rating}</p>
        `;
        
        storesScroll.appendChild(storeCard);
    });
}

// Handle category clicks
function handleCategoryClick(e) {
    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
        const categoryId = categoryCard.dataset.categoryId;
        const categoryFilter = document.getElementById('category-filter');
        categoryFilter.value = categoryId;
        applyFilters();
    }
}

// Modal functionality
function openDealModal(dealId) {
    const deal = appData.deals.find(d => d.id === dealId);
    if (!deal) return;
    
    currentModalDeal = deal;
    
    const categoryIcon = appData.categories.find(cat => cat.id === deal.category)?.icon || '🛍️';
    const storeInfo = appData.stores.find(store => store.name === deal.store);
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const dealModal = document.getElementById('deal-modal');
    
    modalTitle.textContent = deal.title;
    modalBody.innerHTML = `
        <div class="modal-deal-image" style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">
            ${categoryIcon}
        </div>
        <div class="modal-deal-info">
            <div class="deal-store" style="margin-bottom: 1rem;">
                <span style="font-size: 1.5rem; margin-right: 0.5rem;">${storeInfo?.logo || '🏪'}</span>
                <strong>${deal.store}</strong>
            </div>
            <div class="deal-prices" style="margin-bottom: 1rem;">
                <span style="text-decoration: line-through; color: #888; margin-right: 0.5rem;">₹${deal.original_price.toLocaleString()}</span>
                <span style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">₹${deal.discounted_price.toLocaleString()}</span>
                <span style="background: var(--gradient-accent); color: white; padding: 0.25rem 0.5rem; border-radius: 1rem; margin-left: 0.5rem; font-size: 0.875rem;">${deal.discount_percentage}% OFF</span>
            </div>
            <p style="margin-bottom: 1rem;"><strong>Description:</strong> ${deal.description}</p>
            <p style="margin-bottom: 1rem;"><strong>Cashback:</strong> ${deal.cashback}</p>
            <p style="margin-bottom: 1rem;"><strong>Available in:</strong> ${deal.location.join(', ')}</p>
            <p style="margin-bottom: 1rem;"><strong>Rating:</strong> ${'⭐'.repeat(Math.floor(deal.rating))} ${deal.rating}</p>
            <p style="margin-bottom: 1rem;"><strong>Valid Until:</strong> ${formatDate(deal.valid_until)}</p>
        </div>
    `;
    
    dealModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const dealModal = document.getElementById('deal-modal');
    dealModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentModalDeal = null;
}

function handleGrabDeal(deal) {
    alert(`🎉 Redirecting to ${deal.store} for this amazing deal!\n\nDeal: ${deal.title}\nPrice: ₹${deal.discounted_price.toLocaleString()}\nSavings: ${deal.discount_percentage}% OFF`);
    closeModal();
}

// Smooth scrolling setup
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Make functions globally accessible for onclick handlers
window.openDealModal = openDealModal;