// script.js
document.addEventListener("DOMContentLoaded", () => {
  // כפתורים מהטופ-בר (לפי aria-label)
  const btnMenu = document.querySelector('.icon-btn[aria-label="תפריט"]');
  const btnSearch = document.querySelector('.icon-btn[aria-label="חיפוש"]');
  const btnCart = document.querySelector('.icon-btn[aria-label="עגלה"]');
  const btnFav = document.querySelector('.icon-btn[aria-label="מועדפים"]');
  const btnUser = document.querySelector('.icon-btn[aria-label="התחברות"]');

  // כפתור “צפו בקולקציה”
  const btnPrimary = document.querySelector(".btn--primary");

  // =========================
  // 1) Sidebar (תפריט צד)
  // =========================
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  sidebar.innerHTML = `
    <div class="sidebar__panel" role="dialog" aria-label="תפריט קטגוריות">
      <div class="sidebar__header">
        <span class="sidebar__title">קטגוריות</span>
        <button class="sidebar__close" aria-label="סגור תפריט">✕</button>
      </div>

      <nav class="sidebar__nav">
        <a href="#clothes">בגדים</a>
        <a href="#design">עיצוב</a>
        <a href="#sale">סייל</a>
      </nav>

      <div class="sidebar__footer">
        <button class="sidebar__action" data-action="login">התחברות</button>
        <button class="sidebar__action" data-action="cart">עגלה</button>
      </div>
    </div>
  `;
  document.body.appendChild(sidebar);

  const closeSidebarBtn = sidebar.querySelector(".sidebar__close");

  const openSidebar = () => {
    sidebar.classList.add("is-open");
    document.body.classList.add("no-scroll");
  };

  const closeSidebar = () => {
    sidebar.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  };

  btnMenu?.addEventListener("click", () => {
    sidebar.classList.contains("is-open") ? closeSidebar() : openSidebar();
  });

  closeSidebarBtn?.addEventListener("click", closeSidebar);

  // סגירה בלחיצה על הרקע הכהה
  sidebar.addEventListener("click", (e) => {
    if (e.target === sidebar) closeSidebar();
  });

  // סגירה עם ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  // פעולות בתפריט
  sidebar.querySelectorAll(".sidebar__action").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      closeSidebar();
      if (action === "login") toast("מעולה 🙂 כאן תתחברי לחשבון");
      if (action === "cart") toast("עגלה נפתחה (דמו)");
    });
  });

  // =========================
  // 2) Search Bar (חלון חיפוש קטן)
  // =========================
  const searchWrap = document.createElement("div");
  searchWrap.className = "searchbar";
  searchWrap.innerHTML = `
    <div class="searchbar__panel" role="dialog" aria-label="חיפוש">
      <input class="searchbar__input" type="text" placeholder="חיפוש פריטים נדירים..." />
      <button class="searchbar__go" aria-label="חפש">חפש</button>
      <button class="searchbar__close" aria-label="סגור חיפוש">✕</button>
    </div>
  `;
  document.body.appendChild(searchWrap);

  const searchInput = searchWrap.querySelector(".searchbar__input");
  const searchClose = searchWrap.querySelector(".searchbar__close");
  const searchGo = searchWrap.querySelector(".searchbar__go");

  const openSearch = () => {
    searchWrap.classList.add("is-open");
    setTimeout(() => searchInput?.focus(), 0);
  };
  const closeSearch = () => {
    searchWrap.classList.remove("is-open");
  };

  btnSearch?.addEventListener("click", () => {
    searchWrap.classList.contains("is-open") ? closeSearch() : openSearch();
  });

  searchClose?.addEventListener("click", closeSearch);

  // enter לחיפוש
  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
    if (e.key === "Escape") closeSearch();
  });

  searchGo?.addEventListener("click", runSearch);

  function runSearch() {
    const q = (searchInput?.value || "").trim();
    if (!q) return toast("כתבי משהו לחיפוש 🙂");
    toast(`מחפשת: "${q}" (דמו)`);
    // כאן בעתיד: מעבר לעמוד חיפוש / פילטר מוצרים וכו'
  }

  // =========================
  // 3) דמו כפתורים (עגלה/מועדפים/התחברות)
  // =========================
  btnCart?.addEventListener("click", () => toast("נפתח עמוד עגלה (דמו)"));
  btnFav?.addEventListener("click", () => toast("נפתחו מועדפים (דמו)"));
  btnUser?.addEventListener("click", () => toast("נפתח עמוד התחברות (דמו)"));

  // =========================
  // 4) כפתור “צפו בקולקציה” - גלילה ליעד אם קיים
  // =========================
  btnPrimary?.addEventListener("click", (e) => {
    // אם זה לינק עם href="#", נבטל קפיצה
    e.preventDefault();
    const target =
      document.querySelector("#collection") ||
      document.querySelector("#clothes") ||
      document.querySelector("main"); // fallback

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // =========================
  // Toast קטן ונחמד
  // =========================
  const toastEl = document.createElement("div");
  toastEl.className = "toast";
  document.body.appendChild(toastEl);

  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-show"), 2200);
  }
});
