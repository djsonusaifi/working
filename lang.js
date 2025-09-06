document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-button');
    let currentLang = localStorage.getItem('lang') || 'en';

    const loadLang = async (lang) => {
        const response = await fetch(`${lang}.json`);
        const translations = await response.json();
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[key]) {
                el.textContent = translations[key];
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang-id');
            if (lang) {
                currentLang = lang;
                localStorage.setItem('lang', currentLang);
                loadLang(currentLang);
            }
        });
    });

    // Load initial language
    loadLang(currentLang);
});