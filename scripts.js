document.addEventListener('DOMContentLoaded', function() {
    const displayText = document.getElementById('displayText');

    // Funkce pro animaci textu
    function animateText() {
        const text = displayText.textContent;
        displayText.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                displayText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50); // Rychlost animace
            }
        }

        type();
    }

    // Spustí animaci textu po načtení stránky
    animateText();

    // Možnost přidat další interaktivní efekty, pokud je potřeba
});
