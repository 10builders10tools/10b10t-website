// Copy IP to clipboard
function copyIP() {
    navigator.clipboard.writeText('10b10t.com').then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Gallery images
const galleryImages = [
    'spawn_render.png',
'portal.png',
'spawn.png',
'cave.png',
'chamber.png',
'theend.png'
];

// Initialize gallery
function initGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    galleryImages.forEach(img => {
        const item = document.createElement('a');
        item.href = `images/${img}`;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
        item.className = 'gallery-item';

        const image = document.createElement('img');
        image.src = `images/${img}`;
        image.alt = img.replace('.png', '').replace('_', ' ');
        image.loading = 'lazy';

        item.appendChild(image);
        container.appendChild(item);
    });
}

// Update server status
async function updateServerStatus() {
    try {
        const response = await fetch('https://api.mcsrvstat.us/3/10b10t.com');
        const data = await response.json();

        const statusEl = document.getElementById('server-status');
        const playerCountEl = document.getElementById('player-count');
        const playerListEl = document.getElementById('player-list');

        if (data.online) {
            statusEl.textContent = 'Online';
            statusEl.className = 'status-value online';
            playerCountEl.textContent = `${data.players.online} / ${data.players.max}`;

            // Display player list
            if (data.players.list && data.players.list.length > 0) {
                playerListEl.innerHTML = '';
                data.players.list.forEach(player => {
                    const playerItem = document.createElement('div');
                    playerItem.className = 'player-item';

                    const head = document.createElement('img');
                    head.src = `https://crafatar.com/avatars/${player.uuid}?size=48&overlay`;
                    head.alt = player.name;
                    head.className = 'player-head';
                    head.onerror = function() {
                        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect fill="%23334155" width="48" height="48"/%3E%3C/svg%3E';
                    };

                    const name = document.createElement('div');
                    name.className = 'player-name';
                    name.textContent = player.name;

                    playerItem.appendChild(head);
                    playerItem.appendChild(name);
                    playerListEl.appendChild(playerItem);
                });
            } else {
                playerListEl.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 1rem;">No player data available</div>';
            }
        } else {
            statusEl.textContent = 'Offline';
            statusEl.className = 'status-value offline';
            playerCountEl.textContent = '0 / 0';
            playerListEl.innerHTML = '';
        }
    } catch (error) {
        console.error('Failed to fetch server status:', error);
        document.getElementById('server-status').textContent = 'Error';
        document.getElementById('server-status').className = 'status-value offline';
    }
}

// Smooth scroll navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Scroll to section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active nav on scroll
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initSmoothScroll();
    initScrollSpy();
    updateServerStatus();

    // Update server status every 60 seconds
    setInterval(updateServerStatus, 60000);
});

// Scroll indicator click
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });
});
