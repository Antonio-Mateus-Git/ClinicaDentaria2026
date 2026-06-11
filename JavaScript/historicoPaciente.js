let consultas = [
    {
        idConsulta: 1,
        tipoConsulta: "Tipo01",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2026-09-23",
    },
    {
        idConsulta: 2,
        tipoConsulta: "Tipo02",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2020-10-01",
    },
    {
        
        idConsulta: 3,
        tipoConsulta: "Tipo03",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2025-01-01",
    },
    {
        idConsulta: 4,
        tipoConsulta: "Tipo04",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2014-01-01",
    },
    {
        idConsulta: 5,
        tipoConsulta: "Tipo05",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2015-11-29",
    },
    {
        idConsulta: 6,
        tipoConsulta: "Tipo06",
        nomeDentista: "Dentista",
        especialidade: "Especialidade",
        dataConsulta: "2008-07-01",
    },
    {
        idConsulta: 7,
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
            <td><button class=idAcao data-id=${consulta.idConsulta}>Expandir</button></td>
        </tr>
    `
})