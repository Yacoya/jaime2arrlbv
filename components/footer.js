function createFooter() {
    return `
        <footer class="text-white py-12" style="background-color: #003893;">
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="mb-8 md:mb-0">
                        <img src="img/logo-jaime2arrlbv-blanc.svg" alt="J'aime le 2e Arrondissement" class="h-20 w-auto mb-4">
                        <p class="text-gray-400 max-w-xs">Engagés pour un 2e Arrondissement plus prospère, plus sûr et plus dynamique.</p>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Navigation</h4>
                            <ul class="space-y-2">
                                <li><a href="index.html" class="text-gray-400 hover:text-white">Accueil</a></li>
                                <li><a href="index.html#candidat" class="text-gray-400 hover:text-white">Tête de liste</a></li>
                                <li><a href="index.html#programme" class="text-gray-400 hover:text-white">Programme</a></li>
                                <li><a href="colistiers.html" class="text-gray-400 hover:text-white">Colistiers</a></li>
                                <li><a href="index.html#contact" class="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Élections</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Calendrier électoral</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Comment voter</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Lieux de vote</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Documents nécessaires</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Engagement</h4>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Devenir bénévole</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Faire un don</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 mb-4 md:mb-0">© 2025 J'aime le 2<sup>e</sup> Arrondissement. Tous droits réservés.</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function initializeFooter() {
    document.getElementById('footer-container').innerHTML = createFooter();
}