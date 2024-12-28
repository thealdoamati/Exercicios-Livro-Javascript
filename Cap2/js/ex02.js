const frm = document.querySelector("form")
const rspName = document.querySelector(".outFilmeName")
const rspDuracao = document.querySelector(".outFilmeDuracao")

frm.addEventListener("submit", (e) => {
    const filmeName = frm.inFilmeName.value
    const filmeDuracaoNumber = Number(frm.inFilmeDuracao.value) / 60
    const filmeDuracaoHoras = Math.floor(filmeDuracaoNumber)
    const filmeDuracaoMinutos = (Number(frm.inFilmeDuracao.value)) % 60

    rspName.innerText = filmeName
    rspDuracao.innerText = `Horas: ${filmeDuracaoHoras}, minutos: ${filmeDuracaoMinutos}`


    e.preventDefault()
})