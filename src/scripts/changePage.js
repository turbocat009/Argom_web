document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("obj");

    const pages = {
        "RASCADORES": "rascadores",
        "JUNTAS DE VÁSTAGO": "juntasV",
        "JUNTAS DE PISTÓN": "juntasP",
        "ELEMENTOS DE GUIADO": "elementosG",
        "TÓRICAS Y AROS DE APOYO": "toricas",
        "RETENES": "retenes",
        "ROTATIVAS": "rotativas",
        "JUNTAS PARA RACORD Y BRIDA": "juntasR",
        "CAJAS": "cajas",
        "RÓTULAS": "rotulas",
        "FUELLES": "fuelles",
        "PERFILES Y PLANCHAS": "perfiles",
        "HERRAMIENTAS": "herramientas",
        "MECANIZACIONES ESPECIALES": "mecanizaciones",
    }

    select.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            const pageReference = pages[selectedValue];
            if (pageReference) {
                window.location.href = '/content/' + pageReference;
            }
        }
    }
    );

});