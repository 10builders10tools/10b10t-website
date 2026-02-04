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

function updateHeroMOTD() {
    const randomMOTD = serverMOTDs[Math.floor(Math.random() * serverMOTDs.length)];
    const subtitleEl = document.querySelector('.hero-subtitle');
    if (subtitleEl) {
        subtitleEl.innerHTML = randomMOTD;
    }
}

const galleryImages = [
    'spawn_render.png',
    'portal.png',
    'spawn.png',
    'cave.png',
    'chamber.png',
    'theend.png'
];

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

async function updateServerStatus() {
    const API = 'https://api.10b10t.com';
    
    try {
        const response = await fetch(`${API}/api/stats`);
        const data = await response.json();

        const statusEl = document.getElementById('server-status');
        const playerCountEl = document.getElementById('player-count');
        const tpsEl = document.getElementById('server-tps');

        if (data.online) {
            statusEl.textContent = 'Online';
            statusEl.className = 'status-value online';
            
            playerCountEl.textContent = `${data.players_online} / ${data.players_max}`;
            
            if (tpsEl) {
                const tps = data.tps.toFixed(1);
                tpsEl.textContent = `${tps} TPS`;
                
                if (data.tps >= 19.5) {
                    tpsEl.style.color = '#00ff00';
                } else if (data.tps >= 18) {
                    tpsEl.style.color = '#ffaa00';
                } else {
                    tpsEl.style.color = '#ff0000';
                }
            }
            
            const stats = document.querySelectorAll('.stat');
            stats.forEach(stat => {
                const label = stat.querySelector('.stat-label');
                if (label && label.textContent === 'World Size') {
                    const valueEl = stat.querySelector('.stat-value');
                    if (valueEl && data.world_size_gb) {
                        valueEl.textContent = `${data.world_size_gb.toFixed(1)}GB`;
                    }
                }
            });
            
        } else {
            statusEl.textContent = 'Offline';
            statusEl.className = 'status-value offline';
            playerCountEl.textContent = '0 / 0';
            if (tpsEl) tpsEl.textContent = '-';
        }
        
        await updatePlayerList(API);
        
    } catch (error) {
        console.error('Failed to fetch server status:', error);
        document.getElementById('server-status').textContent = 'Error';
        document.getElementById('server-status').className = 'status-value offline';
    }
}

async function updatePlayerList(api) {
    try {
        const response = await fetch(`${api}/api/players`);
        const data = await response.json();
        
        const playerListEl = document.getElementById('player-list');
        if (!playerListEl) return;
        
        if (data.online && data.players && data.players.length > 0) {
            playerListEl.innerHTML = '';
            data.players.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.className = 'player-item';
                
                const head = document.createElement('img');
                head.src = `https://crafatar.com/avatars/${player.uuid}?size=48&overlay`;
                head.alt = player.name;
                head.className = 'player-head';
                head.onerror = function() {
                    this.src = `https://mc-heads.net/avatar/${player.name}/48`;
                };
                
                const name = document.createElement('div');
                name.className = 'player-name';
                name.textContent = player.name;
                
                const ping = document.createElement('div');
                ping.className = 'player-ping';
                ping.textContent = `${player.ping}ms`;
                ping.style.fontSize = '0.75rem';
                ping.style.color = 'var(--text-muted)';
                
                playerItem.appendChild(head);
                playerItem.appendChild(name);
                playerItem.appendChild(ping);
                playerListEl.appendChild(playerItem);
            });
        } else {
            playerListEl.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 1rem;">No players online</div>';
        }
    } catch (error) {
        console.error('Failed to fetch player list:', error);
    }
}

async function updateLiveChat() {
    const API = 'https://api.10b10t.com';
    
    try {
        const response = await fetch(`${API}/api/chat`);
        const data = await response.json();
        
        const chatContainer = document.getElementById('live-chat');
        if (!chatContainer) return;
        
        if (data.online && data.messages && data.messages.length > 0) {
            chatContainer.innerHTML = '';
            
            data.messages.slice(0, 20).forEach(msg => {
                const msgEl = document.createElement('div');
                msgEl.className = 'chat-message';
                
                const timestamp = new Date(msg.timestamp);
                const timeStr = timestamp.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                });
                
                msgEl.innerHTML = `
                    <span class="chat-time">[${timeStr}]</span>
                    <img src="https://mc-heads.net/avatar/${msg.uuid}/16" class="chat-head" alt="${msg.player}">
                    <span class="chat-player">&lt;${msg.player}&gt;</span>
                    <span class="chat-text">${escapeHtml(msg.message)}</span>
                `;
                
                chatContainer.appendChild(msgEl);
            });
        } else {
            chatContainer.innerHTML = '<div style="color: #888888; padding: 1rem; font-family: Courier New, monospace;">[INFO] No recent chat messages</div>';
        }
    } catch (error) {
        console.error('Failed to fetch chat:', error);
        const chatContainer = document.getElementById('live-chat');
        if (chatContainer) {
            chatContainer.innerHTML = '<div style="color: #FF5555; padding: 1rem; font-family: Courier New, monospace;">[ERROR] Failed to connect to server console</div>';
        }
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
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

function updateDonationMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[new Date().getMonth()];
    const progressText = document.querySelector('.progress-text');
    
    if (progressText) {
        progressText.textContent = `${currentMonth} Goal: $91 out of $91`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeroMOTD();
    initGallery();
    initSmoothScroll();
    initScrollSpy();
    updateServerStatus();
    updateDonationMonth();
    updateLiveChat();
    
    setInterval(updateServerStatus, 60000);
    setInterval(updateLiveChat, 10000);
});

document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.navbar').scrollIntoView({ behavior: 'smooth' });
});
