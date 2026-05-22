// Mengambil elemen dari HTML
const greetingElement = document.getElementById('greetingText');
const buttonElement = document.getElementById('actionButton');

// Mengubah teks awal secara dinamis menggunakan JavaScript
greetingElement.innerText = "Hello World! 🌍";

// Menambahkan interaktivitas saat tombol diklik
buttonElement.addEventListener('click', () => {
    greetingElement.style.color = "#28a745"; // Mengubah warna teks menjadi hijau
    greetingElement.innerText = "Tombol berhasil diklik! 🎉";
});