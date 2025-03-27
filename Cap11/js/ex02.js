const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240;
const reservadas = [];

window.addEventListener("load", () => {

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

    for (let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        imgStatus.src = ocupadas.includes(i.toString()) ? 'img/ocupada.png' : 'img/disponivel.png';
        imgStatus.className = "poltrona";
        imgStatus.style = "width: 20px; height: 20px";
        const figureCap = document.createElement("figcaption");

        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";
        const num = document.createTextNode(`[${zeros}${i}]`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if (i % 24 === 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        if (i % 24 === 0) dvPalco.appendChild(document.createElement("br"));
    }
});

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value)

    if (poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válido")
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : []

    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada...`)
        frm.inPoltrona.value = ""
        frm.inPoltrona.focus()
        return
    }

    //captura img no html, filha de divPalco e -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1]

    imgPoltrona.src = "img/reservada.png"

    reservadas.push(poltrona)

    frm.inPoltrona.value = ""
    frm.inPoltrona.focus()
});