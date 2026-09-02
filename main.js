/**
 * MORLO GROUP PATAN - MAIN JAVASCRIPT
 * Professional Event Organizer & Entertainment Group
 * Owner: Shailesh Goswami | Lead Singer: Mansi Dave
 */

// ==========================================================================
// 1. CENTRALIZED CONFIGURATION (EDIT YOUR CONTACT INFO & SOCIAL LINKS HERE)
// ==========================================================================
const CONFIG = {
  // WhatsApp & Phone
  WHATSAPP_NUMBER: "919824968029",
  MOBILE_NUMBER: "+91 9824968029",
  
  // Email & Address
  EMAIL: "morlopatan@gmail.com",
  LOCATION: "S-43,44, City Point Patan, Patan, Gujarat - 384268",
  
  // Social Media Links
  YOUTUBE_LINK: "https://youtube.com/@morlogrouppatan?si=gRkl9iuwVO0_GVFK",
  INSTAGRAM_LINK: "https://www.instagram.com/morlogrouppatan?igsi=MTltdXdlcnVoZmJwdA==",
  FACEBOOK_LINK: "https://www.facebook.com/share/1DgpCWpbp9/"
};

// ==========================================================================
// 2. GALLERY DATA & MEDIA REGISTRY (MANSI DAVE & OWNER SHAILESH GOSWAMI)
// ==========================================================================
const GALLERY_DATA = {
  mansiDave: {
    photos: [
      {
        id: "md-p1",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/photo1.jpg",
        isReal: true,
        tag: "Lead Singer"
      },
      {
        id: "md-p2",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/photo2.jpg",
        isReal: true,
        tag: "Stage Performance"
      },
      {
        id: "md-p3",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/photo3.jpg",
        isReal: true,
        tag: "Interview Special"
      },
      {
        id: "md-p4",
        title: "MANSI DAVE",
        src: "assets/images/mansi-dave/photo4.jpg",
        isReal: true,
        tag: "Seva Camp Sanman"
      }
    ],
    videos: [
      {
        id: "md-v1",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video1.mp4",
        tag: "Video 1"
      },
      {
        id: "md-v2",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video2.mp4",
        tag: "Video 2"
      },
      {
        id: "md-v3",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video3.mp4",
        tag: "Video 3"
      },
      {
        id: "md-v4",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video4.mp4",
        tag: "Video 4"
      },
      {
        id: "md-v5",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video5.mp4",
        tag: "Video 5"
      },
      {
        id: "md-v6",
        title: "MANSI DAVE",
        videoSrc: "assets/videos/mansi-dave/video6.mp4",
        tag: "Video 6"
      }
    ]
  },
  owner: {
    photos: [
      {
        id: "ow-p1",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner1.jpg",
        isReal: true,
        tag: "With Hon. PM"
      },
      {
        id: "ow-p2",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner2.jpg",
        isReal: true,
        tag: "Seva Camp"
      },
      {
        id: "ow-p3",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner3.jpg",
        isReal: true,
        tag: "Founder Portrait"
      },
      {
        id: "ow-p4",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner4.jpg",
        isReal: true,
        tag: "Event Direction"
      },
      {
        id: "ow-p5",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner5.jpg",
        isReal: true,
        tag: "Event Leadership"
      },
      {
        id: "ow-p6",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner6.jpg",
        isReal: true,
        tag: "Cultural Honor"
      },
      {
        id: "ow-p7",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner7.jpg",
        isReal: true,
        tag: "Stage Management"
      },
      {
        id: "ow-p8",
        title: "SHAILESH GOSWAMI",
        src: "assets/images/owner/owner8.jpg",
        isReal: true,
        tag: "Morlo Team"
      }
    ]
  }
};

// ==========================================================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderGallery();
  initGalleryControls();
  initInquiryForm();
  initVideoModal();
  initDynamicContactLinks();
});

