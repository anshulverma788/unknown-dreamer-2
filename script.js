const menuBare = document.querySelector(".menu-bare");
const icom = document.querySelector("#icon");

icon.onclick = function () {
    menuBare.classList.toggle("open");
    if (menuBare.classList.contains("open")) {
        menuBare.style.display = "block";
        icom.classList.add("fa-xmark")
        icom.classList.remove("fa-bars")
    } else {
        menuBare.style.display = "none";
        icom.classList.add("fa-bars")
        icom.classList.remove("fa-xmark")
    }
}


// login code
function openLoginPage() {
    window.location.href = "sindex.html";
}
