let doenca = window.document.getElementById("doencas")
let alergias = window.document.getElementById("alergias")
doenca.style.display = "none"
alergias.style.display = "none"
let tipoAlerg = window.document.getElementById("tipoAlerg")
tipoAlerg.addEventListener("change", ()=>{
    if (tipoAlerg.value == "Alimentos Relevantes") {
        alergias.style.display = "flex"
        alergias.style.flexDirection = "column"
        if (alergias.style.display === "flex") {
            window.alert("Da para testar...")
        }
    }else{
        alergias.style.display = "none"
    }
})
let tipoDoenca = window.document.getElementById("tipoDoenca")
tipoDoenca.addEventListener("change", ()=>{
    if (tipoDoenca.value == "Outra") {
        doenca.style.display = "flex"
        doenca.style.flexDirection = "column"
        if (doenca.style.display == "flex") {
            window.alert("Funciono...")
        }
    }else{
        doenca.style.display = "none"
    }
})
let containerMedico = window.document.getElementById("containerMedico")
informacoesMedicasGerais.style.display = "none"
let cadastrar = window.document.getElementById("cadastrar").addEventListener("click", ()=>{
    informacoesMedicasGerais.style.display = "flex"
})
let formDeInformacoesMedicasGerais = window.document.getElementById("formDeInformacoesMedicasGerais").addEventListener("submit", (e)=>{
    e.preventDefault()
    informacoesMedicasGerais.style.display = "none"
})