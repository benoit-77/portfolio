let navbar = document.getElementById("nav");
let navOffset = navbar.offsetTop;
window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? 
        navbar.classList.add("fixed-nav") : 
        navbar.classList.remove("fixed-nav")
});