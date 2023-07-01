// Navbar Start
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = "") :
                (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();
//Navbar End

//Text Jalan Awal
const typedText = document.getElementById('typed-text');
const text = "Welcome To BelajarKuy";
let index = 0;
let typingInterval;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
    } else {
        clearInterval(typingInterval);
        typedText.innerHTML += '<span class="cursor">|</span>';
        setTimeout(restartTyping, 5000);
    }
}

function restartTyping() {
    typedText.textContent = '';
    index = 0;
    typingInterval = setInterval(type, 100);
}

typingInterval = setInterval(type, 100);


// Funsi tombol
function goToPage(url) {
    window.location.href = url;
}

// belajar halaman
$('.progres-per').each(function () {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
        animatedValue: 0
    }).animate({
        animatedValue: per
    }, {
        duration: 1000,
        step: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});

// Halaman Soal
function selectAnswer(element) {
    var answers = document.getElementsByClassName("answer");
    for (var i = 0; i < answers.length; i++) {
        answers[i].classList.remove("selected");
    }
    element.classList.add("selected");
}

// Halaman Login
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Halaman diskusi
function showFormAndRedirect() {
    showForm();
    window.location.href = "../login/login.html";
}
// Fungsi untuk menampilkan form
function showForm() {
    var form = document.getElementById('floating-form');
    form.style.display = 'block';
}

// Fungsi untuk menyembunyikan form
function hideForm() {
    var form = document.getElementById('floating-form');
    form.style.display = 'none';
}

// Fungsi untuk menutup form
function closeForm() {
    var form = document.getElementById('floating-form');
    form.style.display = 'none';
}

// Mengatur event listener pada tombol "Tambah Pertanyaan"
var addButton = document.querySelector('.add-question-button');
addButton.addEventListener('click', showForm);

// Mengatur event listener pada tombol "Tutup"
var closeButton = document.getElementById('close-form');
closeButton.addEventListener('click', closeForm);


// Fungsi pengecekan apakah admin yang login
function performLogin() {
    // Mendapatkan nilai username dan password dari input
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Melakukan pengecekan login (misalnya, menggunakan objek pengguna)
    var users = [{
            username: "admin",
            password: "admin123",
            role: "admin"
        },
        {
            username: "user1",
            password: "user123",
            role: "user"
        },
        // Tambahkan pengguna lain di sini jika perlu
    ];

    var loggedInUser = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (loggedInUser) {
        // Jika login berhasil, arahkan ke halaman yang sesuai dengan peran pengguna
        if (loggedInUser.role === "admin") {
            goToPage("../admin/index.html");
        } else {
            goToPage("../user/index.html");
        }
    } else {
        // Jika login gagal, tampilkan pesan error atau lakukan tindakan lain
        alert("Username atau password salah!");
    }
}

function goToPage(url) {
    // Mengarahkan ke halaman yang ditentukan
    window.location.href = url;
}


