const menuBTN = document.querySelector(".menu-btn")
const links = document.querySelector(".links")

menuBTN.addEventListener("change", function () {
    if (this.checked) {
        links.style.maxHeight = "100vh";
    }
})
