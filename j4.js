document.addEventListener('DOMContentLoaded', () => {
    // אלמנטים
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');


    const searchToggle = document.getElementById('search-toggle');
    const searchbar = document.getElementById('searchbar');
    const searchClose = document.getElementById('search-close');


    // פונקציות תפריט צד
    menuToggle.addEventListener('click', () => sidebar.classList.add('is-open'));
    sidebarClose.addEventListener('click', () => sidebar.classList.remove('is-open'));


    // פונקציות חיפוש
    searchToggle.addEventListener('click', () => searchbar.classList.add('is-open'));
    searchClose.addEventListener('click', () => searchbar.classList.remove('is-open'));


    // סגירה בלחיצה על הרקע הכהה
    sidebar.addEventListener('click', (e) => {
        if (e.target === sidebar) sidebar.classList.remove('is-open');
    });
});