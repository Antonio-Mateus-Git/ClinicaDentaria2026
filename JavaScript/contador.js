let H = window.document.getElementById("h")
let M = window.document.getElementById("m")
let S = window.document.getElementById("s")

if(!localStorage.getItem("hora")){
    let horaCompleta = {
        hora: 1,
        minuto: 30,
        segundo: 0
    }
    localStorage.setItem("hora", JSON.stringify(horaCompleta))
}
let contador = setInterval(() => {
    let horaCompleta = JSON.parse(localStorage.getItem("hora") ) || []
    H.innerHTML = String(horaCompleta.hora).padStart(2, "0")
    M.innerHTML = String(horaCompleta.minuto).padStart(2, "0")
    S.innerHTML = String(horaCompleta.segundo).padStart(2, "0")
    if (horaCompleta.hora === 0 && horaCompleta.minuto === 0 && horaCompleta.segundo === 0) {
        clearInterval(contador)
        localStorage.removeItem("hora")
        alert("O seu tempo de sessão terminou, inicie uma nova por questão de segurança.")
        return
    }
    if (horaCompleta.segundo > 0) {
        horaCompleta.segundo--
        
    }
    else {
        horaCompleta.segundo = 59
        if (horaCompleta.minuto > 0) {
            horaCompleta.minuto--
        }else{
            horaCompleta.minuto = 59
            if (horaCompleta.hora > 0) {
                horaCompleta.hora--
            }
        }
    }
    localStorage.setItem("hora", JSON.stringify(horaCompleta))

    
}, 1000);