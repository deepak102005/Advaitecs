const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const mobileOverlay = document.getElementById("mobileOverlay");

const subMenu = document.getElementById("subMenu");
const subMenuTitle = document.getElementById("subMenuTitle");
const subMenuList = document.getElementById("subMenuList");
const subMenuBack = document.getElementById("subMenuBack");

/* Open / close left mobile menu */
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    mobileOverlay.classList.toggle("show");
});

/* Overlay closes everything */
mobileOverlay.addEventListener("click", () => {
    navLinks.classList.remove("show");
    subMenu.classList.remove("show");
    mobileOverlay.classList.remove("show");
});

/* Detect folder depth */
function getDepth() {
    const path = window.location.pathname;

    if (path.includes("/programs/")) return "../";      // inside programs folder
    if (path.includes("/workshops/")) return "../";     // inside workshops folder
    return "";                                          // root pages
}

/* Mobile submenu */
document.querySelectorAll(".mobile-parent").forEach(item => {

    item.addEventListener("click", () => {

        if (window.innerWidth > 1200) return;

        const depth = getDepth();
        const menuType = item.dataset.menu;
        let items = [];

        if (menuType === "programs") {
            subMenuTitle.textContent = "Programs";
            items = [
                ["AI Training", depth + "programs/ai-training.html"],
                ["Cloud Technologies", depth + "programs/cloud-technologies.html"],
                ["Cyber Security", depth + "programs/cyber-security.html"]
            ];
        }

        if (menuType === "workshops") {
            subMenuTitle.textContent = "Workshops";
            items = [
                ["Schools", depth + "workshops/schools.html"],
                ["Professional", depth + "workshops/professional.html"]
            ];
        }

        // Insert items
        subMenuList.innerHTML = "";
        items.forEach(([label, link]) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${link}">${label}</a>`;
            subMenuList.appendChild(li);
        });

        subMenu.classList.add("show");
    });
});

/* Back button */
subMenuBack.addEventListener("click", () => {
    subMenu.classList.remove("show");
});
