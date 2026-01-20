// Configuration
const CONFIG = {
	API_URL: 'https://api.mcsrvstat.us/3/10b10t.com',
	CRAFATAR_URL: 'https://crafatar.com/avatars',
	UPDATE_INTERVAL: 60000, // 60 seconds
	CACHE_DURATION: 30000, // 30 seconds
	IMAGES: [
		'spawn_render.png',
		'portal.png',
		'spawn.png',
		'cave.png',
		'chamber.png',
		'theend.png'
	]
};

// Cache for API responses
const cache = {
	data: null,
	timestamp: null,
	isValid() {
		return this.data && this.timestamp && (Date.now() - this.timestamp < CONFIG.CACHE_DURATION);
	},
	set(data) {
		this.data = data;
		this.timestamp = Date.now();
	},
	get() {
		return this.isValid() ? this.data : null;
	},
	clear() {
		this.data = null;
		this.timestamp = null;
	}
};

// DOM Elements (cached for performance)
const elements = {
	statusSpan: null,
	playerCount: null,
	playerList: null,
	imageContainer: null,
	init() {
		this.statusSpan = document.getElementById('server-status');
		this.playerCount = document.getElementById('player-count');
		this.playerList = document.getElementById('player-list');
		this.imageContainer = document.getElementById('image-container');
	}
};

// Gallery initialization
function initGallery() {
	if (!elements.imageContainer) return;

	const fragment = document.createDocumentFragment();
	
	CONFIG.IMAGES.forEach(img => {
		const link = document.createElement('a');
		link.href = `images/${img}`;
		link.target = '_blank';
		link.rel = 'noopener noreferrer';
		link.setAttribute('aria-label', `View ${img.replace(/\.[^/.]+$/, '')} in full size`);

		const image = document.createElement('img');
		image.src = `images/${img}`;
		image.alt = img.replace(/\.[^/.]+$/, '').replace(/_/g, ' ');
		image.className = 'gallery-img';
		image.loading = 'lazy';
		
		// Error handling for images
		image.onerror = function() {
			this.style.display = 'none';
			console.warn(`Failed to load image: ${img}`);
		};

		link.appendChild(image);
		fragment.appendChild(link);
	});

	elements.imageContainer.appendChild(fragment);
}

// Create player head HTML
function createPlayerHead(player) {
	const wrapper = document.createElement('div');
	wrapper.className = 'player-head-wrapper';

	const img = document.createElement('img');
	img.className = 'player-head loading';
	img.title = player.name;
	img.alt = `${player.name}'s Minecraft avatar`;
	img.loading = 'lazy';

	// Set source with UUID or fallback to name-based
	if (player.uuid) {
		img.src = `${CONFIG.CRAFATAR_URL}/${player.uuid}?size=32&overlay`;
	} else {
		// Fallback for players without UUID
		img.src = `${CONFIG.CRAFATAR_URL}/${player.name}?size=32&overlay`;
	}

	// Handle image load success
	img.onload = function() {
		this.classList.remove('loading');
	};

	// Handle image load failure
	img.onerror = function() {
		// Create fallback element
		const fallback = document.createElement('div');
		fallback.className = 'player-head-fallback';
		fallback.textContent = player.name.charAt(0).toUpperCase();
		fallback.title = player.name;
		this.replaceWith(fallback);
	};

	const name = document.createElement('div');
	name.textContent = player.name;

	wrapper.appendChild(img);
	wrapper.appendChild(name);

	return wrapper;
}

// Update server status
async function updateStatus() {
	// Check cache first
	const cachedData = cache.get();
	if (cachedData) {
		renderStatus(cachedData);
		return;
	}

	try {
		const response = await fetch(CONFIG.API_URL);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		cache.set(data);
		renderStatus(data);

	} catch (error) {
		console.error('Failed to fetch server status:', error);
		handleStatusError();
	}
}

// Render status to DOM
function renderStatus(data) {
	if (!elements.statusSpan || !elements.playerCount || !elements.playerList) {
		return;
	}

	if (data.online) {
		elements.statusSpan.innerHTML = '<span class="online">ONLINE</span>';
		elements.playerCount.textContent = `${data.players.online} / ${data.players.max}`;
		
		// Clear existing players
		elements.playerList.innerHTML = '';

		// Render player list if available
		if (data.players.list && data.players.list.length > 0) {
			const fragment = document.createDocumentFragment();
			
			data.players.list.forEach(player => {
				fragment.appendChild(createPlayerHead(player));
			});

			elements.playerList.appendChild(fragment);
		} else if (data.players.online > 0) {
			// Server has players but API didn't return list
			elements.playerList.innerHTML = '<span style="color: var(--text-secondary); font-style: italic;">Player list unavailable</span>';
		}
	} else {
		elements.statusSpan.innerHTML = '<span class="offline">OFFLINE</span>';
		elements.playerCount.textContent = '0 / 0';
		elements.playerList.innerHTML = '';
	}
}

// Handle status fetch errors
function handleStatusError() {
	if (!elements.statusSpan || !elements.playerCount || !elements.playerList) {
		return;
	}

	elements.statusSpan.innerHTML = '<span class="offline">QUERY ERROR</span>';
	elements.playerCount.textContent = '- / -';
	elements.playerList.innerHTML = '<span style="color: var(--text-secondary); font-style: italic;">Unable to fetch server data</span>';
}

// Navigation smooth scrolling
function initNavigation() {
	const navLinks = document.querySelectorAll('.navigation .panel');
	const mask = document.querySelector('.mask');
	
	if (!mask) return;

	navLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			
			// Remove active class from all links
			navLinks.forEach(l => l.classList.remove('active'));
			
			// Add active class to clicked link
			link.classList.add('active');
			
			// Get target section
			const targetId = link.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			
			if (targetElement) {
				// Calculate position within the scrollable mask container
				const maskRect = mask.getBoundingClientRect();
				const targetRect = targetElement.getBoundingClientRect();
				const scrollPosition = mask.scrollTop + (targetRect.top - maskRect.top);
				
				// Smooth scroll to target
				mask.scrollTo({
					top: scrollPosition,
					behavior: 'smooth'
				});
			}
		});
	});
}

// Initialize visibility change handler (pause updates when tab is hidden)
function initVisibilityHandler() {
	let updateInterval;

	function startUpdates() {
		updateStatus(); // Immediate update
		updateInterval = setInterval(updateStatus, CONFIG.UPDATE_INTERVAL);
	}

	function stopUpdates() {
		if (updateInterval) {
			clearInterval(updateInterval);
			updateInterval = null;
		}
	}

	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			stopUpdates();
		} else {
			cache.clear(); // Clear cache when returning to tab
			startUpdates();
		}
	});

	// Start initial updates
	startUpdates();
}

// Initialize everything when DOM is ready
function init() {
	// Cache DOM elements
	elements.init();

	// Initialize components
	initGallery();
	initNavigation();
	initVisibilityHandler();
}

// Run initialization
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}

// Export for debugging (optional)
if (typeof window !== 'undefined') {
	window.serverStatus = {
		updateNow: updateStatus,
		clearCache: () => cache.clear(),
		getCache: () => cache.get()
	};
}
