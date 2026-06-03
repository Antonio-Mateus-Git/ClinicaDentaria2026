let pacientes = [], usuarios = []
let paciente = {
    nomeCompleto: "",
    email: "",
    genero: "",
    dataNascimento: "",
    telefone: "",
    morada: ""
}
let usuario = {
    email: "",
    tipoUsuario: "",
    senha: "",
}
let formulario = window.document.getElementById("formulario").addEventListener("submit", (event)=>{
    event.preventDefault();
    if(nomeCompleto.value.length <= 7){
        window.alert("Erro: Nome completo do paciente inválido, mín. 8 caracteres!")
        return
    }
    if(email.value.length === 0 || !email.value.includes("@gmail.com")){
        window.alert("Erro: E-mail inválido!")
        return
    }
    if(genero.value.length === 0){
        window.alert("Erro: Escolha o seu genero!")
        return
    }
    
    if(dataNascimento.value === ""){
        window.alert("Erro: Informe a sua data de nascimento")
        return
    }
    let [ano, mes, dia] = dataNascimento.value.split("-")
    let anoAtual = new Date().getFullYear()
    let idade = Number.parseInt(anoAtual) - Number.parseInt(ano)
    if (ano > anoAtual) {
        window.alert("Erro: informe uma ano de nascimento valido!")
        return
    }
    if (idade <= 17) {
        window.alert("Erro: O cadastro de menores é feito presencialmente na clínica!")
        return
    }
    if(telefone.value.length <= 8 || !Number(telefone.value)){
        window.alert("Erro: Numero de telefone inválido!")
        return
    }
    if(morada.value.length <= 5){
        window.alert("Erro: Morada inválido, min. 5 caracteres!")
        return
    }
    if(senha.value.length <= 7){
        window.alert("Erro: Senha inválida, mín. 8 caracteres!")
        return
    }
    if(senha.value != senhaConf.value){
        window.alert("Erro: Senha de confirmacao inválida")
        return
    }
    if(!window.localStorage.getItem("Paciêntes") && !window.localStorage.getItem("Usuários")){

        /* Dados do paciente */

        paciente.nomeCompleto = nomeCompleto.value
        paciente.email = email.value
        paciente.genero = genero.value
        paciente.dataNascimento = dataNascimento.value
        paciente.telefone = telefone.value
        paciente.morada = morada.value

        /* Dados do usuario para acesso */

        usuario.email = email.value
        usuario.tipoUsuario = tipoUsuario.value
        usuario.senha = senha.value

        /* Adicionar ao array */

        usuarios.push(usuario)
        pacientes.push(paciente)

        /* Ver resultados no console do navegador */

        console.log(paciente);
        console.log(pacientes);
        console.log(usuario)
        console.log(usuarios);
        
        /* ADICIONAR AO LOCALSTORANGE */

        window.localStorage.setItem("Paciêntes", JSON.stringify(pacientes))
        window.localStorage.setItem("Usuários", JSON.stringify(usuarios))
    }
    /* Dados do paciente */

    paciente.nomeCompleto = nomeCompleto.value
    paciente.email = email.value
    paciente.genero = genero.value
    paciente.dataNascimento = dataNascimento.value
    paciente.telefone = telefone.value
    paciente.morada = morada.value

    /* Dados do usuario para acesso */

    usuario.email = email.value
    usuario.tipoUsuario = tipoUsuario.value
    usuario.senha = senha.value

    /* Pegar os dados do localStorage: Paciêntes e Usuários */

    pacientes = JSON.parse(window.localStorage.getItem("Paciêntes")) || []
    usuarios = JSON.parse(window.localStorage.getItem("Usuários")) || []

    /* verificar se o usuario já está cadastrado */

    usuarios.forEach(usuario => {
        
    });

    /* Adicionar ao array */

    usuarios.push(usuario)
    pacientes.push(paciente)

    /* Reescrever os dados no localStorange */
    
    window.localStorage.setItem("Paciêntes", JSON.stringify(pacientes))
    window.localStorage.setItem("Usuários", JSON.stringify(usuarios))
});