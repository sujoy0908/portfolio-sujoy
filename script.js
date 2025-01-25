const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Photographer', 'YouTuber'];
const typingElement = document.getElementById('typing');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 100 : 200;

    if (!isDeleting) {
        typingElement.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
    } else {
        typingElement.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at end of word
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, speed);
    }
}

type();
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block  ";
}
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.classList.toggle('open', false);

mobileMenu.style.display = mobileMenu.classList.contains('open') ? "block" : "none";

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.classList.contains('open') ? "block" : "none";
});
