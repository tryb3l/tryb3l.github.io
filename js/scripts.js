document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.offcanvas a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close the offcanvas after clicking a link
            var offcanvasElement = document.getElementById('sidebar-wrapper');
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) { // Check if the offcanvas instance exists
                offcanvas.hide();
            }
        });
    });
});