document.addEventListener("DOMContentLoaded", function () {
    const nomorWhatsApp = "6283824430526";

    const nomorTampil = document.getElementById("nomorTampil");
    const tombolKontak = document.getElementById("tombolKontak");
    const footerText = document.getElementById("footerText");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Menampilkan nomor WhatsApp
    if (nomorTampil) {
        nomorTampil.textContent = "+62 838-2443-0526";
    }

    // Tombol WhatsApp utama
    if (tombolKontak) {
        tombolKontak.href = "https://wa.me/" + nomorWhatsApp;
        tombolKontak.target = "_blank";
        tombolKontak.rel = "noopener noreferrer";
    }

    // Tombol pemesanan produk
    document.querySelectorAll(".pesan").forEach(function (tombol) {
        tombol.addEventListener("click", function () {
            const namaProduk =
                tombol.dataset.produk || "Basreng UMKM-ENZEL";

            const pesan =
                "Halo UMKM-ENZEL! Saya ingin memesan " +
                namaProduk +
                " seharga Rp5.000. Apakah produknya masih tersedia?";

            const link =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(link, "_blank", "noopener,noreferrer");
        });
    });

    // Menu navigasi HP
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const terbuka = navMenu.classList.toggle("active");

            menuToggle.textContent = terbuka ? "×" : "☰";
            menuToggle.setAttribute(
                "aria-expanded",
                String(terbuka)
            );
            menuToggle.setAttribute(
                "aria-label",
                terbuka ? "Tutup menu" : "Buka menu"
            );
        });

        navMenu.querySelectorAll("a").forEach(function (tautan) {
            tautan.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Buka menu");
            });
        });
    }

    // Tahun otomatis di footer
    if (footerText) {
        footerText.textContent =
            "© " + new Date().getFullYear() +
            " UMKM-ENZEL. Semua hak dilindungi.";
    }

    // Periksa foto yang gagal dimuat
    document.querySelectorAll("img").forEach(function (gambar) {
        gambar.addEventListener("error", function () {
            console.error(
                "Foto gagal dimuat:",
                gambar.getAttribute("src")
            );
        });
    });
});
