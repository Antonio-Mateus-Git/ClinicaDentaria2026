let dadosOdontologicos = window.document.getElementById("dadosOdontologicos")
dadosOdontologicos.style.display = "none"
let button = window.document.getElementById("buttonOdontologico").addEventListener("click", ()=>{
    dadosOdontologicos.style.display = "flex"
})
let formularioOdontologico = window.document.getElementById("formularioOdontologico").addEventListener("click", (e)=>{
    e.pressure()
    dadosOdontologicos.style.display = "none"
})