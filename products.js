/**
 * KERAMIKANO — Products Gallery Page
 */

(function () {
  'use strict';

  const TOTAL_PRODUCTS = 70;
  const ITEMS_PER_PAGE = 12;
  const TOTAL_PAGES = Math.ceil(TOTAL_PRODUCTS / ITEMS_PER_PAGE);

  /* Add image/name/category per product — only add the number you want to change */
  const PRODUCT_OVERRIDES = {
       1: { label: 'Couple Motif Mug Keramik', category: 'Mug Keramik', src: 'mug1.png' },
       2: { label: 'Class Mild Mug Keramik', category: 'Mug Keramik', src: 'mug2.png' },
       3: { label: 'D-Cup Cafe Mug Keramik', category: 'Mug Keramik', src: 'mug3.png' },
       4: { label: 'Wonderful Indonesia Mug Keramik', category: 'Mug Keramik', src: 'mug4.png' },
       5: { label: 'STP Oil Mug Keramik', category: 'Mug Keramik', src: 'mug5.png' },
       6: { label: 'PDI Perjuangan Mug Keramik', category: 'Mug Keramik', src: 'mug6.png' },
       7: { label: 'WaterBoom Jakarta Mug Keramik Orange', category: 'Mug Keramik', src: 'mug7.png' },
       8: { label: 'Yogya Group Mug Keramik', category: 'Mug Keramik', src: 'mug8.jpg' },
       9: { label: 'Souvenir Aqiqah Mug Keramik', category: 'Mug Keramik', src: 'mug9.jpg' },
       10: { label: 'Gardi & Annie Wedding Souvenir Mug Kearmik', category: 'Mug Keramik', src: 'mug10.jpg' },
       11: { label: 'Founders Valley Mug Keramik', category: 'Mug Keramik', src: 'mug11.jpg' },
       12: { label: 'Souvenir Wedding Anniversary Mug Keramik', category: 'Mug Keramik', src: 'mug12.jpg' },
       13: { label: 'Bank Bca Mug Keramik', category: 'Mug Keramik', src: 'mug13.jpg' },
       14: { label: 'Souvenir Wedding Mug Keramik', category: 'Mug Keramik', src: 'mug14.jpg' },
       15: { label: 'Mug Keramik Cetak Custom Dengan Tutup', category: 'Mug Keramik', src: 'mug15.jpg' },
       16: { label: 'Persatuan Teo Chew Mug Keramik', category: 'Mug Keramik', src: 'mug16.jpg' },
       17: { label: 'Metro TV Mug Keramik', category: 'Mug Keramik', src: 'mug17.jpg' },
       18: { label: 'Aca Asuransi Mug Keramik', category: 'Mug Keramik', src: 'mug18.jpg' },
       19: { label: 'People Source Mug Keramik', category: 'Mug Keramik', src: 'mug19.jpg' },
       20: { label: 'Tulisan Mandarin Mug Keramik', category: 'Mug Keramik', src: 'mug20.jpg' },
       21: { label: 'Bir Heineken Mug Keramik', category: 'Mug Keramik', src: 'mug21.jpg' },
       22: { label: 'AIA Asuransi Mug Keramik', category: 'Mug Keramik', src: 'mug22.jpg' },
       23: { label: 'AIA Mug Keramik', category: 'Mug Keramik', src: 'mug23.jpg' },
       24: { label: 'Waterboom Jakarta Mug Keramik', category: 'Mug Keramik', src: 'mug24.jpg' },
       25: { label: 'Keju Cheesy Mug Keramik', category: 'Mug Keramik', src: 'mug25.jpg' },
       26: { label: 'Motif Bintang Mug Keramik', category: 'Mug Keramik', src: 'mug26.jpg' },
       27: { label: 'Bank Niaga Mug Keramik', category: 'Mug Keramik', src: 'mug27.jpg' },
       28: { label: 'Mug Keramik Bir Bintang Berukuran Tinggi', category: 'Mug Keramik', src: 'mug28.jpg' },
       29: { label: 'Mug Keramik Bir Bintang Bentuk Bola', category: 'Mug Keramik', src: 'mug29.jpg' },
       30: { label: 'Mug Keramik Green Sand Bentuk Bola', category: 'Mug Keramik', src: 'mug30.jpg' },
       31: { label: 'Mug Class Mild SCTV', category: 'Mug Keramik', src: 'mug31.jpg' },
       32: { label: 'Mug Keramik Wedding Souvenir', category: 'Mug Keramik', src: 'mug32.jpg' },
       33: { label: 'Mug Keramik Motif Bola', category: 'Mug Keramik', src: 'mug33.jpg' },
       34: { label: 'Mug Berbentuk Gentong 120z', category: 'Mug Keramik', src: 'mug35.jpg' },
       35: { label: 'Mug Bentuk Hati 120z', category: 'Mug Keramik', src: 'mug36.jpg' },
       36: { label: 'Mug Bulat Gagang Hati', category: 'Mug Keramik', src: 'mug37.jpg' },
       37: { label: 'Mug Polos Bentuk Hati', category: 'Mug Keramik', src: 'mug38.jpg' },
       38: { label: 'Mug Polos Bentuk Persegi', category: 'Mug Keramik', src: 'mug39.jpg' },
       39: { label: 'Mug Polos Gagang Custom', category: 'Mug Keramik', src: 'mug40.jpg' },
       40: { label: 'Mug Cetak Bentuk Custom', category: 'Mug Keramik', src: 'mug41.jpg' },
       41: { label: 'Mug Warna Custom Sisi Dalam', category: 'Mug Kermaik', src: 'mug43.jpg' },
       42: { label: 'Cetak Mug Warna Custom', category: 'Mug Keramik', src: 'mug44.jpg' },
       43: { label: 'Custom Mug Beragam Model', category: 'Mug Keramik', src: 'mug45.jpg' },
       44: { label: 'Mug Pilkada Caleg Partai Hanura', category: 'Mug Keramik', src: 'mug46.jpg' },
       45: { label: 'Mug Keramik Custom Pilkada', category: 'Mug Keramik', src: 'mug47.jpg' },
       46: { label: 'Piring Custom', category: 'Plate', src: 'image46.png' },
       47: { label: 'Piring Custom', category: 'Plate', src: 'image47.png' },
       48: { label: 'Piring Custom', category: 'Plate', src: 'image48.png' },
       49: { label: 'Piring Custom', category: 'Plate', src: 'image49.png' },
       50: { label: 'Piring Custom', category: 'Plate', src: 'image50.png' },
       51: { label: 'Piring Custom', category: 'Plate', src: 'image51.png' },
       52: { label: 'Piring Custom', category: 'Plate', src: 'image52.png' },
  };

  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav__link');
  const navOverlay = document.getElementById('navOverlay');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryPagination = document.getElementById('galleryPagination');
  const galleryCount = document.getElementById('galleryCount');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentPage = 1;
  let currentLightboxIndex = 0;
  let allProducts = [];
  let isInitialRender = true;

  const PAGE_STORAGE_KEY = 'keramikano-gallery-page';

  function clampPage(page) {
    if (isNaN(page) || page < 1) return 1;
    if (page > TOTAL_PAGES) return TOTAL_PAGES;
    return page;
  }

  function savePageToStorage(page) {
    try {
      sessionStorage.setItem(PAGE_STORAGE_KEY, String(page));
    } catch (e) { /* storage unavailable */ }
  }

  function getPageFromStorage() {
    try {
      var stored = sessionStorage.getItem(PAGE_STORAGE_KEY);
      if (stored === null) return null;
      return clampPage(parseInt(stored, 10));
    } catch (e) {
      return null;
    }
  }

  function getPageFromUrl() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has('page')) return null;
    return clampPage(parseInt(params.get('page'), 10));
  }

  function getInitialPage() {
    var fromUrl = getPageFromUrl();
    if (fromUrl !== null) return fromUrl;
    var fromStorage = getPageFromStorage();
    if (fromStorage !== null) return fromStorage;
    return 1;
  }

  function updateUrlPage(page, usePush) {
    savePageToStorage(page);

    if (!window.history || !window.history.replaceState) return;

    try {
      var query = page === 1 ? '' : '?page=' + page;
      var base = window.location.pathname || 'products.html';
      var target = query ? query : base;
      var current = window.location.search || base;

      if (target === current) return;

      if (usePush) {
        window.history.pushState({ page: page }, '', target);
      } else {
        window.history.replaceState({ page: page }, '', target);
      }
    } catch (e) { /* history API blocked (e.g. some file:// contexts) */ }
  }

  /* ==================== AOS ==================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

  /* ==================== NAV ==================== */
  function openNav() {
    navMenu.classList.add('open');
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    if (navOverlay) {
      navOverlay.classList.add('visible');
      navOverlay.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    if (navOverlay) {
      navOverlay.classList.remove('visible');
      navOverlay.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('nav-open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      navMenu.classList.contains('open') ? closeNav() : openNav();
    });
  }

  if (navOverlay) navOverlay.addEventListener('click', closeNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () { closeNav(); });
  });

  /* ==================== SCROLL ==================== */
  function onScroll() {
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + '%';
    }
    if (backToTop) {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ==================== BUILD PRODUCT DATA ==================== */
  function buildProducts() {
    allProducts = [];
    for (let i = 1; i <= TOTAL_PRODUCTS; i++) {
      const num = String(i).padStart(2, '0');
      const override = PRODUCT_OVERRIDES[i] || {};
      allProducts.push({
        id: i,
        label: override.label || 'Product ' + num,
        category: override.category || '',
        src: override.src || ''
      });
    }
  }

  /* ==================== RENDER GALLERY ==================== */
  function renderGallery(page) {
    currentPage = page;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, TOTAL_PRODUCTS);
    const items = allProducts.slice(start, end);

    galleryGrid.innerHTML = '';
    galleryGrid.style.opacity = '0';

    items.forEach(function (product, index) {
      const globalIndex = start + index;
      const article = document.createElement('article');
      article.className = 'gallery-item';
      article.setAttribute('data-index', globalIndex);
      article.setAttribute('tabindex', '0');
      article.setAttribute('role', 'button');
      article.setAttribute('aria-label', product.label);

      const imageHtml = product.src
        ? '<img src="' + product.src + '" alt="' + product.label + '">'
        : '<div class="gallery-item__placeholder"><span>' + product.label + '</span><small></small></div>';

      const categoryHtml = product.category
        ? '<span class="gallery-item__category">' + product.category + '</span>'
        : '';

      article.innerHTML =
        '<div class="gallery-item__image">' +
          imageHtml +
          '<span class="gallery-item__hint">Click image for more details</span>' +
          '<div class="gallery-item__overlay" aria-hidden="true">' +
            '<div class="gallery-item__info">' +
              categoryHtml +
              '<span class="gallery-item__name">' + product.label + '</span>' +
            '</div>' +
          '</div>' +
        '</div>';

      article.addEventListener('click', function () { openLightbox(globalIndex); });
      article.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(globalIndex);
        }
      });

      galleryGrid.appendChild(article);

      setTimeout(function () {
        article.classList.add('visible');
      }, index * 60);
    });

    requestAnimationFrame(function () {
      galleryGrid.style.transition = 'opacity 0.4s ease';
      galleryGrid.style.opacity = '1';
    });

    if (galleryCount) {
      galleryCount.textContent = 'Showing ' + (start + 1) + '–' + end + ' of ' + TOTAL_PRODUCTS + ' products';
    }

    renderPagination(page);
    updateUrlPage(page, !isInitialRender);

    if (!isInitialRender) {
      window.scrollTo({ top: galleryGrid.offsetTop - 120, behavior: 'smooth' });
    }
    isInitialRender = false;
  }

  /* ==================== PAGINATION ==================== */
  function renderPagination(page) {
    galleryPagination.innerHTML = '';

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'gallery-pagination__btn gallery-pagination__arrow';
    prevBtn.innerHTML = '&#8592;';
    prevBtn.setAttribute('aria-label', 'Previous page');
    prevBtn.disabled = page === 1;
    prevBtn.addEventListener('click', function () { if (page > 1) renderGallery(page - 1); });
    galleryPagination.appendChild(prevBtn);

    var pages = getPageNumbers(page, TOTAL_PAGES);
    pages.forEach(function (p) {
      if (p === '...') {
        var ellipsis = document.createElement('span');
        ellipsis.className = 'gallery-pagination__ellipsis';
        ellipsis.textContent = '...';
        galleryPagination.appendChild(ellipsis);
        return;
      }

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gallery-pagination__btn' + (p === page ? ' active' : '');
      btn.textContent = p;
      btn.setAttribute('aria-label', 'Page ' + p);
      if (p === page) btn.setAttribute('aria-current', 'page');
      btn.addEventListener('click', function () { renderGallery(p); });
      galleryPagination.appendChild(btn);
    });

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'gallery-pagination__btn gallery-pagination__arrow';
    nextBtn.innerHTML = '&#8594;';
    nextBtn.setAttribute('aria-label', 'Next page');
    nextBtn.disabled = page === TOTAL_PAGES;
    nextBtn.addEventListener('click', function () { if (page < TOTAL_PAGES) renderGallery(page + 1); });
    galleryPagination.appendChild(nextBtn);
  }

  function getPageNumbers(current, total) {
    if (total <= 7) {
      return Array.from({ length: total }, function (_, i) { return i + 1; });
    }
    var pages = [1];
    if (current > 3) pages.push('...');
    for (var i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
      pages.push(i);
    }
    if (current < total - 2) pages.push('...');
    pages.push(total);
    return pages;
  }

  /* ==================== LIGHTBOX ==================== */
  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    var product = allProducts[currentLightboxIndex];
    if (product.src) {
      lightboxImage.innerHTML = '<img src="' + product.src + '" alt="' + product.label + '">';
    } else {
      lightboxImage.innerHTML =
        '<div class="lightbox__placeholder">' +
          '<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="16" width="48" height="36" rx="4" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="30" r="6" stroke="currentColor" stroke-width="2"/></svg>' +
          '<span>' + product.label + '</span>' +
          '<small>Replace with your image</small>' +
        '</div>';
    }
    if (product.category) {
      lightboxCaption.innerHTML =
        '<span class="lightbox__caption-category">' + product.category + '</span>' +
        '<span class="lightbox__caption-name">' + product.label + '</span>';
    } else {
      lightboxCaption.textContent = product.label;
    }
  }

  function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = TOTAL_PRODUCTS - 1;
    if (currentLightboxIndex >= TOTAL_PRODUCTS) currentLightboxIndex = 0;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
  if (lightboxNext) lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });

  /* ==================== INIT ==================== */
  buildProducts();
  renderGallery(getInitialPage());

  window.addEventListener('popstate', function () {
    var page = getPageFromUrl();
    if (page === null) page = getPageFromStorage() || 1;
    savePageToStorage(page);
    isInitialRender = true;
    renderGallery(page);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeNav();
  });

})();
