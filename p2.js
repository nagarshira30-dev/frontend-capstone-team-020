document.addEventListener('DOMContentLoaded', () => {
    // אלמנטים
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebar-close');


    const searchToggle = document.getElementById('search-toggle');
    const searchMobileToggle = document.getElementById('search-toggle-mobile');
    const searchbar = document.getElementById('searchbar');
    const searchClose = document.getElementById('search-close');


    const caretMobileToggle = document.getElementById('caret-mobile');
    const mobileMenu = document.querySelector('.mobile-menu-container')
    const darkMode = document.getElementById('dark-mode');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    let darkModeOn = false;
    let caretMobileMenuOn = false;

    // פונקציית מעבר בין מצב כהה למצב בהיר
    darkModeToggle.addEventListener('click', () => {
        if (!darkModeOn) {
            darkMode.className = "fa-regular fa-moon";
            darkModeOn = true;
        } else {
            darkMode.className = "fa-solid fa-moon";
            darkModeOn = false;
        }
    })

    // פונקציית תפריט מצב טלפון
    caretMobileToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (!caretMobileMenuOn) {
            mobileMenu.style.display = 'block';
            caretMobileMenuOn = true;
        } else {
            mobileMenu.style.display = 'none';
            caretMobileMenuOn = false;
        }
    })


    // פונקציות תפריט צד
    menuToggle.addEventListener('click', () => sidebar.classList.add('is-open'));
    sidebarClose.addEventListener('click', () => sidebar.classList.remove('is-open'));


    // פונקציות חיפוש
    searchToggle.addEventListener('click', () => searchbar.classList.add('is-open'));
    searchMobileToggle.addEventListener('click', () => searchbar.classList.add('is-open'));
    searchClose.addEventListener('click', () => searchbar.classList.remove('is-open'));


    // סגירה בלחיצה על הרקע הכהה
    sidebar.addEventListener('click', (e) => {
        if (e.target === sidebar) sidebar.classList.remove('is-open');
    });

    document.body.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        caretMobileMenuOn = false;
    })
});
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginBtn');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'p3.html';
        });
    }
    const loginMobileBtn = document.getElementById('loginMobileBtn');
    if (loginMobileBtn) {
        loginMobileBtn.addEventListener('click', () => {
            window.location.href = 'p3.html';
        });
    }
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = 'p2.html';
        });
    }
    const cartMobileBtn = document.getElementById('cartMobileBtn');
    if (cartMobileBtn) {
        cartMobileBtn.addEventListener('click', () => {
            window.location.href = 'p2.html';
        });
    }
    const likesBtn = document.getElementById('likesBtn');
    if (likesBtn) {
        likesBtn.addEventListener('click', () => {
            window.location.href = 'p4.html';
        });
    }
    const likesMobileBtn = document.getElementById('likesMobileBtn');
    if (likesMobileBtn) {
        likesMobileBtn.addEventListener('click', () => {
            window.location.href = 'p4.html';
        });
    }
});


// כאן אתן שמות את ה JS שלכן



function updateCart() {
    let total = 0;
    const shippingPrice = 20;
    
    // וודאי שה-Class כאן תואם למה שכתבת ב-HTML (בחרתי .cart-item)
    const items = document.querySelectorAll('.cart-item');

    items.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
        if (!isNaN(price)) {
            total += price;
        }
    });

    // חישוב המשלוח - אם יש פריטים יש משלוח, אם אין פריטים המשלוח הוא 0
    const currentShipping = items.length > 0 ? shippingPrice : 0;
    const finalTotal = total + currentShipping;

    // שמירת המחיר הסופי למעבר לעמוד התשלום
    localStorage.setItem('cartTotal', finalTotal); 

    // עדכון התצוגה ב-HTML
    const shippingElement = document.getElementById('shipping-cost');
    const totalElement = document.getElementById('total-sum');
    const cartContainer = document.getElementById('cart-items');

    if (shippingElement) shippingElement.innerText = currentShipping + "$";
    if (totalElement) totalElement.innerText = finalTotal + "$";

    // אם הסל ריק, הצגת הודעה
    if (items.length === 0 && cartContainer) {
        cartContainer.innerHTML = "<p style='text-align:center; padding: 20px;'>הסל ריק</p>";
    }
}

// פונקציה למחיקת פריט
function removeItem(button) {
    const itemRow = button.closest('.cart-item');
    if (itemRow) {
        itemRow.remove();
        updateCart(); // קריאה לפונקציה לעדכון המחיר אחרי המחיקה
    }
    document.addEventListener('DOMContentLoaded', () => {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (e) => {
            // זה יבטיח שהדפדפן יעבור לעמוד הנכון
            window.location.href = 'payment.html';
        });
    }
});
}