// ==========================================================================
// 4. NAVBAR & SCROLL BEHAVIOR
// ==========================================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Navbar on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightActiveNavLink();
  });

  // Mobile Menu Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
      });
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
// 5. GALLERY RENDERING (CLEAN FULL-BLEED MEDIA CARDS)
// ==========================================================================
function renderGallery() {
  // 1. Render Mansi Dave Photos
  const mdPhotosGrid = document.getElementById("mansiDavePhotosGrid");
  if (mdPhotosGrid) {
    mdPhotosGrid.innerHTML = GALLERY_DATA.mansiDave.photos.map(item => {
      return `
        <div class="gallery-item-card" onclick="openPhotoViewer('${item.src}', 'Mansi Dave')" style="cursor: pointer;">
          <div class="gallery-img-container" style="height: 340px;">
            <img src="${item.src}" alt="Mansi Dave" loading="lazy">
            <div class="gallery-zoom-overlay">
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div class="gallery-item-card video-card" onclick="openVideoPlayer('Mansi Dave Live', '${item.videoSrc}')" onmouseenter="this.querySelector('video')?.play()" onmouseleave="const v=this.querySelector('video'); if(v){ v.pause(); v.currentTime=0; }" style="cursor: pointer;">
          <div class="gallery-img-container" style="position: relative; height: 340px; background: #070b19; overflow: hidden;">
            <video src="${item.videoSrc}" preload="metadata" muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
            <div class="video-play-btn">
              <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div style="position: absolute; top: 12px; right: 12px; background: rgba(7, 11, 25, 0.88); border: 1px solid var(--border-gold); color: var(--gold-primary); font-size: 0.72rem; font-weight: 700; padding: 4px 12px; border-radius: 9999px; backdrop-filter: blur(6px);">
              ▶ HD VIDEO
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // 3. Render Owner Photos Grid
  const ownerPhotosGrid = document.getElementById("ownerPhotosGrid");
  if (ownerPhotosGrid) {
    ownerPhotosGrid.innerHTML = GALLERY_DATA.owner.photos.map(item => {
      return `
        <div class="gallery-item-card" onclick="openPhotoViewer('${item.src}', 'Shailesh Goswami')" style="cursor: pointer;">
          <div class="gallery-img-container" style="height: 340px;">
            <img src="${item.src}" alt="Shailesh Goswami - Morlo Group" loading="lazy">
            <div class="gallery-zoom-overlay">
              <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  // Folder Switcher (Mansi Dave vs Owner)
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

  // Switch subtab if specified
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
    const message = document.getElementById("inquiryMessage").value.trim();

    if (!name || !phone || !eventType || !eventDate || !message) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Prefilled WhatsApp Message Formatter
    const whatsappText = 
`Hello Morlo Group Patan,
I want to make an event inquiry.

Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
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
// 7. VIDEO & PHOTO MODAL LIGHTBOX
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

function openVideoPlayer(title, videoSrc) {
  const modal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("videoModalTitle");
  const playerBox = document.getElementById("videoPlayerBox");

  if (!modal || !modalTitle || !playerBox) return;

  modalTitle.textContent = title || "MANSI DAVE";

  if (videoSrc && (videoSrc.includes(".mp4") || videoSrc.includes(".webm"))) {
    playerBox.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; max-height:75vh; background:#000; object-fit:contain;">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else if (videoSrc && (videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be"))) {
    let embedUrl = videoSrc;
    if (videoSrc.includes("watch?v=")) {
      embedUrl = videoSrc.replace("watch?v=", "embed/");
    }
    playerBox.innerHTML = `
      <iframe src="${embedUrl}?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:100%; border:none;"></iframe>
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

  modalTitle.textContent = title || "MANSI DAVE";
  playerBox.innerHTML = `
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000;">
      <img src="${src}" alt="${title}" style="max-height: 80vh; max-width: 100%; object-fit: contain;">
    </div>
  `;

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
    playerBox.innerHTML = "";
  }
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function showMediaNotice(title, type) {
  alert(`${title}\n\nThis ${type} slot is ready. You can easily add your photo to the designated assets folder.`);
}

// ==========================================================================
// 8. DYNAMIC CONTACT LINKS
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
