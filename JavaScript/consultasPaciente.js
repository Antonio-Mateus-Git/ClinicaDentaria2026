let consultas = [
    {
        tipoConsulta: "Tipo01",
        nomeDentista: "«« Indisponivel »»",
        hora: "10:30",
        dataConsulta: "2026-09-23",
    },
    {
        tipoConsulta: "Tipo02",
        nomeDentista: "«« Indisponivel »»",
        hora: "12:00",
        dataConsulta: "2020-10-01",
    },
    {
        tipoConsulta: "Tipo03",
        nomeDentista: "«« Indisponivel »»",
        hora: "07:15",
        dataConsulta: "2025-01-01",
    },
    {
        tipoConsulta: "Tipo04",
        nomeDentista: "«« Indisponivel »»",
        hora: "08:30",
        dataConsulta: "2014-01-01",
    },
    {
        tipoConsulta: "Tipo05",
        nomeDentista: "«« Indisponivel »»",
        hora: "15:20",
        dataConsulta: "2015-11-29",
    },
    {
        tipoConsulta: "Tipo06",
        nomeDentista: "«« Indisponivel »»",
        hora: "18:05",
        dataConsulta: "2008-07-01",
    },
    {
        tipoConsulta: "Tipo07",
        nomeDentista: "«« Indisponivel »»",
        hora: "16:45",
        dataConsulta: "1992-07-20",
    }
]

// A consulta de um paciênte só pode ser marcada no intervalo de 15 à 20 dias
// Duas ou mais consultas de um padiente não podem ser agendadas ou estar marcadas para a mesma data

let listaHistorico = window.document.getElementById("listaHistorico")
consultas.forEach(consulta =>{
    listaHistorico.innerHTML += `
        <tr>
            <td>${consulta.tipoConsulta}</td>
            <td>${consulta.nomeDentista}</td>
            <td>${consulta.hora}</td>
            <td>${consulta.dataConsulta}</td>
            <td><button class=idAcao>Expandir</button></td>
        </tr>
    `
})