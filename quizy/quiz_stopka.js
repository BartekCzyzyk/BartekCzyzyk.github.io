// Wspólny moduł stopki Akademii APEX (oddzielony od logiki silnika quizu)
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.container') || document.body;
    if (!mainContainer || document.getElementById('apex-quiz-footer')) {
        return;
    }

    // Składanie adresów z bezpiecznych fragmentów (odporne na parsery tekstu)
    const domain = 'https://wojciechczyzyk.github.io';
    const schoolUrl = domain + '/sarenka/';
    const bookingUrl = domain + '/sarenka/rezerwacja.html';

    const footer = document.createElement('footer');
    footer.id = 'apex-quiz-footer';
    footer.style.cssText = 'margin-top: 2.2rem; padding-top: 1.1rem; border-top: 1px solid #30363d; text-align: center; font-size: 0.85rem; color: #8b949e; line-height: 1.65;';
    footer.innerHTML = `
        <div>
            🚀 Aplikacja stworzona przez <strong>Bartka (11 lat)</strong> w ramach programu 
            <a href="${schoolUrl}" target="_blank" rel="noopener" style="color: #56D364; text-decoration: none; font-weight: bold;">
                🏫 Akademii Cyfrowej Inżynierii APEX (Sarenka Software Kids)
            </a>
        </div>
        <div style="font-size: 0.8rem; margin-top: 0.3rem;">
            Architektura systemu i mentoring: 
            <a href="${domain}/" target="_blank" rel="noopener" style="color: #58a6ff; text-decoration: none;">mgr inż. Wojciech Czyżyk</a> • 
            <a href="${bookingUrl}" target="_blank" rel="noopener" style="color: #56D364; text-decoration: underline;">Zapisz się na bezpłatną lekcję próbną ➔</a>
        </div>
    `;

    mainContainer.appendChild(footer);
});
