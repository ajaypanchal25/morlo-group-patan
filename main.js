/**
 * MORLO GROUP PATAN - MAIN JAVASCRIPT
 * Professional Event Organizer & Entertainment Group
 * Owner: Shailesh Goswami | Lead Singer: Mansi Dave
 */

if (window.__MORLO_APP_INITIALIZED__) {
  // Already initialized
} else {
  window.__MORLO_APP_INITIALIZED__ = true;

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
// 2. GALLERY DATA (MANSI DAVE PHOTOS/VIDEOS & OWNER SHAILESH GOSWAMI)
// ==========================================================================
const GALLERY_DATA = {
  mansiDave: {
    photos: [
      {
        id: "md-p1",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/mansidave.jpg",
        isReal: true,
        tag: "Lead Singer & Star Performer"
      },
      {
        id: "md-p2",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/mansi-stage.jpg",
        isReal: true,
        tag: "Stage Live Performance"
      },
      {
        id: "md-p3",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/mansi-interview.jpg",
        isReal: true,
        tag: "Interview Special"
      },
      {
        id: "md-p4",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/mansi2.jpg",
        isReal: true,
        tag: "Raas Garba Vocalist"
      },
      {
        id: "md-p5",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/sevacamp.jpg",
        isReal: true,
        tag: "Seva Camp Sanman"
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
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/withpm.jpg",
        isReal: true,
        tag: "With Hon. PM Narendra Modi"
      },
      {
        id: "ow-p2",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner1.jpg",
        isReal: true,
        tag: "Founder & Event Director"
      },
      {
        id: "ow-p3",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner2.jpg",
        isReal: true,
        tag: "Cultural Event Organization"
      },
      {
        id: "ow-p4",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner3.jpg",
        isReal: true,
        tag: "Grand Event Management"
      },
      {
        id: "ow-p5",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner4.jpg",
        isReal: true,
        tag: "Stage & Sound Direction"
      },
      {
        id: "ow-p6",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner5.jpg",
        isReal: true,
        tag: "Live Production"
      },
      {
        id: "ow-p7",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner6.jpg",
        isReal: true,
        tag: "Artist Coordination"
      },
      {
        id: "ow-p8",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner7.jpg",
        isReal: true,
        tag: "Stage Management"
      },
      {
        id: "ow-p9",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner8.jpg",
        isReal: true,
        tag: "Morlo Team Leadership"
      },
      {
        id: "ow-p10",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner9.jpg",
        isReal: true,
        tag: "Grand Program Setup"
      },
      {
        id: "ow-p11",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner10.jpg",
        isReal: true,
        tag: "Cultural Recognition"
      },
      {
        id: "ow-p12",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner11.jpg",
        isReal: true,
        tag: "Stage Felicitation"
      },
      {
        id: "ow-p13",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner12.jpg",
        isReal: true,
        tag: "Heritage Celebrations"
      },
      {
        id: "ow-p14",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/sevacamp.jpg",
        isReal: true,
        tag: "Social Service & Seva Camp"
      }
    ]
  }
};

// ==========================================================================
// 3. INITIALIZATION ON DOM LOADED
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initImageFallbacks();
  initNavbar();
  renderGallery();
  initGalleryControls();
  initInquiryForm();
  initVideoModal();
  initDynamicContactLinks();
});

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
    highlightActiveNavLink();
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
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    if (navOverlay) {
      navOverlay.addEventListener("click", closeMenu);
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

function highlightActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================================================
// 5. GALLERY RENDERING
// ==========================================================================
function renderGallery() {
  // 1. Render Mansi Dave Photos
  const mdPhotosGrid = document.getElementById("mansiDavePhotosGrid");
  if (mdPhotosGrid) {
    mdPhotosGrid.innerHTML = GALLERY_DATA.mansiDave.photos.map(item => {
      return `
        <div class="gallery-item-card" onclick="openPhotoViewer('${item.src}', 'Mansi Dave - ${item.tag}')" style="cursor: pointer;">
          <div class="gallery-img-container">
            <img src="${item.src}" alt="Mansi Dave - ${item.tag}" loading="lazy">
            <div class="gallery-zoom-overlay">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(7,11,25,0.95) 0%, rgba(7,11,25,0.5) 70%, transparent 100%); padding: 12px 16px;">
              <span style="font-size: 0.95rem; font-weight: 800; color: #fff; display: block;">${item.title}</span>
              <span style="font-size: 0.78rem; color: var(--gold-primary); font-weight: 600;">${item.tag}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Render Mansi Dave Videos (Direct 1-Touch YouTube Launch on Click)
  const mdVideosGrid = document.getElementById("mansiDaveVideosGrid");
  if (mdVideosGrid) {
    mdVideosGrid.innerHTML = GALLERY_DATA.mansiDave.videos.map(item => {
      return `
        <a href="${item.videoSrc}" target="_blank" rel="noopener noreferrer" class="gallery-item-card video-card" title="Click to watch ${item.title} on YouTube" style="text-decoration: none; display: block; cursor: pointer;">
          <div class="gallery-img-container">
            <img src="${item.poster}" alt="${item.title} - Morlo Group Patan" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="video-play-btn" aria-label="Play on YouTube">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(7,11,25,0.98) 0%, rgba(7,11,25,0.6) 70%, transparent 100%); padding: 14px 16px;">
              <span style="font-size: 1.05rem; font-weight: 800; color: #ffffff; display: block; margin-bottom: 2px; letter-spacing: 0.5px;">${item.title}</span>
              <span style="font-size: 0.8rem; color: var(--gold-primary); font-weight: 600;">${item.tag}</span>
            </div>
          </div>
        </a>
      `;
    }).join("");
  }

  // 3. Render Owner Photos Grid
  const ownerPhotosGrid = document.getElementById("ownerPhotosGrid");
  if (ownerPhotosGrid) {
    ownerPhotosGrid.innerHTML = GALLERY_DATA.owner.photos.map(item => {
      return `
        <div class="gallery-item-card" onclick="openPhotoViewer('${item.src}', 'Shailesh Goswami - ${item.tag}')" style="cursor: pointer;">
          <div class="gallery-img-container">
            <img src="${item.src}" alt="Shailesh Goswami - ${item.tag}" loading="lazy">
            <div class="gallery-zoom-overlay">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
              </svg>
            </div>
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(to top, rgba(7,11,25,0.95) 0%, rgba(7,11,25,0.5) 70%, transparent 100%); padding: 12px 16px;">
              <span style="font-size: 0.95rem; font-weight: 800; color: #fff; display: block;">${item.title}</span>
              <span style="font-size: 0.78rem; color: var(--gold-primary); font-weight: 600;">${item.tag}</span>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // Re-run fallback listeners on newly added images
  initImageFallbacks();
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

  // Mansi Dave Sub-tabs (Photos / Videos)
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
function openOwnerGallery() {
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
}

// Quick trigger for Mansi Dave gallery
function openMansiDaveGallery(subtab = 'mansiDavePhotosView') {
  const gallerySection = document.getElementById("gallery");
  const folderTabs = document.querySelectorAll(".folder-tab-btn");
  const folderViews = document.querySelectorAll(".folder-view");

  folderTabs.forEach(t => t.classList.remove("active"));
  folderViews.forEach(v => v.classList.remove("active"));

  const mansiTab = document.querySelector('[data-folder="folderMansiDave"]');
  const mansiView = document.getElementById("folderMansiDave");

  if (mansiTab) mansiTab.classList.add("active");
  if (mansiView) mansiView.classList.add("active");

  const subTabs = document.querySelectorAll(".sub-tab-btn");
  const subViews = document.querySelectorAll(".gallery-sub-view");
  subTabs.forEach(t => t.classList.remove("active"));
  subViews.forEach(v => v.classList.remove("active"));

  const targetSubBtn = document.querySelector(`[data-subtab="${subtab}"]`);
  const targetSubView = document.getElementById(subtab);
  if (targetSubBtn) targetSubBtn.classList.add("active");
  if (targetSubView) targetSubView.classList.add("active");

  if (gallerySection) {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// 6. INQUIRY FOR EVENT & WHATSAPP GENERATION
// ==========================================================================
function initInquiryForm() {
  const form = document.getElementById("eventInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inquiryName").value.trim();
    const phone = document.getElementById("inquiryPhone").value.trim();
    const eventType = document.getElementById("inquiryEventType").value;
    const eventDate = document.getElementById("inquiryEventDate").value;
    const location = document.getElementById("inquiryLocation").value.trim();
    const message = document.getElementById("inquiryMessage").value.trim();

    if (!name || !phone || !eventType || !eventDate || !location || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Prefilled WhatsApp Message Formatter
    const whatsappText = 
`Hello Morlo Group Patan,
I want to make an event booking inquiry.

Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Location: ${location}
Message: ${message}`;

    // Target Phone / WhatsApp
    const rawNumber = CONFIG.WHATSAPP_NUMBER.replace(/\D/g, "");
    let waUrl = "";

    if (rawNumber && rawNumber !== "WHATSAPP_NUMBER_HERE") {
      waUrl = `https://wa.me/${rawNumber}?text=${encodeURIComponent(whatsappText)}`;
    } else {
      waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
    }

    window.open(waUrl, "_blank");
  });
}

// Quick prefill trigger from Event Types
function selectEventTypeAndScroll(eventTypeName) {
  const selectElem = document.getElementById("inquiryEventType");
  const inquirySection = document.getElementById("inquiry");

  if (selectElem && eventTypeName) {
    selectElem.value = eventTypeName;
  }

  if (inquirySection) {
    inquirySection.scrollIntoView({ behavior: "smooth" });
  }
}

// Direct Floating WhatsApp button trigger
function triggerDirectWhatsApp() {
  const rawNumber = CONFIG.WHATSAPP_NUMBER.replace(/\D/g, "");
  const defaultText = "Hello Morlo Group Patan, I would like to inquire about event booking.";
  let url = "";

  if (rawNumber && rawNumber !== "WHATSAPP_NUMBER_HERE") {
    url = `https://wa.me/${rawNumber}?text=${encodeURIComponent(defaultText)}`;
  } else {
    url = `https://api.whatsapp.com/send?text=${encodeURIComponent(defaultText)}`;
  }

  window.open(url, "_blank");
}

// ==========================================================================
// 7. VIDEO & PHOTO MODAL LIGHTBOX (ANTI-ERROR-153 ROBUST IMPLEMENTATION)
// ==========================================================================
function initVideoModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.getElementById("videoModalClose");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeVideoModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeVideoModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeVideoModal();
    }
  });
}

function openVideoPlayer(title, videoSrc, embedUrl) {
  const modal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !modalTitle || !playerBox) return;

  modalTitle.textContent = title || "MORLO GROUP PATAN - EVENT VIDEO";

  let videoId = "";
  if (videoSrc) {
    if (videoSrc.includes("youtu.be/")) {
      videoId = videoSrc.split("youtu.be/")[1].split("?")[0];
    } else if (videoSrc.includes("watch?v=")) {
      videoId = videoSrc.split("watch?v=")[1].split("&")[0];
    } else if (videoSrc.includes("embed/")) {
      videoId = videoSrc.split("embed/")[1].split("?")[0];
    }
  }

  const directWatchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : (videoSrc || CONFIG.YOUTUBE_LINK);
  const ytEmbedUrl = videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0` : (embedUrl || videoSrc);

  if (videoId || ytEmbedUrl) {
    playerBox.innerHTML = `
      <div style="position: relative; width: 100%; display: flex; flex-direction: column; background: #070b19;">
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; max-height: 65vh; background: #000; overflow: hidden;">
          <iframe src="${ytEmbedUrl}" 
                  referrerpolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowfullscreen 
                  style="width: 100%; height: 100%; border: none; display: block;">
          </iframe>
        </div>
        
        <!-- Anti Error 153 Direct Watch Notice & CTA Bar -->
        <div style="padding: 14px 18px; background: #0b1224; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-top: 1px solid var(--border-gold);">
          <div>
            <span style="color: var(--gold-primary); font-weight: 800; font-size: 1.05rem; display: block;">${title}</span>
            <span style="color: #cbd5e1; font-size: 0.78rem;">⭐ Morlo Group Patan Official Video</span>
          </div>
          
          <a href="${directWatchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; font-size: 0.88rem; box-shadow: 0 4px 15px rgba(239,35,60,0.5);">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch On YouTube Directly
          </a>
        </div>
      </div>
    `;
  } else if (videoSrc && (videoSrc.includes(".mp4") || videoSrc.includes(".webm"))) {
    playerBox.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; max-height:70vh; background:#000; object-fit:contain;">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support video playback.
      </video>
    `;
  } else {
    playerBox.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: #fff;">
        <p style="margin-bottom: 20px; font-size: 1.1rem; color: #f5b700;">Watch official live shows & performances on YouTube</p>
        <a href="${CONFIG.YOUTUBE_LINK}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Watch On YouTube Channel</a>
      </div>
    `;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openPhotoViewer(src, title) {
  const modal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !modalTitle || !playerBox) return;

  modalTitle.textContent = title || "MORLO GROUP PATAN";
  playerBox.innerHTML = `
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; padding: 10px;">
      <img src="${src}" alt="${title}" style="max-height: 75vh; max-width: 100%; object-fit: contain;">
    </div>
  `;

  initImageFallbacks();
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const playerBox = document.getElementById("videoPlayerBox");

  if (playerBox) {
    const video = playerBox.querySelector("video");
    if (video) {
      video.pause();
      video.src = "";
    }
    const iframe = playerBox.querySelector("iframe");
    if (iframe) {
      iframe.src = "";
    }
    playerBox.innerHTML = "";
  }
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================================================
// 8. DYNAMIC CONTACT LINKS & UNIVERSAL MULTI-PATH IMAGE FALLBACKS
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
      el.setAttribute("href", `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent("Event Booking Inquiry - Morlo Group Patan")}`);
    }
  });

  youtubeLinks.forEach(el => {
    el.setAttribute("href", CONFIG.YOUTUBE_LINK === "YOUTUBE_LINK_HERE" ? "#" : CONFIG.YOUTUBE_LINK);
  });
  instagramLinks.forEach(el => {
    el.setAttribute("href", CONFIG.INSTAGRAM_LINK === "INSTAGRAM_LINK_HERE" ? "#" : CONFIG.INSTAGRAM_LINK);
  });
  facebookLinks.forEach(el => {
    el.setAttribute("href", CONFIG.FACEBOOK_LINK === "FACEBOOK_LINK_HERE" ? "#" : CONFIG.FACEBOOK_LINK);
  });
}

function initImageFallbacks() {
  const fallbackMap = {
    "logo.png": ["assets/images/logo/logo.png", "images/logo.png", "logo.png", "assets/images/logo/logo.png.png"],
    "mansidave.jpg": ["assets/images/mansi-dave/mansidave.jpg", "images/mansidave.jpg", "assets/images/logo/mansidave.jpg", "assets/images/mansi-dave/photo1.jpg"],
    "mansi-dave.jpg": ["assets/images/mansi-dave/mansidave.jpg", "images/mansidave.jpg", "assets/images/logo/mansidave.jpg"],
    "photo1.jpg": ["assets/images/mansi-dave/mansidave.jpg", "images/mansidave.jpg", "assets/images/logo/mansidave.jpg"],
    "mansi-stage.jpg": ["assets/images/mansi-dave/mansi-stage.jpg", "images/mansi-stage.jpg", "assets/images/logo/mansi1.jpg", "images/mansi1.jpg"],
    "mansi1.jpg": ["assets/images/mansi-dave/mansi-stage.jpg", "images/mansi-stage.jpg", "assets/images/logo/mansi1.jpg"],
    "photo2.jpg": ["assets/images/mansi-dave/mansi-stage.jpg", "images/mansi-stage.jpg", "images/mansi1.jpg"],
    "mansi-interview.jpg": ["assets/images/mansi-dave/mansi-interview.jpg", "images/mansi-interview.jpg", "assets/images/mansi-dave/masnsi intrew.jpg.jpg", "assets/images/mansi-dave/photo3.jpg"],
    "photo3.jpg": ["assets/images/mansi-dave/mansi-interview.jpg", "images/mansi-interview.jpg", "assets/images/mansi-dave/masnsi intrew.jpg.jpg"],
    "sevacamp.jpg": ["assets/images/mansi-dave/sevacamp.jpg", "images/sevacamp.jpg", "assets/images/logo/sevacamp.jpg", "assets/images/mansi-dave/photo4.jpg"],
    "photo4.jpg": ["assets/images/mansi-dave/sevacamp.jpg", "images/sevacamp.jpg", "assets/images/logo/sevacamp.jpg"],
    "withpm.jpg": ["assets/images/owner/withpm.jpg", "images/withpm.jpg", "assets/images/logo/withpm.jpg", "assets/images/owner/owner-pm.jpg", "assets/images/owner/owner1.jpg"],
    "owner-pm.jpg": ["assets/images/owner/withpm.jpg", "images/withpm.jpg", "assets/images/logo/withpm.jpg"],
    "owner1.jpg": ["assets/images/owner/withpm.jpg", "images/withpm.jpg", "assets/images/logo/withpm.jpg"],
    "owner2.jpg": ["assets/images/owner/owner2.jpg", "images/owner2.jpg", "assets/images/logo/OSP05465.jpg"],
    "owner3.jpg": ["assets/images/owner/owner3.jpg", "images/owner3.jpg"],
    "owner4.jpg": ["assets/images/owner/owner4.jpg", "images/owner4.jpg"],
    "owner5.jpg": ["assets/images/owner/owner5.jpg", "images/owner5.jpg"],
    "owner6.jpg": ["assets/images/owner/owner6.jpg", "images/owner6.jpg"],
    "owner7.jpg": ["assets/images/owner/owner7.jpg", "images/owner7.jpg"],
    "owner8.jpg": ["assets/images/owner/owner8.jpg", "images/owner8.jpg"],
    "navratri.jpg": ["assets/images/events/navratri.jpg", "images/navratri.jpg", "assets/images/events/garba.jpg", "images/garba.jpg", "assets/images/logo/navratri.jpg"],
    "garba.jpg": ["assets/images/events/navratri.jpg", "images/navratri.jpg", "assets/images/events/garba.jpg", "images/garba.jpg"],
    "dj.jpg": ["assets/images/events/dj.jpg", "images/dj.jpg", "assets/images/logo/dj.jpg", "assets/images/logo/live-dj.jpg"]
  };

  document.querySelectorAll("img").forEach(img => {
    if (img.dataset.hasFallbackListener) return;
    img.dataset.hasFallbackListener = "true";

    img.addEventListener("error", function () {
      const currentSrc = this.getAttribute("src") || "";
      const filename = currentSrc.split("/").pop().split("?")[0];
      let attempts = parseInt(this.dataset.fallbackAttempts || "0", 10);

      let candidates = [];
      for (const [key, paths] of Object.entries(fallbackMap)) {
        if (currentSrc.includes(key) || filename === key) {
          candidates = paths;
          break;
        }
      }

      if (candidates.length === 0) {
        if (currentSrc.startsWith("assets/images/")) {
          candidates.push("images/" + filename);
          candidates.push("./images/" + filename);
        } else if (currentSrc.startsWith("images/")) {
          candidates.push("assets/images/" + filename);
        }
      }

      if (attempts < candidates.length) {
        const nextSrc = candidates[attempts];
        this.dataset.fallbackAttempts = (attempts + 1).toString();
        if (nextSrc && nextSrc !== currentSrc) {
          this.src = nextSrc;
          return;
        }
      }

      // Branded Luxury Dark-Navy & Gold SVG Placeholder Fallback
      if (!this.dataset.svgApplied) {
        this.dataset.svgApplied = "true";
        const altText = this.getAttribute("alt") || "Morlo Group Patan";
        const svgBg = encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#070b19"/>
                <stop offset="50%" stop-color="#0f1c3f"/>
                <stop offset="100%" stop-color="#070b19"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <circle cx="200" cy="125" r="38" fill="#f5b700" opacity="0.15"/>
            <path d="M188 110 L220 125 L188 140 Z" fill="#f5b700" opacity="0.9"/>
            <text x="200" y="195" fill="#cbd5e1" font-family="sans-serif" font-size="13" font-weight="600" text-anchor="middle">${altText}</text>
            <text x="200" y="220" fill="#f5b700" font-family="sans-serif" font-size="11" font-weight="700" letter-spacing="2" text-anchor="middle">MORLO GROUP PATAN</text>
          </svg>
        `);
        this.src = `data:image/svg+xml;utf8,${svgBg}`;
      }
    });
  });
}
}
