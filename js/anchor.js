window.addEventListener("DOMContentLoaded", () => {
    document.body.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });
});