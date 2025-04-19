document.addEventListener("DOMContentLoaded", () => {
    const article = document.getElementsByClassName("product");
    const options = document.getElementById("Options");
    let clicked = false;

    article[0].addEventListener("click", (event) => {
        if (clicked) {
            options.classList.add("DesktopOnly");
            clicked = false;
        } else {
            options.classList.remove("DesktopOnly");
            clicked = true;
        }
    });

});