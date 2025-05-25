document.addEventListener("DOMContentLoaded", () => {
    const asideCart = document.querySelector('.cartDialog')
    const test = document.getElementById('closeCartXD')

    const closeCart = document.getElementById('closeCart')
    const openCart = document.getElementById('openCart')

    closeCart.addEventListener('click', () => {
        asideCart.classList.add('closingCart')
        setTimeout(() => {
            asideCart.classList.add('none')
            asideCart.classList.remove('closingCart')
        }, 250);
    });

    openCart.addEventListener('click', () => {
        asideCart.classList.remove('none')
    });

    test.addEventListener('click', () =>{
        asideCart.classList.add('closingCart')
        setTimeout(() => {
            asideCart.classList.add('none')
            asideCart.classList.remove('closingCart')
        }, 250);
    })

    asideCart.addEventListener('click', onClick);

    function onClick(event) {
        if (event.target === asideCart) {
            asideCart.classList.add('none')
        }
    }
});