document.addEventListener("DOMContentLoaded", () => {
    //Header Menu
    const headerButton = document.getElementById("Menu");
    const headerButtonClosed = document.getElementById("MenuC");
    const headerMenu = document.getElementById("LogedInMenu");
    let headerMenuOpen = false;
    headerButton.addEventListener("click", () => {
        if (headerMenuOpen) {
            headerMenu.classList.remove("LogedInMenuOpen");
            headerMenu.classList.add("LogedInMenuClosed");
            headerButton.className = "MenuButton";
            headerButtonClosed.className = "none";
            headerMenuOpen = false;
        } 
        else {
            headerMenu.classList.remove("LogedInMenuClosed")
            headerMenu.classList.add("LogedInMenuOpen");
            headerButton.className = "none";
            headerButtonClosed.className = "MenuButton";
            headerMenuOpen = true;
        }
    });
    headerButtonClosed.addEventListener("click", () => {
        if (headerMenuOpen) {
            headerMenu.classList.remove("LogedInMenuOpen");
            headerMenu.classList.add("LogedInMenuClosed");
            headerButton.className = "MenuButton";
            headerButtonClosed.className = "none";
            headerMenuOpen = false;
        }
        else {
            headerMenu.classList.remove("LogedInMenuClosed")
            headerMenu.classList.add("LogedInMenuOpen");
            headerButton.className = "none";
            headerButtonClosed.className = "MenuButton";
            headerMenuOpen = true;
        }
    });
    header
});
