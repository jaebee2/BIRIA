// Updated JavaScript for image slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the current slide
    slides[slideIndex].classList.add('active');

    // Move to the next slide
    slideIndex = (slideIndex + 1) % slides.length;

    // Call showSlides again after a short delay (adjust as needed)
    setTimeout(showSlides, 3000); // 3000 milliseconds delay (adjust as needed)
}
