window.onload = () => {
    document
        .getElementById("dataForm")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("nama").value;
            const age = document.getElementById("umur").value;

            if (/\d/.test(name)) {
                alert("Nama Harus Dengan Huruf");
                return;
            }

            if (age <= 12 ) {
                alert("Umur harus diatas 12 tahun");
                return;
            }

            if (age >= 80 ) {
                alert("Umur harus dibawah 80 tahun");
                return;
            }

            // Ganti URL dengan URL API yang sesuai
            const apiUrl = "http://localhost:3001/api/user";

            // Menggunakan Fetch API untuk mengirim data ke API
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, age }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert('Berhasil Mengupload Data');
                    // Manipulasi respons dari API sesuai kebutuhan Anda
                    window.open("/", "_self"); // untuk kembali ke awal / list data
                })
                .catch((error) => {
                    console.error("Terjadi kesalahan:", error);
                    alert("Terjadi kesalahan saat mengirim data ke API.");
                });
        });
};
