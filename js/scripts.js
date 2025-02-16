document.addEventListener("DOMContentLoaded", function () {
    const toggleDesktop = document.getElementById("dark-mode-toggle-desktop");
    const toggleMobile = document.getElementById("dark-mode-toggle-mobile");

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    if (toggleDesktop) {
        toggleDesktop.addEventListener("click", toggleDarkMode);
    }
    if (toggleMobile) {
        toggleMobile.addEventListener("click", toggleDarkMode);
    }

    const offcanvasLinks = document.querySelectorAll("#sidebar-wrapper .list-group-item");
    offcanvasLinks.forEach((link) => {
        link.addEventListener("click", () => {
            const offcanvasElement = document.getElementById("sidebar-wrapper");
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        });
    });
});