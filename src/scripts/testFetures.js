// This file contains code for testing features that will be used when logging in
// now that there is a not login system

// Open the Debug menu
document.addEventListener("DOMContentLoaded", () => {
    const openDebug = document.getElementById("DebugButton");
    const closeNote = document.getElementById("closeDebug");
    const DebugDialog = document.querySelector(".DebugDialog");

    if (openDebug) {
        openDebug.addEventListener("click", () => {
            DebugDialog.showModal();
        });
    }
    if (closeNote) {        
        closeNote.addEventListener("click", () => {
            DebugDialog.close();
        });
    }
});

// Login or not login
document.addEventListener("DOMContentLoaded", () => {
    let logedIn = false;
    const login = document.getElementById("Loginin");
    const loginbutton = document.querySelector("#login");
    const ContextMenu = document.querySelector("#LogedInMenu");
    const ContextMenuMobile = document.querySelector("#LogedInMenuMobile");
    const PedirDesktop = document.getElementById("Pedir");
    const Buttons = document.getElementById("Options");


    if (login) {
        login.checked = logedIn;
        login.addEventListener("click", () => {
            if (logedIn) {
                logedIn = false;
                login.checked = logedIn;
                if (loginbutton) {
                    loginbutton.classList.remove("none");
                }
                if (ContextMenu && ContextMenuMobile) {
                    ContextMenu.classList.add("none");
                    ContextMenuMobile.classList.add("none");
                }
                if (PedirDesktop) {
                    PedirDesktop.classList.add("none");
                }
                if (Buttons) {
                    Buttons.classList.add("DesktopOnly");
                }
            } else {
                logedIn = true;
                login.checked = logedIn;
                if (loginbutton) {
                    loginbutton.classList.add("none");
                }
                if (ContextMenu && ContextMenuMobile) {
                    ContextMenu.classList.remove("none");
                    ContextMenuMobile.classList.remove("none");
                }
                if (PedirDesktop) {
                    PedirDesktop.classList.remove("none");
                }
                if (Buttons) {
                    Buttons.classList.remove("DesktopOnly");
                }
            }
        });
    }        
});

