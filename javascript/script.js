window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL REVEAL (UPGRADED)
  ========================== */

  const animatedElements = document.querySelectorAll(".section, .project-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
  });

  /* =========================
     NAVBAR SHRINK
  ========================== */

  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });

  /* =========================
     MAGNETIC BUTTON EFFECT
  ========================== */

  const buttons = document.querySelectorAll(".btn-primary");

  buttons.forEach(button => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translate(0,0)";
    });
  });

  /* =========================
     CURSOR GLOW
  ========================== */

  document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });

  /* =========================
   PROJECT CARD 3D TILT (PREMIUM VERSION)
========================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
  card.style.transformStyle = "preserve-3d";

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 18);
    const rotateY = ((centerX - x) / 18);

    // Light direction simulation
    const shadowX = (centerX - x) / 8;
    const shadowY = (centerY - y) / 8;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    card.style.boxShadow =
      `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.6)`;

  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow =
      "0 15px 30px rgba(0,0,0,0.4)";
  });

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

window.addEventListener("scroll",()=>{
  const progress = document.querySelector(".scroll-progress");
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const percent = (scrollTop / height) * 100;
  progress.style.width = percent + "%";
});

/* =========================
   HERO WORD ANIMATION (FIXED SPACING VERSION)
========================== */

const heroTitle = document.querySelector(".hero-title");

if (heroTitle) {

  const text = heroTitle.textContent.trim();
  const words = text.split(/\s+/); // split on ANY whitespace

  heroTitle.innerHTML = "";

  words.forEach((word, index) => {

    const span = document.createElement("span");

    span.textContent = word;
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.marginRight = "12px";  // <-- THIS FIXES SPACING
    span.style.transform = "translateY(40px)";
    span.style.transition =
      `all 0.7s cubic-bezier(.2,.65,.3,1) ${index * 0.12}s`;

    heroTitle.appendChild(span);

    requestAnimationFrame(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    });

  });
}

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});

const cvSection = document.querySelector(".cv-content");

if (cvSection) {
  cvSection.style.opacity = "0";
  cvSection.style.transform = "translateY(40px)";
  cvSection.style.transition = "all 0.8s ease";

  const cvObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cvSection.style.opacity = "1";
        cvSection.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.3 });

  cvObserver.observe(cvSection);
}

});