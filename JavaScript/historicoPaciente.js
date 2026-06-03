let consultas = [
    {
        tipoConsulta: "Tipo01",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2026-09-23",
    },
    {
        tipoConsulta: "Tipo02",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2020-10-01",
    },
    {
        tipoConsulta: "Tipo03",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2025-01-01",
    },
    {
        tipoConsulta: "Tipo04",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2014-01-01",
    },
    {
        tipoConsulta: "Tipo05",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2015-11-29",
    },
    {
        tipoConsulta: "Tipo06",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2008-07-01",
    },
    {
        tipoConsulta: "Tipo07",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "1992-07-20",
    }
]
let listaHistorico = window.document.getElementById("listaHistorico")
consultas.forEach(consulta =>{
    listaHistorico.innerHTML += `
        <tr>
            <td>${consulta.tipoConsulta}</td>
            <td>${consulta.nomeDentista}</td>
            <td>${consulta.especialidade}</td>
            <td>${consulta.dataConsulta}</td>
            <td><button>Expandir</button></td>
        </tr>
    `
})