document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Close nav menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  }

  // Scroll to Top Button
  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Active Navigation Highlight & Anchor Click Handler
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        // Close mobile nav if open
        if (navLinks) navLinks.classList.remove("active");

        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    } else if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Glitch sound/visual effect placeholder
  console.log(
    "%c [CYBERCORE SYSTEM ONLINE] ",
    "background: #00f0ff; color: #000; font-weight: bold; font-size: 14px;"
  );
});
