const navbarEL = document.querySelector(".navbar");
const bottomcontainerEL = document.querySelector(".bottom-container")
console.log(navbarEL.offsetHeight)
console.log(bottomcontainerEL.offsetTop)

window.addEventListener("scroll", () => {
    if (
        window.scrollY > bottomcontainerEL.offsetTop - navbarEL.offsetHeight - 50) {
        navbarEL.classList.add("active")
    } else {
        navbarEL.classList.remove("active")
    }
});