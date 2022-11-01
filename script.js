var data = [
    "Ilmu Komputer (Computer Science)",
    "Informatika (Informatics)",
    "Sistem Komputer (Computer System)",
    "Komputerisasi Akuntansi (Computerized Accounting)",
    "Rekayasa Perangkat Lunak (Software Engineering)",
    "Sistem Informasi",
];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Jurusan</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button type='button' class='btn-edit' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button type='button' class='btn-hapus' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</td></tr>";
    }
}

function tambah() {
    var input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
}
function edit(id) {
    var baru = prompt("Edit Jurusan", data[id]);
    data[id] = baru;
    tampil();
}
function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();
