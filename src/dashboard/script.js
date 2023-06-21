// Halaman Dashboard
$(document).ready(function () {
    $(".xp-menubar").on('click', function () {
        $("#sidebar").toggleClass('active');
        $("#content").toggleClass('active');
    });

    $('.xp-menubar,.body-overlay').on('click', function () {
        $("#sidebar,.body-overlay").toggleClass('show-nav');
    });

});

// Line Chart (Registered Users)
const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Registered Users',
        data: [100, 150, 200, 250, 300],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
    }]
};

const lineChartElement = document.getElementById('line-chart');
new Chart(lineChartElement, {
    type: 'line',
    data: lineChartData
});

// Mixed Chart (Total Points)
const mixedChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Total Points',
        data: [1000, 1200, 1500, 1800, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        type: 'line'
    }]
};

const mixedChartElement = document.getElementById('mixed-chart');
new Chart(mixedChartElement, {
    type: 'line',
    data: mixedChartData
});

// Line Chart (Certified Users)
const certifiedLineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
        label: 'Certified Users',
        data: [50, 80, 100, 120, 150],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false
    }]
};

const certifiedLineChartElement = document.getElementById('certified-line-chart');
new Chart(certifiedLineChartElement, {
    type: 'line',
    data: certifiedLineChartData
});

// Pie Chart (Materials)
const pieChartData = {
    labels: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Lainnya'],
    datasets: [{
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 206, 86, 0.7)', 'rgba(153, 102, 255, 0.7)']
    }]
};

const pieChartElement = document.getElementById('pie-chart');
new Chart(pieChartElement, {
    type: 'pie',
    data: pieChartData
});

// Fungsi halaman dashboard admin
// Fungsi untuk membuka modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fungsi untuk menambahkan konten
function createContent() {
    var title = document.getElementById("content-title").value;
    var category = document.getElementById("content-category").value;

    var table = document.getElementById("content-table");
    var row = table.insertRow(-1);
    var titleCell = row.insertCell(0);
    var categoryCell = row.insertCell(1);
    var actionCell = row.insertCell(2);

    titleCell.innerHTML = title;
    categoryCell.innerHTML = category;
    actionCell.innerHTML = '<button onclick="editContent(this)">Edit</button> <button onclick="deleteContent(this)">Hapus</button>';

    closeModal('create-content-modal');
}

// Fungsi untuk mengedit konten
function editContent(button) {
    var row = button.parentNode.parentNode;
    var titleCell = row.cells[0];
    var categoryCell = row.cells[1];

    // Tampilkan data dalam modal untuk diedit
    document.getElementById("content-title").value = titleCell.innerHTML;
    document.getElementById("content-category").value = categoryCell.innerHTML;

    // Hapus baris dari tabel
    row.parentNode.removeChild(row);

    openModal('create-content-modal');
}

// Fungsi untuk menghapus konten
function deleteContent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Fungsi untuk menambahkan pengguna
function createUser() {
    var name = document.getElementById("user-name").value;
    var email = document.getElementById("user-email").value;
    var role = document.getElementById("user-role").value;

    var table = document.getElementById("user-table");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var roleCell = row.insertCell(2);
    var actionCell = row.insertCell(3);

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    roleCell.innerHTML = role;
    actionCell.innerHTML = '<button onclick="editUser(this)">Edit</button> <button onclick="deleteUser(this)">Hapus</button>';

    closeModal('create-user-modal');
}

// Fungsi untuk mengedit pengguna
function editUser(button) {
    var row = button.parentNode.parentNode;
    var nameCell = row.cells[0];
    var emailCell = row.cells[1];
    var roleCell = row.cells[2];

    // Tampilkan data dalam modal untuk diedit
    document.getElementById("user-name").value = nameCell.innerHTML;
    document.getElementById("user-email").value = emailCell.innerHTML;
    document.getElementById("user-role").value = roleCell.innerHTML;

    // Hapus baris dari tabel
    row.parentNode.removeChild(row);

    openModal('create-user-modal');
}

// Fungsi untuk menghapus pengguna
function deleteUser(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
});

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});