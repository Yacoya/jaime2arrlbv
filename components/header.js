function createHeader() {
    // Détecter la page actuelle
    const isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    
    return `
        <nav class="bg-white shadow-md fixed top-0 z-50" id="main-nav">
            <div class="container mx-auto px-6 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <img src="img/logo-jaime2arrlbv.svg" alt="J'aime le 2e Arrondissement" class="h-20 w-auto">
                    </div>
                    <div class="hidden md:flex items-center space-x-8" id="desktop-menu">
                        <a href="${isIndexPage ? '#accueil' : 'index.html#accueil'}" class="text-gray-800 hover:text-green-600">Accueil</a>
                        <a href="${isIndexPage ? '#candidat' : 'index.html#candidat'}" class="text-gray-800 hover:text-green-600">Tête de liste</a>
                        <a href="${isIndexPage ? '#programme' : 'index.html#programme'}" class="text-gray-800 hover:text-green-600">Programme</a>
                        <a href="colistiers.html" class="text-gray-800 hover:text-green-600">Colistiers</a>
                        <a href="${isIndexPage ? '#contact' : 'index.html#contact'}" class="text-gray-800 hover:text-green-600">Contact</a>
                    </div>
                    <button class="md:hidden focus:outline-none" id="mobile-menu-btn">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <!-- Mobile menu -->
                <div class="md:hidden hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="${isIndexPage ? '#accueil' : 'index.html#accueil'}" class="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Accueil</a>
                        <a href="${isIndexPage ? '#candidat' : 'index.html#candidat'}" class="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Tête de liste</a>
                        <a href="${isIndexPage ? '#programme' : 'index.html#programme'}" class="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Programme</a>
                        <a href="colistiers.html" class="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Colistiers</a>
                        <a href="${isIndexPage ? '#contact' : 'index.html#contact'}" class="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

function initializeHeader() {
    // Injecter le header
    document.getElementById('header-container').innerHTML = createHeader();
    
    // Forcer le positionnement sticky avec JavaScript
    const nav = document.getElementById('main-nav');
    if (nav) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.zIndex = '50';
        nav.style.width = '100%';
        
        // Forcer le recalcul du layout
        nav.offsetHeight;
    }
    
    // Initialiser le menu mobile
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Fermer le menu mobile si ouvert
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });
}