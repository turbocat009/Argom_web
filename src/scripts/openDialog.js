document.addEventListener("DOMContentLoaded", () => {

    const openNota = document.getElementById("OpenNota");
    const openMap = document.getElementById("OpenMap");
    const openCookies = document.getElementById("OpenCookies");
    const closeNote = document.getElementById("closeNote");
    const closeMap = document.getElementById("closeMap");
    const closeCookies = document.getElementById("closeCookies");
    const NotaDialog = document.querySelector(".LegalNote");
    const MapDialog = document.querySelector(".MapWeb");
    const CookiesDialog = document.querySelector(".CookiesDialog");

    NotaDialog.addEventListener("click", onClickNota);
    MapDialog.addEventListener("click", onClickMap);
    CookiesDialog.addEventListener("click", onClickCookies);

    openNota.addEventListener("click", () => {
        NotaDialog.showModal();
    });

    openMap.addEventListener("click", () => {
        MapDialog.showModal();
    });
    closeNote.addEventListener("click", () => {
        NotaDialog.close();
    });
    closeMap.addEventListener("click", () => {
        MapDialog.close();
    });
    openCookies.addEventListener("click", () => {
        CookiesDialog.showModal();
    });
    closeCookies.addEventListener("click", () => {
        CookiesDialog.close();
    });




    function onClickNota(event) {
        if (event.target === NotaDialog) {
            NotaDialog.close();
        }
    }
    function onClickMap(event) {
        if (event.target === MapDialog) {
            MapDialog.close();
        }
    }
    function onClickCookies(event) {
        if (event.target === CookiesDialog) {
            CookiesDialog.close();
        }
    }

    const login = document.getElementById("login");
    login.addEventListener("click", () => {
        openDialog();
    });

    const logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
        alert("Has cerrado sesión.");
        location.reload();
    });
});