document.addEventListener("DOMContentLoaded", function () {
    const words = [
      "Web Developer",
      "Software Developer",
      "Web Designer",
      "Photographer",
      "YouTuber",
    ];
    const typingElement = document.getElementById("typing");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      const speed = isDeleting ? 100 : 200;
  
      typingElement.textContent = currentWord.substring(0, charIndex);
      charIndex += isDeleting ? -1 : 1;
  
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, speed);
      }
    }
    type();
  
    // Slideshow Logic
    let slideIndex = 0;
    function showSlides() {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide) => (slide.style.display = "none"));
      
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].style.display = "block";
      
      setTimeout(showSlides, 4000);
    }
    showSlides();
  
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    mobileMenuIcon.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      mobileMenu.style.display = mobileMenu.classList.contains("open")
        ? "flex" : "none";
    });
  
    // Intersection Observer for Animations
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);
  
    document.querySelectorAll(".milestone").forEach((milestone) => {
      observer.observe(milestone);
    });
  
    // Contact Form
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("sujoy samanta").value;
        const email = document.getElementById("sujoysamanta0908@gmail.com").value;
        const message = document.getElementById("8509288824").value;
  
        if (name && email && message) {
          alert(`Thank you, ${name}. Your message has been sent!`);
          this.reset();
        } else {
          alert("Please fill in all fields.");
        }
      });
  });
  