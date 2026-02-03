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

// Server MOTDs from config with colors
const serverMOTDs = [
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">a rubber room with a singular rat</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Im so lonely</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">what did someone steal your sweet roll?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">what rhymes with hug me?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">hen tie or smth</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">ShitBob?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Crazy?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">What are you crying?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">You already know what time it is</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Eat shit asshole, fall of your horse</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Like an abuisive relationship</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #fbbf24;">10B</span> <span style="color: #fbbf24;">An Aternos server</span><br> <span style="color: #60a5fa;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">furry nigga ass</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">What did Osama do wrong?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">A 2b2t Clone</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">FAGGOT!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">/kill yourself (wittawwawy)</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">JOIN. BUILD. SUFFER. LEAVE</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #16a1b5;">Just like 2b2t.</span> <span style="color: #ef4444;">But mentally ill</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">2b2t is dead.</span> <span style="color: #f1f5f9;">10b10t killed it and fucked the corpse.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #f1f5f9;">Your base will burn. Your logs will be read.</span> <span style="color: #ef4444;">Smile for the audit.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Abandon hope, ye who play here.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">blackcatsneaky56 is the owner</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">An SMP server</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">swiftesz is the best player (hes not a swifte)</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">X: -67676 Z: 67676</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">as_s loves you ❤️</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">An LGBT smp</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Fernando exists in a pocket dimension</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">how do i make donkeys fuck again? -BeetenMC</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">real men dont rape? oh shit must have been toast then.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">FORTNITE BALLS IM GAY I LIKE BOYS LIL MOSEY IS WHITE</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">TOAST, HELP! LAZ IS STUCK ON THE ROOF AGAIN!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Severe miscount</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">cell wall simplicity player versus player</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">youtube watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Bart more like Fart</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">wheres the original highway crew</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Aiden is a tranny</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">grief this, bitch!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">The Youngest Anarchy Server, EVER! - fitmc</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">let me get uhhhhhhhhhh</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">soek eats sand</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">i have no idea bruh</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">like 2b2t but just a bit more soft spoken</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">slow children at play</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">ali has a hot sister</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">808 mafia</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">The F students are invetors</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">No /tpa no /sethome just pure gay sex</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">?kit</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">nonprofit weed factory</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">all donations go towards toasted avacodos addiction to marijauana</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">dont feed the griefers</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #8b0000;">Repetition is the father of learning.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Is Fit innocent?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Stay.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Ye - HH</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Ye - Cousins</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Try the cactus dupe.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Do Not Fuck The Animals, Thank You!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Dont turn left</span><br> <span style="color: #fbbf24;">10T</span>'
];

// Display random MOTD from server list
function updateHeroMOTD() {
    const randomMOTD = serverMOTDs[Math.floor(Math.random() * serverMOTDs.length)];
    const subtitleEl = document.querySelector('.hero-subtitle');
    if (subtitleEl) {
        subtitleEl.innerHTML = randomMOTD;
    }
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
    
    // Fetch TPS separately
    fetchTPS();
}

// Fetch TPS from your custom API endpoint
async function fetchTPS() {
    try {
        // Replace this URL with your actual TPS API endpoint
        const response = await fetch('https://10b10t.com/api/tps');
        const data = await response.json();
        
        const tpsEl = document.getElementById('server-tps');
        
        if (data.tps !== undefined) {
            const tps = parseFloat(data.tps).toFixed(2);
            tpsEl.textContent = tps;
            
            // Color code TPS
            if (tps >= 19.5) {
                tpsEl.style.color = 'var(--success)';
            } else if (tps >= 15) {
                tpsEl.style.color = 'var(--warning)';
            } else {
                tpsEl.style.color = 'var(--danger)';
            }
        } else {
            tpsEl.textContent = '-';
        }
    } catch (error) {
        console.error('Error fetching TPS:', error);
        document.getElementById('server-tps').textContent = '-';
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

// Update donation month automatically
function updateDonationMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[new Date().getMonth()];
    const progressText = document.querySelector('.progress-text');
    
    if (progressText) {
        // Update to current month - you'll need to manually update the donation amounts
        progressText.textContent = `${currentMonth} Goal: $91 out of $91`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateHeroMOTD();
    initGallery();
    initSmoothScroll();
    initScrollSpy();
    updateServerStatus();
    updateDonationMonth();
    
    // Update server status every 60 seconds
    setInterval(updateServerStatus, 60000);
});

// Scroll indicator click
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });
});
