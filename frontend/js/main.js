/*============================*/
/* Haupt-JS für die Website */
/*============================*/

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (menuIcon && dropdownMenu) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("active");
            dropdownMenu.classList.toggle("active");
        });

        // Schließen des Menüs beim Klicken außerhalb
        document.addEventListener("click", (event) => {
            if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
                menuIcon.classList.remove("active");
                dropdownMenu.classList.remove("active");
            }
        });
    } else {
        console.error("Elemente für das Hamburger-Menü nicht gefunden!");
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const scrollTriangle = document.querySelector("#scroll-triangle");

    scrollTriangle.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Sichtbarkeit basierend auf der Scroll-Position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTriangle.classList.add("visible");
        } else {
            scrollTriangle.classList.remove("visible");
        }
    });
});







/*============================*/
/* Weitere globale Funktionen */
/*============================*/
