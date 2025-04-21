// This script controls all the shop logic for the visual part

//Open and close the menu
document.addEventListener("DOMContentLoaded", () => {
    const Pedir = document.getElementsByClassName("PEDIR");
    const Menu = document.getElementById("Buy");
    const Buttons = document.getElementById("Options");
    const X = document.getElementById("x");

    Pedir[0].addEventListener("click", (event) => {
        Menu.classList.remove("none");
        Menu.classList.add("Buy");
        Buttons.classList.remove("Options");
        Buttons.classList.add("none");
    });

    X.addEventListener("click", (event) => {
        Menu.classList.add("BuyAnimation");
        setTimeout(() => {
            Menu.classList.remove("BuyAnimation"); 
            Menu.classList.remove("Buy");
            Menu.classList.add("none");
            Buttons.classList.remove("none");
            Buttons.classList.add("Options");
        }, 200);

    });

});

//Add or increment the quantity of the product
document.addEventListener("DOMContentLoaded", () => {
    const add = document.getElementById("+");
    const remove = document.getElementById("-");
    const quantity = document.getElementById("amountofproduct");
    let count = 1;
    quantity.value = count;


    add.addEventListener("click", (event) => {
        count++;
        quantity.value = count;
    });

    remove.addEventListener("click", (event) => {
        if (count > 1) {
            count--;
            quantity.value = count;
        }
    });
});