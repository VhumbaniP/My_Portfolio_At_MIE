window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL REVEAL 
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
   PROJECT CARD 3D TILT
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
   HERO WORD ANIMATION 
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
    span.style.marginRight = "12px";  // THIS FIXES SPACING
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

 window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector(".scroll-progress").style.width = scrolled + "%";
    });

    //  Mouse Glow Tracker
    document.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--x', e.clientX + 'px');
        document.body.style.setProperty('--y', e.clientY + 'px');
    });

    //  Page Load Reveal
    document.body.classList.add('loaded');

    window.addEventListener('load', () => {
    // Small delay to let the user see the loader
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Footer Social Icon Magnetic Effect
document.querySelectorAll('.social-links a').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.classList.add('loaded');
            }, 500);
        }, 1500); // Gives users time to see your terminal effect
    }
});


const bgVideos = document.querySelectorAll('.bg-video');

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
}, { threshold: 0.5 });

bgVideos.forEach(video => videoObserver.observe(video));


// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

// Cursor Background Glow Tracker
const glow = document.getElementById('mouse-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Section Reveal on Scroll 
const observerOptions = { threshold: 0.2 };
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    sectionObserver.observe(section);
});

const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

if (menuBtn && navList) {
    // SINGLE event listener
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('is-active');
        navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('is-active');
            navList.classList.remove('active');
        });
    });
}


// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If it's the projects section, also trigger the grid
            const grid = entry.target.querySelector('.projects-grid');
            if (grid) grid.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    // If scrolled more than 50px, turn on the "Floating Glass" look
    if (window.scrollY > 50) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});
// Function to run the counters
const runCounters = () => {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps logic

        const update = () => {
            count += increment;
            if (count < target) {
                stat.innerText = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                stat.innerText = target;
            }
        };
        update();
    });
};

// Start counting when cv section is visible
const cvSectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        runCounters();
        cvSectionObserver.disconnect(); // Only run once
    }
}, { threshold: 0.6 });

const cvSectionElement = document.querySelector('#cv');
if (cvSectionElement) cvSectionObserver.observe(cvSectionElement);

//the theme changing
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "🌙";
    }
  });

}

/* form reset after submission */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function () {

      setTimeout(() => {
        form.reset();
      }, 1000);

    });
  }
});


});