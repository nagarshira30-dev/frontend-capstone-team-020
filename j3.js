console.log("JS מחובר");

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


// signup JS

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("registerBtn");
  const passwordInput = document.getElementById("password");
  btn.addEventListener("click", function () {

    // checking for empty fields
    const requiredInputs = document.querySelectorAll(
      "form input[required]"
    );

    for (let input of requiredInputs) {
      if (input.value.trim() === "") {
        popupText.textContent = " please fill in all fields";
        popupText.className = "error";
        popup.classList.remove("hidden");
        return; 
      }
    }

    // checking passwors length
    const password = passwordInput.value;

    if (password.length < 8) {
      popupText.textContent = "password is too short";
      popupText.className = "error";
    } else {
      popupText.textContent = "you have signed up!";
      popupText.className = "success";
    }

    popup.classList.remove("hidden");
  });

  closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
  });
});
