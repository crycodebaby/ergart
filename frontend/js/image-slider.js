//===============================================//
//Logik für Startbild Switching//
//=====================================//
function setupImageSlider() {
    const images = document.querySelectorAll(".startbild");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");
    const container = document.getElementById("startbild-container");

    if (!images.length) throw new Error("Keine Startbilder gefunden.");

    let currentIndex = 0;

    function updateActiveImage(newIndex) {
        images[currentIndex].classList.remove("active");
        currentIndex = newIndex;
        images[currentIndex].classList.add("active");
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        updateActiveImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        updateActiveImage(prevIndex);
    }

    // Automatischer Wechsel alle 5 Sekunden
    setInterval(showNextImage, 5000);

    // Event-Listener für Buttons
    nextBtn.addEventListener("click", showNextImage);
    prevBtn.addEventListener("click", showPrevImage);

    // Parallax-Effekt
    container.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY, target } = e;
        const x = (offsetX / target.offsetWidth) * 30; // Bewegung horizontal
        const y = (offsetY / target.offsetHeight) * 30; // Bewegung vertikal
});
}
// Aufrufen der Slider-Initialisierung
document.addEventListener("DOMContentLoaded", setupImageSlider);
