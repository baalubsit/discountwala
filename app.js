// DiscountFinder India App - Enhanced with Affiliate Links
class DiscountFinderApp {
    constructor() {
        this.stores = {};
        this.deals = [];
        this.filteredDeals = [];
        this.currentPage = 1;
        this.dealsPerPage = 12;
        this.currentModal = null;
        
        this.init();
    }

    async init() {
        this.loadData();
        this.setupEventListeners();
        this.setupTheme();
        this.populateFilters();
        this.displayDeals();
    }

    loadData() {
        // Embedded JSON data with affiliate links
        this.stores = {
            "amazon_india": {
                "name": "Amazon India",
                "base_url": "https://www.amazon.in",
                "affiliate_structure": "https://www.amazon.in/dp/{asin}/?tag={affiliate_id}",
                "affiliate_id": "discountfind-21",
                "api_available": true,
                "categories": ["electronics", "fashion", "home_kitchen", "beauty_health", "grocery_food", "books_education", "sports_fitness"],
                "commission_rate": "Up to 8%",
                "cashback": "Up to 5%"
            },
            "flipkart": {
                "name": "Flipkart",
                "base_url": "https://www.flipkart.com",
                "affiliate_structure": "https://www.flipkart.com/{product_url}?affid={affiliate_id}",
                "affiliate_id": "discountfi",
                "api_available": true,
                "categories": ["electronics", "fashion", "home_kitchen", "grocery_food", "books_education", "sports_fitness"],
                "commission_rate": "Up to 12%",
                "cashback": "Up to 7%"
            },
            "myntra": {
                "name": "Myntra",
                "base_url": "https://www.myntra.com",
                "affiliate_structure": "https://www.myntra.com/{product_id}?utm_source=dma_{affiliate_id}",
                "affiliate_id": "discount_finder",
                "api_available": true,
                "categories": ["fashion"],
                "commission_rate": "Up to 10%",
                "cashback": "Up to 6.7%"
            },
            "nykaa": {
                "name": "Nykaa",
                "base_url": "https://www.nykaa.com",
                "affiliate_structure": "https://www.nykaa.com/{product_url}?utm_source={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["beauty_health"],
                "commission_rate": "Up to 15%",
                "cashback": "Up to 8%"
            },
            "bigbasket": {
                "name": "BigBasket",
                "base_url": "https://www.bigbasket.com",
                "affiliate_structure": "https://www.bigbasket.com/pd/{product_id}/?nc=as-{affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["grocery_food"],
                "commission_rate": "Up to 6%",
                "cashback": "Up to 4%"
            },
            "croma": {
                "name": "Croma",
                "base_url": "https://www.croma.com",
                "affiliate_structure": "https://www.croma.com/{product_url}?ref={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["electronics"],
                "commission_rate": "Up to 5%",
                "cashback": "Up to 3%"
            },
            "ajio": {
                "name": "AJIO",
                "base_url": "https://www.ajio.com",
                "affiliate_structure": "https://www.ajio.com/p/{product_id}?source={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["fashion"],
                "commission_rate": "Up to 8%",
                "cashback": "Up to 5%"
            },
            "meesho": {
                "name": "Meesho",
                "base_url": "https://www.meesho.com",
                "affiliate_structure": "https://www.meesho.com/s/p/{product_id}?srsltid={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["fashion", "home_kitchen"],
                "commission_rate": "Up to 12%",
                "cashback": "Up to 6%"
            },
            "snapdeal": {
                "name": "Snapdeal",
                "base_url": "https://www.snapdeal.com",
                "affiliate_structure": "https://www.snapdeal.com/product/{product_name}/{product_id}?utm_source={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["electronics", "fashion", "home_kitchen"],
                "commission_rate": "Up to 10%",
                "cashback": "Up to 5%"
            },
            "tatacliq": {
                "name": "Tata CLiQ",
                "base_url": "https://www.tatacliq.com",
                "affiliate_structure": "https://www.tatacliq.com/{product_url}?cid={affiliate_id}",
                "affiliate_id": "discountfinder",
                "api_available": false,
                "categories": ["electronics", "fashion", "beauty_health"],
                "commission_rate": "Up to 7%",
                "cashback": "Up to 4%"
            }
        };

        // Sample deals with affiliate URLs
        this.deals = [
            {
                "id": "deal_1",
                "title": "Samsung Galaxy S24 Ultra 256GB",
                "description": "Latest Samsung flagship smartphone with AI features, S Pen, and advanced camera system",
                "store": "amazon_india",
                "category": "electronics",
                "original_price": 129999,
                "current_price": 104999,
                "discount_percentage": 19,
                "rating": 4.4,
                "reviews_count": 2847,
                "image_url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.amazon.in/dp/B0CMDRCBZZ/?tag=discountfind-21",
                "expires_at": "2025-08-30T23:59:59Z",
                "featured": true
            },
            {
                "id": "deal_2",
                "title": "Apple iPhone 15 Pro 128GB",
                "description": "Revolutionary iPhone with titanium design and Action Button",
                "store": "flipkart",
                "category": "electronics",
                "original_price": 134900,
                "current_price": 119900,
                "discount_percentage": 11,
                "rating": 4.6,
                "reviews_count": 1523,
                "image_url": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.flipkart.com/apple-iphone-15-pro-natural-titanium-128-gb/p/itm6ac6485515ae4?affid=discountfi",
                "expires_at": "2025-08-25T23:59:59Z",
                "featured": true
            },
            {
                "id": "deal_3",
                "title": "Nike Air Max 270 Running Shoes",
                "description": "Comfortable running shoes with Max Air unit in the heel",
                "store": "myntra",
                "category": "fashion",
                "original_price": 12995,
                "current_price": 8495,
                "discount_percentage": 35,
                "rating": 4.2,
                "reviews_count": 756,
                "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.myntra.com/15702048?utm_source=dma_discount_finder",
                "expires_at": "2025-08-28T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_4",
                "title": "Nykaa SKINgenius Vitamin C Serum",
                "description": "20% Vitamin C serum for glowing and radiant skin",
                "store": "nykaa",
                "category": "beauty_health",
                "original_price": 1499,
                "current_price": 899,
                "discount_percentage": 40,
                "rating": 4.3,
                "reviews_count": 2134,
                "image_url": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.nykaa.com/nykaa-skingenius-20-vitamin-c-face-serum/p/2815463?utm_source=discountfinder",
                "expires_at": "2025-08-26T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_5",
                "title": "LG 55 Inch 4K OLED Smart TV",
                "description": "Premium OLED TV with Dolby Vision and webOS smart platform",
                "store": "croma",
                "category": "electronics",
                "original_price": 149990,
                "current_price": 124990,
                "discount_percentage": 17,
                "rating": 4.5,
                "reviews_count": 892,
                "image_url": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.croma.com/lg-55c3psa-139-cm-55-inch-oled-4k-ultra-hd-smart-tv/p/264050?ref=discountfinder",
                "expires_at": "2025-08-31T23:59:59Z",
                "featured": true
            },
            {
                "id": "deal_6",
                "title": "Levi's 511 Slim Fit Jeans",
                "description": "Classic slim fit jeans in dark wash",
                "store": "ajio",
                "category": "fashion",
                "original_price": 3999,
                "current_price": 2399,
                "discount_percentage": 40,
                "rating": 4.1,
                "reviews_count": 1247,
                "image_url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.ajio.com/p/460146648_darkblue?source=discountfinder",
                "expires_at": "2025-08-27T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_7",
                "title": "Instant Pot 6Qt Electric Pressure Cooker",
                "description": "7-in-1 multi-functional electric pressure cooker",
                "store": "amazon_india",
                "category": "home_kitchen",
                "original_price": 12995,
                "current_price": 8999,
                "discount_percentage": 31,
                "rating": 4.4,
                "reviews_count": 5672,
                "image_url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.amazon.in/dp/B07W55DDFB/?tag=discountfind-21",
                "expires_at": "2025-08-29T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_8",
                "title": "Organic Basmati Rice 5kg",
                "description": "Premium organic basmati rice, aged for 2 years",
                "store": "bigbasket",
                "category": "grocery_food",
                "original_price": 1200,
                "current_price": 899,
                "discount_percentage": 25,
                "rating": 4.3,
                "reviews_count": 3421,
                "image_url": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.bigbasket.com/pd/1234567/?nc=as-discountfinder",
                "expires_at": "2025-08-24T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_9",
                "title": "Adidas Ultraboost 22 Running Shoes",
                "description": "Energy-returning running shoes with Primeknit upper",
                "store": "meesho",
                "category": "sports_fitness",
                "original_price": 16999,
                "current_price": 11999,
                "discount_percentage": 29,
                "rating": 4.2,
                "reviews_count": 987,
                "image_url": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.meesho.com/s/p/4m2p4b?srsltid=discountfinder",
                "expires_at": "2025-08-30T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_10",
                "title": "Sony WH-1000XM5 Wireless Headphones",
                "description": "Industry-leading noise canceling wireless headphones",
                "store": "snapdeal",
                "category": "electronics",
                "original_price": 29990,
                "current_price": 24990,
                "discount_percentage": 17,
                "rating": 4.6,
                "reviews_count": 1876,
                "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.snapdeal.com/product/sony-wh-1000xm5/641234567?utm_source=discountfinder",
                "expires_at": "2025-08-28T23:59:59Z",
                "featured": true
            },
            {
                "id": "deal_11",
                "title": "Forest Essentials Facial Cleanser",
                "description": "Ayurvedic facial cleanser with natural ingredients",
                "store": "tatacliq",
                "category": "beauty_health",
                "original_price": 2250,
                "current_price": 1575,
                "discount_percentage": 30,
                "rating": 4.1,
                "reviews_count": 654,
                "image_url": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.tatacliq.com/forest-essentials-delicate-facial-cleanser-kashmi/p-mp000000008456789?cid=discountfinder",
                "expires_at": "2025-08-26T23:59:59Z",
                "featured": false
            },
            {
                "id": "deal_12",
                "title": "OnePlus Nord CE 3 Lite 5G",
                "description": "Affordable 5G smartphone with 108MP camera",
                "store": "flipkart",
                "category": "electronics",
                "original_price": 19999,
                "current_price": 16999,
                "discount_percentage": 15,
                "rating": 4.0,
                "reviews_count": 2341,
                "image_url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
                "affiliate_url": "https://www.flipkart.com/oneplus-nord-ce-3-lite-5g-pastel-lime-128-gb/p/itm847a5b4a4e5bd?affid=discountfi",
                "expires_at": "2025-08-25T23:59:59Z",
                "featured": false
            }
        ];

        this.filteredDeals = [...this.deals];
    }

    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (searchInput && searchBtn) {
            searchInput.addEventListener('input', this.handleSearchInput.bind(this));
            searchInput.addEventListener('focus', this.showSearchSuggestions.bind(this));
            searchInput.addEventListener('blur', () => {
                setTimeout(() => this.hideSearchSuggestions(), 150);
            });
            searchBtn.addEventListener('click', this.handleSearch.bind(this));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSearch();
                }
            });
        }

        // Filters
        const storeFilter = document.getElementById('storeFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const clearFiltersBtn = document.getElementById('clearFilters');

        if (storeFilter) storeFilter.addEventListener('change', this.handleFiltersChange.bind(this));
        if (categoryFilter) categoryFilter.addEventListener('change', this.handleFiltersChange.bind(this));
        if (sortFilter) sortFilter.addEventListener('change', this.handleFiltersChange.bind(this));
        if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', this.clearFilters.bind(this));

        // Load more
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) loadMoreBtn.addEventListener('click', this.loadMore.bind(this));

        // Modal
        const modalClose = document.getElementById('modalClose');
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        const modalBackdrop = document.getElementById('modalBackdrop');

        if (modalClose) modalClose.addEventListener('click', this.closeModal.bind(this));
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', this.closeModal.bind(this));
        if (modalBackdrop) modalBackdrop.addEventListener('click', this.closeModal.bind(this));

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) themeToggle.addEventListener('click', this.toggleTheme.bind(this));
    }

    setupTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        this.updateThemeIcon(currentTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    populateFilters() {
        const storeFilter = document.getElementById('storeFilter');
        
        if (storeFilter) {
            Object.entries(this.stores).forEach(([key, store]) => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = store.name;
                storeFilter.appendChild(option);
            });
        }
    }

    handleSearchInput(e) {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            this.showSearchSuggestions();
        } else {
            this.hideSearchSuggestions();
        }
    }

    showSearchSuggestions() {
        const searchInput = document.getElementById('searchInput');
        const suggestionsContainer = document.getElementById('searchSuggestions');
        
        if (!searchInput || !suggestionsContainer) return;
        
        const query = searchInput.value.trim().toLowerCase();
        
        if (query.length < 2) {
            this.hideSearchSuggestions();
            return;
        }

        const suggestions = this.deals
            .filter(deal => 
                deal.title.toLowerCase().includes(query) ||
                this.stores[deal.store].name.toLowerCase().includes(query) ||
                deal.category.toLowerCase().includes(query)
            )
            .slice(0, 5)
            .map(deal => ({
                text: deal.title,
                type: 'product',
                store: this.stores[deal.store].name
            }));

        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions
                .map(suggestion => `
                    <div class="search-suggestion" data-suggestion="${suggestion.text}">
                        <strong>${suggestion.text}</strong>
                        <small> from ${suggestion.store}</small>
                    </div>
                `)
                .join('');
            
            suggestionsContainer.style.display = 'block';
            
            // Add click listeners to suggestions
            suggestionsContainer.querySelectorAll('.search-suggestion').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const suggestion = e.currentTarget.dataset.suggestion;
                    searchInput.value = suggestion;
                    this.handleSearch();
                    this.hideSearchSuggestions();
                });
            });
        } else {
            this.hideSearchSuggestions();
        }
    }

    hideSearchSuggestions() {
        const suggestionsContainer = document.getElementById('searchSuggestions');
        if (suggestionsContainer) {
            suggestionsContainer.style.display = 'none';
        }
    }

    handleSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const query = searchInput.value.trim().toLowerCase();
        
        if (query) {
            this.filteredDeals = this.deals.filter(deal => 
                deal.title.toLowerCase().includes(query) ||
                deal.description.toLowerCase().includes(query) ||
                this.stores[deal.store].name.toLowerCase().includes(query) ||
                deal.category.toLowerCase().includes(query)
            );
        } else {
            this.filteredDeals = [...this.deals];
        }
        
        this.currentPage = 1;
        this.displayDeals();
        this.hideSearchSuggestions();
    }

    handleFiltersChange() {
        const storeFilter = document.getElementById('storeFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        
        const storeValue = storeFilter ? storeFilter.value : '';
        const categoryValue = categoryFilter ? categoryFilter.value : '';
        const sortValue = sortFilter ? sortFilter.value : 'discount_desc';

        // Apply filters
        this.filteredDeals = this.deals.filter(deal => {
            const storeMatch = !storeValue || deal.store === storeValue;
            const categoryMatch = !categoryValue || deal.category === categoryValue;
            return storeMatch && categoryMatch;
        });

        // Apply search if there's a query
        const searchInput = document.getElementById('searchInput');
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        if (query) {
            this.filteredDeals = this.filteredDeals.filter(deal => 
                deal.title.toLowerCase().includes(query) ||
                deal.description.toLowerCase().includes(query) ||
                this.stores[deal.store].name.toLowerCase().includes(query)
            );
        }

        // Apply sorting
        this.sortDeals(sortValue);
        
        this.currentPage = 1;
        this.displayDeals();
    }

    sortDeals(sortBy) {
        switch (sortBy) {
            case 'discount_desc':
                this.filteredDeals.sort((a, b) => b.discount_percentage - a.discount_percentage);
                break;
            case 'price_asc':
                this.filteredDeals.sort((a, b) => a.current_price - b.current_price);
                break;
            case 'price_desc':
                this.filteredDeals.sort((a, b) => b.current_price - a.current_price);
                break;
            case 'rating_desc':
                this.filteredDeals.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                // For demo purposes, sort by ID (assuming newer deals have higher IDs)
                this.filteredDeals.sort((a, b) => b.id.localeCompare(a.id));
                break;
        }
    }

    clearFilters() {
        const storeFilter = document.getElementById('storeFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const searchInput = document.getElementById('searchInput');
        
        if (storeFilter) storeFilter.value = '';
        if (categoryFilter) categoryFilter.value = '';
        if (sortFilter) sortFilter.value = 'discount_desc';
        if (searchInput) searchInput.value = '';
        
        this.filteredDeals = [...this.deals];
        this.currentPage = 1;
        this.displayDeals();
    }

    displayDeals() {
        const dealsGrid = document.getElementById('dealsGrid');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        const resultsCount = document.getElementById('resultsCount');

        if (!dealsGrid) return;

        // Show loading
        if (loadingSpinner) loadingSpinner.classList.remove('hidden');
        dealsGrid.innerHTML = '';

        // Simulate loading delay for smooth UX
        setTimeout(() => {
            const startIndex = 0;
            const endIndex = this.currentPage * this.dealsPerPage;
            const dealsToShow = this.filteredDeals.slice(startIndex, endIndex);

            // Update results count
            if (resultsCount) {
                resultsCount.textContent = `Showing ${dealsToShow.length} of ${this.filteredDeals.length} deals`;
            }

            // Clear and populate deals grid
            dealsGrid.innerHTML = '';
            
            dealsToShow.forEach((deal, index) => {
                const dealCard = this.createDealCard(deal, index);
                dealsGrid.appendChild(dealCard);
            });

            // Show/hide load more button
            if (loadMoreContainer) {
                if (endIndex < this.filteredDeals.length) {
                    loadMoreContainer.classList.remove('hidden');
                } else {
                    loadMoreContainer.classList.add('hidden');
                }
            }

            // Hide loading
            if (loadingSpinner) loadingSpinner.classList.add('hidden');

            // Trigger lazy loading for images
            this.setupLazyLoading();
        }, 300);
    }

    createDealCard(deal, index) {
        const store = this.stores[deal.store];
        const categoryName = this.getCategoryName(deal.category);

        const card = document.createElement('a');
        card.className = 'deal-card';
        card.href = deal.affiliate_url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.setProperty('--animation-delay', index);
        card.setAttribute('aria-label', `View ${deal.title} on ${store.name}`);

        card.innerHTML = `
            <div class="deal-card__image">
                <img 
                    data-src="${deal.image_url}" 
                    alt="${deal.title}"
                    class="deal-card__img lazy-load"
                    loading="lazy"
                >
                <div class="deal-card__discount">${deal.discount_percentage}% OFF</div>
                <div class="deal-card__store">${store.name}</div>
            </div>
            <div class="deal-card__content">
                <h3 class="deal-card__title">${deal.title}</h3>
                <div class="deal-card__prices">
                    <span class="deal-card__current-price">₹${deal.current_price.toLocaleString()}</span>
                    <span class="deal-card__original-price">₹${deal.original_price.toLocaleString()}</span>
                </div>
                <div class="deal-card__rating">
                    <span class="deal-card__stars">${this.generateStars(deal.rating)}</span>
                    <span class="deal-card__rating-text">${deal.rating} (${deal.reviews_count})</span>
                </div>
                <div class="deal-card__footer">
                    <span class="deal-card__category">${categoryName}</span>
                    <span class="deal-card__button">🛒 Grab Deal</span>
                </div>
            </div>
        `;

        return card;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '⭐';
        }
        if (hasHalfStar) {
            stars += '⭐';
        }
        
        return stars;
    }

    getCategoryName(category) {
        const categoryNames = {
            'electronics': 'Electronics',
            'fashion': 'Fashion',
            'home_kitchen': 'Home & Kitchen',
            'beauty_health': 'Beauty & Health',
            'grocery_food': 'Grocery & Food',
            'books_education': 'Books & Education',
            'sports_fitness': 'Sports & Fitness'
        };
        return categoryNames[category] || category;
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('.lazy-load');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
            });
        }
    }

    loadMore() {
        this.currentPage++;
        this.displayDeals();
    }

    openModal(deal) {
        const modal = document.getElementById('dealModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalProceedBtn = document.getElementById('modalProceedBtn');
        
        if (!modal || !modalTitle || !modalContent || !modalProceedBtn) return;
        
        const store = this.stores[deal.store];
        
        modalTitle.textContent = deal.title;
        modalProceedBtn.href = deal.affiliate_url;
        
        modalContent.innerHTML = `
            <img src="${deal.image_url}" alt="${deal.title}" class="modal-deal-image">
            <div class="modal-deal-info">
                <div class="modal-deal-prices">
                    <span class="modal-deal-current-price">₹${deal.current_price.toLocaleString()}</span>
                    <span class="modal-deal-original-price">₹${deal.original_price.toLocaleString()}</span>
                    <span class="modal-deal-discount">${deal.discount_percentage}% OFF</span>
                </div>
                <p class="modal-deal-description">${deal.description}</p>
                <div class="modal-deal-details">
                    <div class="modal-deal-detail">
                        <span class="modal-deal-label">Store:</span>
                        <span class="modal-deal-value">${store.name}</span>
                    </div>
                    <div class="modal-deal-detail">
                        <span class="modal-deal-label">Category:</span>
                        <span class="modal-deal-value">${this.getCategoryName(deal.category)}</span>
                    </div>
                    <div class="modal-deal-detail">
                        <span class="modal-deal-label">Rating:</span>
                        <span class="modal-deal-value">${this.generateStars(deal.rating)} ${deal.rating} (${deal.reviews_count} reviews)</span>
                    </div>
                    <div class="modal-deal-detail">
                        <span class="modal-deal-label">You Save:</span>
                        <span class="modal-deal-value">₹${(deal.original_price - deal.current_price).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        this.currentModal = deal;
        
        // Focus management for accessibility
        modalProceedBtn.focus();
    }

    closeModal() {
        const modal = document.getElementById('dealModal');
        if (modal) {
            modal.classList.add('hidden');
            this.currentModal = null;
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DiscountFinderApp();
});