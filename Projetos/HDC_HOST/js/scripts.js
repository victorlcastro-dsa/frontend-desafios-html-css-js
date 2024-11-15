document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbarItems = document.getElementById("navbar-items");

    hamburgerMenu.addEventListener("click", () => {
        navbarItems.classList.toggle("active");
    });
});