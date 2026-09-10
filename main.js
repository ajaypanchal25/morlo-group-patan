/**
 * MORLO GROUP PATAN - MAIN JAVASCRIPT
 * Professional Event Organizer & Entertainment Group
 * Owner: Shailesh Goswami | Lead Singer: Mansi Dave
 */

if (window.__MORLO_APP_INITIALIZED__) {
  // Already initialized
} else {
  window.__MORLO_APP_INITIALIZED__ = true;

// Configuration Object
const CONFIG = {
  // WhatsApp & Mobile Phone
  WHATSAPP_NUMBER: "919824968029",
  MOBILE_NUMBER: "+91 9824968029",

  // Email & Address
  EMAIL: "morlopatan@gmail.com",
  LOCATION: "S-43,44, City Point Patan, Patan, Gujarat - 384268",

  // Official Social Media Channels
  YOUTUBE_LINK: "https://youtube.com/@morlogrouppatan?si=gRkl9iuwVO0_GVFK",
  INSTAGRAM_LINK: "https://www.instagram.com/morlogrouppatan?igsi=MTltdXdlcnVoZmJwdA==",
  FACEBOOK_LINK: "https://www.facebook.com/share/1DgpCWpbp9/"
};

// ==========================================================================
// 1. UNIVERSAL IMAGE ERROR & FALLBACK HANDLER (WORKS ON GITHUB & LOCAL)
// ==========================================================================
window.handleImageError = function (img, fallbacks) {
  if (!img) return;
  const currentSrc = img.src || "";
  const list = Array.isArray(fallbacks) ? fallbacks : (fallbacks ? [fallbacks] : []);
  const triedIndex = parseInt(img.dataset.triedFallbackIndex || "-1", 10);
  const nextIndex = triedIndex + 1;

  if (nextIndex < list.length && list[nextIndex]) {
    img.dataset.triedFallbackIndex = nextIndex;
    img.src = list[nextIndex];
  } else if (!img.dataset.triedRootFallback) {
    img.dataset.triedRootFallback = "true";
    const parts = currentSrc.split("/");
    const filename = parts[parts.length - 1].split("?")[0];
    if (filename) {
      if (filename.endsWith(".jpg")) {
        img.src = filename + ".jpeg";
      } else if (filename.endsWith(".png")) {
        img.src = filename + ".png";
      } else if (filename.endsWith(".jpeg") && filename.includes(".jpg.jpeg")) {
        img.src = filename.replace(".jpg.jpeg", ".jpg");
      } else {
        img.src = filename;
      }
    }
  }
};

// ==========================================================================
// ==========================================================================
// 2. GALLERY DATA (CLEAN UNIQUE PHOTOS & 1-TIME PM PHOTO)
// ==========================================================================
const GALLERY_DATA = {
  mansiDave: {
    photos: [
      {
        id: "md-p1",
        title: "MANSI DAVE",
        src: "mansidave.jpg.jpeg",
        fallbacks: ["mansidave.jpg", "assets/images/mansi-dave/mansidave.jpg", "images/mansidave.jpg"],
        tag: "Lead Singer & Star Performer"
      },
      {
        id: "md-p2",
        title: "LIVE STAGE CONCERT",
        src: "mansi1.jpg.jpeg",
        fallbacks: ["mansi1.jpg", "mansi-stage.jpg", "assets/images/mansi-dave/mansi1.jpg", "images/mansi-stage.jpg"],
        tag: "Stage Live Performance"
      },
      {
        id: "md-p3",
        title: "FOLK & DEVOTIONAL",
        src: "Mansi.jpeg",
        fallbacks: ["mansi.jpg", "mansi2.jpg", "assets/images/mansi-dave/Mansi.jpeg", "images/Mansi.jpeg"],
        tag: "Traditional Gujarati Folk"
      },
      {
        id: "md-p4",
        title: "MEDIA SPOTLIGHT",
        src: "mansi-interview.jpg",
        fallbacks: ["assets/images/mansi-dave/mansi-interview.jpg", "images/mansi-interview.jpg"],
        tag: "Special Interview & Event"
      },
      {
        id: "md-p5",
        title: "SEVA CAMP SANMAN",
        src: "sevacamp.jpg.jpg",
        fallbacks: ["sevacamp.jpg", "assets/images/mansi-dave/sevacamp.jpg", "images/sevacamp.jpg"],
        tag: "Felicitation & Public Honors"
      }
    ],
    videos: [
      {
        id: "md-v1",
        title: "NAVRATRI SPECIAL",
        videoId: "XX7RXEFRTVo",
        videoSrc: "https://www.youtube.com/watch?v=XX7RXEFRTVo",
        embedUrl: "https://www.youtube-nocookie.com/embed/XX7RXEFRTVo",
        poster: "https://img.youtube.com/vi/XX7RXEFRTVo/hqdefault.jpg",
        tag: "Navratri Special"
      },
      {
        id: "md-v2",
        title: "SACRED RAMEL",
        videoId: "zKYKtkLcl4M",
        videoSrc: "https://www.youtube.com/watch?v=zKYKtkLcl4M",
        embedUrl: "https://www.youtube-nocookie.com/embed/zKYKtkLcl4M",
        poster: "https://img.youtube.com/vi/zKYKtkLcl4M/hqdefault.jpg",
        tag: "Sacred Ramel"
      },
      {
        id: "md-v3",
        title: "HIGH-BASS LIVE DJ",
        videoId: "HMCbO8b1jLg",
        videoSrc: "https://www.youtube.com/watch?v=HMCbO8b1jLg",
        embedUrl: "https://www.youtube-nocookie.com/embed/HMCbO8b1jLg",
        poster: "https://img.youtube.com/vi/HMCbO8b1jLg/hqdefault.jpg",
        tag: "Live DJ Sound"
      },
      {
        id: "md-v4",
        title: "RAAS GARBA NIGHT",
        videoId: "u9_tzHH21AM",
        videoSrc: "https://www.youtube.com/watch?v=u9_tzHH21AM",
        embedUrl: "https://www.youtube-nocookie.com/embed/u9_tzHH21AM",
        poster: "https://img.youtube.com/vi/u9_tzHH21AM/hqdefault.jpg",
        tag: "Raas Garba"
      },
      {
        id: "md-v5",
        title: "MORLO GROUP MEGA EVENT",
        videoId: "DV_VRVXy60U",
        videoSrc: "https://www.youtube.com/watch?v=DV_VRVXy60U",
        embedUrl: "https://www.youtube-nocookie.com/embed/DV_VRVXy60U",
        poster: "https://img.youtube.com/vi/DV_VRVXy60U/hqdefault.jpg",
        tag: "Grand Event"
      }
    ]
  },
  owner: {
    photos: [
      {
        id: "ow-p1",
        title: "WITH HON. PM NARENDRA MODI",
        src: "withpm.jpg",
        fallbacks: ["withpm.jpg.jpg", "assets/images/owner/withpm.jpg", "images/withpm.jpg"],
        tag: "State Honor & PM Recognition"
      },
      {
        id: "ow-p2",
        title: "EVENT MANAGEMENT",
        src: "owner2.jpg",
        fallbacks: ["assets/images/owner/owner2.jpg", "images/owner2.jpg"],
        tag: "Cultural Event Organization"
      },
      {
        id: "ow-p3",
        title: "STAGE & SOUND PRODUCTION",
        src: "owner4.jpg",
        fallbacks: ["assets/images/owner/owner4.jpg", "images/owner4.jpg"],
        tag: "Stage & Sound Direction"
      },
      {
        id: "ow-p4",
        title: "LIVE PRODUCTION LEADERSHIP",
        src: "owner5.jpg",
        fallbacks: ["assets/images/owner/owner5.jpg", "images/owner5.jpg"],
        tag: "Live Production Leadership"
      },
      {
        id: "ow-p5",
        title: "ARTIST COORDINATION",
        src: "owner6.jpg",
        fallbacks: ["assets/images/owner/owner6.jpg", "images/owner6.jpg"],
        tag: "Artist Coordination"
      },
      {
        id: "ow-p6",
        title: "STAGE MANAGEMENT",
        src: "owner7.jpg",
        fallbacks: ["assets/images/owner/owner7.jpg", "images/owner7.jpg"],
        tag: "Stage Management"
      },
      {
        id: "ow-p7",
        title: "TEAM LEADERSHIP",
        src: "owner8.jpg",
        fallbacks: ["assets/images/owner/owner8.jpg", "images/owner8.jpg"],
        tag: "Morlo Team Leadership"
      },
      {
        id: "ow-p8",
        title: "GRAND PROGRAM SETUP",
        src: "owner9.jpeg",
        fallbacks: ["owner9.jpg", "assets/images/owner/owner9.jpg", "images/owner9.jpg"],
        tag: "Grand Program Setup"
      },
      {
        id: "ow-p9",
        title: "CULTURAL RECOGNITION",
        src: "owner10.jpeg",
        fallbacks: ["owner10.jpg", "assets/images/owner/owner10.jpg", "images/owner10.jpg"],
        tag: "Cultural Recognition"
      },
      {
        id: "ow-p10",
        title: "STAGE FELICITATION",
        src: "owner11.jpeg",
        fallbacks: ["owner11.jpg", "assets/images/owner/owner11.jpg", "images/owner11.jpg"],
        tag: "Stage Felicitation"
      },
      {
        id: "ow-p11",
        title: "HERITAGE CELEBRATIONS",
        src: "owner12.jpeg",
        fallbacks: ["owner12.jpg", "assets/images/owner/owner12.jpg", "images/owner12.jpg"],
        tag: "Heritage Celebrations"
      },
      {
        id: "ow-p12",
        title: "SOCIAL SERVICE & SEVA CAMP",
        src: "sevacamp.jpg",
        fallbacks: ["sevacamp.jpg.jpg", "assets/images/owner/sevacamp.jpg", "images/sevacamp.jpg"],
        tag: "Social Service & Seva Camp"
      }
    ]
  }
};

// Global Gallery Flattened List for Modal Navigation
let currentGalleryItems = [];
let currentItemIndex = 0;

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
function initMorloApp() {
  initNavbar();
  renderGallery();
  initGalleryControls();
  initInquiryForm();
  initVideoModal();
  initDynamicContactLinks();
  initAllImageClickLightbox();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMorloApp);
} else {
  initMorloApp();
}

