document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("ai-mentor-widget");
    if (!container) return;

    try {
        // Parametr ?t= wymusza pobranie najświeższej wersji pliku bez cache przeglądarki
        const response = await fetch(`mentor/status_ai.json?t=${Date.now()}`);
        if (!response.ok) throw new Error("Nie udało się wczytać statusu AI");

        const data = await response.json();

        container.innerHTML = `
            <div class="ai-mentor-card">
                <div class="ai-mentor-header">
                    <h3 class="ai-mentor-title">🤖 Status od AI Code Mentora</h3>
                    <span class="ai-mentor-date">📅 Ostatni przegląd: ${data.data}</span>
                </div>
                <div class="ai-mentor-project">📂 Analizowany projekt: ${data.projekt}</div>
                <div class="ai-mentor-box">
                    <strong>✅ Co wyszło super:</strong><br>
                    ${data.pochwala}
                </div>
                <div class="ai-mentor-box tip">
                    <strong>💡 Wskazówka na kolejny krok:</strong><br>
                    ${data.wskazowka}
                </div>
                <div>
                    <span class="ai-mentor-badge">${data.odznaka}</span>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Błąd AI Mentora:", error);
        container.innerHTML = `
            <div class="ai-mentor-card">
                <p style="color: #8b949e; margin: 0;">🤖 AI Code Mentor analizuje kod... Odśwież stronę za chwilę.</p>
            </div>
        `;
    }
});
