document.addEventListener("DOMContentLoaded", () => {
    const openDebug = document.getElementById("DebugButton");
    const closeNote = document.getElementById("closeDebug");
    const DebugDialog = document.querySelector(".DebugDialog");

    openDebug.addEventListener("click", () => {
        DebugDialog.showModal();
    });
    closeNote.addEventListener("click", () => {
        DebugDialog.close();
    });

    let logedIn = false;
    const login = document.getElementById("Loginin");
    const loginbutton = document.querySelector("#login");
    const ContextMenu = document.querySelector("#LogedInMenu");
    const ContextMenuMobile = document.querySelector("#LogedInMenuMobile");
    if (login) {
        login.checked = logedIn;
        login.addEventListener("click", () => {
            console.log(logedIn);
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
            }
        });
    }        
});