// ==========================================================================
// 4. NAVBAR & MOBILE DRAWER LOGIC
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-cta-item a");

  // Sticky Navbar on Scroll
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }, { passive: true });

  function closeMenu() {
    if (hamburger) hamburger.classList.remove("open");
    if (navMenu) navMenu.classList.remove("open");
    if (navOverlay) navOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle("open");
    if (hamburger) hamburger.classList.toggle("open", isOpen);
    if (navOverlay) navOverlay.classList.toggle("open", isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  if (hamburger && navMenu) {
    hamburger.onclick = (e) => {
      e.stopPropagation();
      toggleMenu();
    };

    if (navOverlay) {
      navOverlay.onclick = closeMenu;
    }

    navLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        closeMenu();
      }
    });
  }
}

// ==========================================================================
// 5. GALLERY RENDERING (CLEAN PHOTOS WITH ZOOM ON TOUCH/CLICK)
// ==========================================================================
function renderGallery() {
  // 1. Render Mansi Dave Photos (Clean, No repetitive text overlay)
  const mdPhotosGrid = document.getElementById("mansiDavePhotosGrid");
  if (mdPhotosGrid) {
    mdPhotosGrid.innerHTML = GALLERY_DATA.mansiDave.photos.map((item, index) => {
      const fbStr = JSON.stringify(item.fallbacks || []).replace(/"/g, '&quot;');
      return `
        <div class="gallery-item-card" onclick="openPhotoGalleryModal('mansi', ${index})" style="cursor: pointer;" title="Touch / Click to view full photo">
          <div class="gallery-img-container">
            <img src="${item.src}" 
                 alt="${item.title}" 
                 loading="lazy" 
                 decoding="async"
                 onerror="handleImageError(this, ${fbStr});">
            <div class="gallery-zoom-overlay">
              <svg width="34" height="34" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Render Mansi Dave Videos
  const mdVideosGrid = document.getElementById("mansiDaveVideosGrid");
  if (mdVideosGrid) {
    mdVideosGrid.innerHTML = GALLERY_DATA.mansiDave.videos.map(item => {
      return `
        <div class="gallery-item-card video-card" onclick="openVideoPlayer('${item.title}', '${item.videoSrc}', '${item.embedUrl}')" style="cursor: pointer;" title="Watch Video">
          <div class="gallery-img-container">
            <img src="${item.poster}" alt="${item.title} - Morlo Group Patan" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="video-play-btn" aria-label="Play Video">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. Render Owner Photos Grid (Clean, Zero repetitive text under photos)
  const ownerPhotosGrid = document.getElementById("ownerPhotosGrid");
  if (ownerPhotosGrid) {
    ownerPhotosGrid.innerHTML = GALLERY_DATA.owner.photos.map((item, index) => {
      const fbStr = JSON.stringify(item.fallbacks || []).replace(/"/g, '&quot;');
      return `
        <div class="gallery-item-card" onclick="openPhotoGalleryModal('owner', ${index})" style="cursor: pointer;" title="Touch / Click to view full photo">
          <div class="gallery-img-container">
            <img src="${item.src}" 
                 alt="${item.title}" 
                 loading="lazy" 
                 decoding="async"
                 onerror="handleImageError(this, ${fbStr});">
            <div class="gallery-zoom-overlay">
              <svg width="34" height="34" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

function initGalleryControls() {
  // Main Folder Switcher (Mansi Dave vs Owner)
  const folderTabs = document.querySelectorAll(".folder-tab-btn");
  const folderViews = document.querySelectorAll(".folder-view");

  folderTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      folderTabs.forEach(t => t.classList.remove("active"));
      folderViews.forEach(v => v.classList.remove("active"));

      tab.classList.add("active");
      const targetFolder = tab.getAttribute("data-folder");
      const activeView = document.getElementById(targetFolder);
      if (activeView) activeView.classList.add("active");
    });
  });

  // Sub-tabs (Photos / Videos)
  const subTabs = document.querySelectorAll(".sub-tab-btn");
  const subViews = document.querySelectorAll(".gallery-sub-view");

  subTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      subTabs.forEach(t => t.classList.remove("active"));
      subViews.forEach(v => v.classList.remove("active"));

      tab.classList.add("active");
      const targetSub = tab.getAttribute("data-subtab");
      const activeSubView = document.getElementById(targetSub);
      if (activeSubView) activeSubView.classList.add("active");
    });
  });
}

// Quick trigger from Owner Section to open Owner Gallery
window.openOwnerGallery = function () {
  const gallerySection = document.getElementById("gallery");
  const folderTabs = document.querySelectorAll(".folder-tab-btn");
  const folderViews = document.querySelectorAll(".folder-view");

  folderTabs.forEach(t => t.classList.remove("active"));
  folderViews.forEach(v => v.classList.remove("active"));

  const ownerTab = document.querySelector('[data-folder="folderOwner"]');
  const ownerView = document.getElementById("folderOwner");

  if (ownerTab) ownerTab.classList.add("active");
  if (ownerView) ownerView.classList.add("active");

  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
};

// Quick trigger for Mansi Dave gallery
window.openMansiDaveGallery = function (subtab = 'mansiDavePhotosView') {
  const gallerySection = document.getElementById("gallery");
  const folderTabs = document.querySelectorAll(".folder-tab-btn");
  const folderViews = document.querySelectorAll(".folder-view");

  folderTabs.forEach(t => t.classList.remove("active"));
  folderViews.forEach(v => v.classList.remove("active"));

  const mdTab = document.querySelector('[data-folder="folderMansiDave"]');
  const mdView = document.getElementById("folderMansiDave");

  if (mdTab) mdTab.classList.add("active");
  if (mdView) mdView.classList.add("active");

  // Select subtab
  const subTabs = document.querySelectorAll(".sub-tab-btn");
  const subViews = document.querySelectorAll(".gallery-sub-view");

  subTabs.forEach(t => t.classList.remove("active"));
  subViews.forEach(v => v.classList.remove("active"));

  const targetTab = document.querySelector(`[data-subtab="${subtab}"]`);
  const targetView = document.getElementById(subtab);

  if (targetTab) targetTab.classList.add("active");
  if (targetView) targetView.classList.add("active");

  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
};

// ==========================================================================
// 6. PHOTO VIEWER & VIDEO MODAL LIGHTBOX (TOUCH & SWIPE ENABLED)
// ==========================================================================
window.openPhotoGalleryModal = function (category, index) {
  if (category === 'mansi') {
    currentGalleryItems = GALLERY_DATA.mansiDave.photos;
  } else if (category === 'owner') {
    currentGalleryItems = GALLERY_DATA.owner.photos;
  }
  currentItemIndex = index || 0;
  displayCurrentModalPhoto();
};

function displayCurrentModalPhoto() {
  if (!currentGalleryItems || !currentGalleryItems[currentItemIndex]) return;
  const item = currentGalleryItems[currentItemIndex];
  const modal = document.getElementById("videoModal");
  const title = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !title || !playerBox) return;

  title.textContent = `Photo ${currentItemIndex + 1} of ${currentGalleryItems.length}`;

  const fbStr = JSON.stringify(item.fallbacks || []).replace(/"/g, '&quot;');

  playerBox.innerHTML = `
    <div id="modalPhotoContainer" style="position: relative; text-align: center; padding: 6px; max-height: 82vh; display: flex; flex-direction: column; align-items: center; justify-content: center; user-select: none;">
      <div style="position: relative; max-width: 100%; display: flex; justify-content: center; align-items: center;">
        <img id="modalActiveImg" 
             src="${item.src}" 
             alt="Morlo Group Patan" 
             style="max-width: 100%; max-height: 72vh; border-radius: 12px; object-fit: contain; box-shadow: 0 12px 40px rgba(0,0,0,0.95); border: 1px solid var(--border-gold); transition: transform 0.2s ease;" 
             onerror="handleImageError(this, ${fbStr});">
      </div>
      
      <div style="margin-top: 14px; display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 480px; gap: 12px;">
        <button class="btn btn-secondary btn-sm" onclick="navigatePhotoModal(-1)" ${currentItemIndex === 0 ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : ''}>
          &larr; Prev
        </button>
        <span style="font-size: 0.9rem; color: var(--gold-primary); font-weight: 700; letter-spacing: 1px;">
          ${currentItemIndex + 1} / ${currentGalleryItems.length}
        </span>
        <button class="btn btn-secondary btn-sm" onclick="navigatePhotoModal(1)" ${currentItemIndex === currentGalleryItems.length - 1 ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : ''}>
          Next &rarr;
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  attachTouchSwipeListeners();
}

window.navigatePhotoModal = function (direction) {
  const newIndex = currentItemIndex + direction;
  if (newIndex >= 0 && newIndex < currentGalleryItems.length) {
    currentItemIndex = newIndex;
    displayCurrentModalPhoto();
  }
};

window.openPhotoViewer = function (imgSrc, caption = "Morlo Group Patan", fallbacks = []) {
  const modal = document.getElementById("videoModal");
  const title = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !title || !playerBox) return;

  title.textContent = caption;
  const fbStr = JSON.stringify(fallbacks).replace(/"/g, '&quot;');

  playerBox.innerHTML = `
    <div style="text-align: center; padding: 6px; max-height: 82vh; display: flex; align-items: center; justify-content: center;">
      <img src="${imgSrc}" 
           alt="${caption}" 
           style="max-width: 100%; max-height: 75vh; border-radius: 12px; object-fit: contain; box-shadow: 0 12px 40px rgba(0,0,0,0.95); border: 1px solid var(--border-gold);" 
           onerror="handleImageError(this, ${fbStr});">
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Touch swipe listener on photo container for mobile swipe gestures
function attachTouchSwipeListeners() {
  const container = document.getElementById("modalPhotoContainer");
  if (!container) return;

  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // Swiped Left -> Next
        navigatePhotoModal(1);
      } else {
        // Swiped Right -> Prev
        navigatePhotoModal(-1);
      }
    }
  }, { passive: true });
}

// Make every clickable image on page trigger the viewer
function initAllImageClickLightbox() {
  document.querySelectorAll(".singer-card, .owner-image-frame, .owner-spotlight-img-box, .achievement-card").forEach(el => {
    el.style.cursor = "pointer";
  });
}

window.openVideoPlayer = function (titleText, videoUrl, embedUrl) {
  const modal = document.getElementById("videoModal");
  const title = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !title || !playerBox) return;

  title.textContent = titleText + " - Morlo Group Live";
  playerBox.innerHTML = `
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; background: #000;">
      <iframe src="${embedUrl}?autoplay=1&rel=0&modestbranding=1" 
              title="${titleText}" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen 
              style="position: absolute; top:0; left:0; width:100%; height:100%;">
      </iframe>
    </div>
    <div style="margin-top: 14px; text-align: center;">
      <a href="${videoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="display: inline-flex;">
        <svg class="btn-icon" fill="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Watch Full Video on YouTube
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// ==========================================================================
// 7. EVENT SELECTION HELPER
// ==========================================================================
window.selectEventTypeAndScroll = function (eventType) {
  const eventTypeSelect = document.getElementById("inquiryEventType") || document.getElementById("eventType");
  const inquirySection = document.getElementById("inquiry");

  if (eventTypeSelect) {
    eventTypeSelect.value = eventType;
  }

  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: "smooth" });
  }
};

// ==========================================================================
// 8. DIRECT WHATSAPP & PHONE CALL LAUNCHER
// ==========================================================================
window.triggerDirectWhatsApp = function () {
  const message = "Hello Morlo Group Patan! I want to book an event (Garba / Bhajan / Live Show / DJ / Ramel / Private Event). Please share details.";
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

// ==========================================================================
// 9. INQUIRY FORM (Direct WhatsApp Dispatch)
// ==========================================================================
function initInquiryForm() {
  const form = document.getElementById("inquiryForm") || document.getElementById("eventInquiryForm");
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById("inquiryEventDate") || document.getElementById("eventDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = (document.getElementById("inquiryName")?.value || document.getElementById("fullName")?.value || "").trim();
    const phone = (document.getElementById("inquiryPhone")?.value || document.getElementById("phone")?.value || "").trim();
    const eventType = (document.getElementById("inquiryEventType")?.value || document.getElementById("eventType")?.value || "");
    const eventDate = (document.getElementById("inquiryEventDate")?.value || document.getElementById("eventDate")?.value || "");
    const eventLocation = (document.getElementById("inquiryLocation")?.value || document.getElementById("eventLocation")?.value || "").trim();
    const message = (document.getElementById("inquiryMessage")?.value || document.getElementById("message")?.value || "").trim();

    if (!fullName || !phone || !eventType) {
      alert("Please fill in your Name, Phone Number, and Event Type.");
      return;
    }

    const waText = 
`*NEW EVENT INQUIRY - MORLO GROUP PATAN*
─────────────────────────────
👤 *Client Name:* ${fullName}
📞 *Contact Number:* ${phone}
🎪 *Event Type:* ${eventType}
📅 *Event Date:* ${eventDate || 'To be discussed'}
📍 *Location/City:* ${eventLocation || 'Patan / Gujarat'}
📝 *Special Requirements:* ${message || 'None'}
─────────────────────────────
_Sent via morlogroup.com official booking portal_`;

    const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    window.open(whatsappUrl, "_blank");
  });
}

// ==========================================================================
// 10. MODAL CONTROLS & KEYBOARD LISTENERS
// ==========================================================================
function initVideoModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("videoModalClose");

  if (!modal) return;

  function closeModal() {
    modal.classList.remove("active");
    const playerBox = document.getElementById("videoPlayerBox");
    if (playerBox) playerBox.innerHTML = "";
    document.body.style.overflow = "";
  }

  window.closeVideoModal = closeModal;

  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigatePhotoModal(-1);
      } else if (e.key === "ArrowRight") {
        navigatePhotoModal(1);
      }
    }
  });
}

// ==========================================================================
// 11. DYNAMIC CONTACT LINKS
// ==========================================================================
function initDynamicContactLinks() {
  const mobileDisplays = document.querySelectorAll(".display-mobile-number");
  const emailDisplays = document.querySelectorAll(".display-email");
  const youtubeLinks = document.querySelectorAll(".link-youtube");
  const instagramLinks = document.querySelectorAll(".link-instagram");
  const facebookLinks = document.querySelectorAll(".link-facebook");

  mobileDisplays.forEach(el => {
    el.textContent = CONFIG.MOBILE_NUMBER;
    if (el.tagName === "A") {
      el.setAttribute("href", `tel:${CONFIG.MOBILE_NUMBER.replace(/\s+/g, '')}`);
    }
  });

  emailDisplays.forEach(el => {
    el.textContent = CONFIG.EMAIL;
    if (el.tagName === "A") {
      el.setAttribute("href", `mailto:${CONFIG.EMAIL}`);
    }
  });

  youtubeLinks.forEach(el => {
    el.setAttribute("href", CONFIG.YOUTUBE_LINK);
  });
  instagramLinks.forEach(el => {
    el.setAttribute("href", CONFIG.INSTAGRAM_LINK);
  });
  facebookLinks.forEach(el => {
    el.setAttribute("href", CONFIG.FACEBOOK_LINK);
  });
}
}
