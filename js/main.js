const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-nav a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach((section) => observer.observe(section));

const projects = {
  ferma: {
    title: "FERMA",
    kicker: "AI-BASED IMAGE CLASSIFICATION SYSTEM FOR TUBA",
    description: "FERMA is an AI-based image classification system designed to identify the fermentation and aging stages of tuba through image analysis. It explores computer vision and machine learning to recognize visual characteristics associated with different stages.",
    tech: "Python / AI", type: "Computer Vision"
  },
  cropx: {
    title: "CROP-X",
    kicker: "RICE DISEASE DETECTION & MARKETPLACE PLATFORM",
    description: "CROP-X is a machine learning-based system designed to support rice farmers through image-based crop disease detection. It also includes an online marketplace where farmers can list harvested rice and connect with potential buyers.",
    tech: "Python / Machine Learning", type: "MySQL"
  },
  nexbin: {
    title: "NEXBIN",
    kicker: "AUTOMATED WASTE DETECTION & TOUCHLESS SMART BIN",
    description: "NEXBIN is a sensor-based smart waste bin designed to support automated waste segregation and touchless disposal. Sensors, a microcontroller, and servo motors help identify selected waste categories and control the bin mechanism.",
    tech: "Arduino / ESP32", type: "Hardware / IoT"
  },
  sakaynow: {
    title: "SakayNow",
    kicker: "REAL-TIME GPS ALERTS & ROUTE INTELLIGENCE",
    description: "SakayNow is a transportation monitoring and information system designed to provide commuters with vehicle location and route information. GPS-based tracking can provide vehicle location, route progress, and estimated arrival information.",
    tech: "JavaScript", type: "GPS / MySQL"
  },
  portfolio: {
    title: "Personal Portfolio",
    kicker: "RESPONSIVE PERSONAL WEBSITE",
    description: "This portfolio presents background, education, technical skills, and selected academic projects in a responsive website built with semantic HTML, custom CSS, and vanilla JavaScript—without Bootstrap or other frontend frameworks.",
    tech: "HTML / CSS / JavaScript", type: "Frontend"
  }
};

const dialog = document.querySelector("#project-dialog");
const closeDialog = document.querySelector(".dialog-close");
document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-kicker").textContent = project.kicker;
    document.querySelector("#dialog-description").textContent = project.description;
    document.querySelector("#dialog-tech").textContent = project.tech;
    document.querySelector("#dialog-type").textContent = project.type;
    dialog.showModal();
  });
});
closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
