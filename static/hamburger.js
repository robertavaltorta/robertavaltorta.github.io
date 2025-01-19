document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu-nav");
    const body = document.body;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        body.classList.toggle("menu-open");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("show");
            body.classList.remove("menu-open");
        }
    });
});