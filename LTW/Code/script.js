document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const champions = document.querySelectorAll('.champion-row img');

    champions.forEach(champion => {
        const altText = champion.alt.toLowerCase();
        champion.style.display = altText.includes(searchTerm) ? '' : 'none';
    });
});
