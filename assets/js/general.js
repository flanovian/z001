document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memuat HTML dari file eksternal
    function loadHTML(url, elementSelector) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(elementSelector).innerHTML = data;
                setActiveNavLink(); // Panggil setelah HTML dimuat
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Fungsi untuk menetapkan link navbar yang aktif berdasarkan URL saat ini
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split("/").pop(); // Dapatkan nama file dari href
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Panggil fungsi loadHTML untuk memuat header dan footer
    loadHTML('partials/header.html', 'header');
    loadHTML('partials/footer.html', 'footer');
});


