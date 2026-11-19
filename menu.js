// menu.js: category filter and search for menu.html

const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.menu-item');
const searchInput = document.getElementById('menuSearch');
const noResults = document.getElementById('noResults');

let activeFilter = 'all';

function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    items.forEach(item => {
        const matchesCategory = activeFilter === 'all' || item.dataset.category === activeFilter;
        const matchesSearch = item.textContent.toLowerCase().includes(query);
        const show = matchesCategory && matchesSearch;
        item.hidden = !show;
        if (show) visible++;
    });

    noResults.hidden = visible > 0;
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});

searchInput.addEventListener('input', applyFilters);