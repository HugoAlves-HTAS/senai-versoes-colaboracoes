let dataAtual = new Date();
let nome = "Hugo";

console.log("Insira seu nome:")

console.log(nome + ", insira a data do evento:")

let dataEvento = new Date(2021, 11, 09)

if (dataEvento >= dataAtual) {
    console.log("Data inserida com sucesso!")
    console.log("Insira sua data de nascimento:")
} else {
    console.log("Data inválida! Insira a data novamente:");
}

let idadeCadastrada = 32

if (idadeCadastrada < 18) {
    console.log("Idade não permitida! Insira a idade novamente:")
} else {
    console.log("Idade Válida! Aguarde o processamento da sua vaga!")
}

let listaDeParticipantes = ["José", "Maria", "Hugo", "Katia", "Julia", "Fabio"]

if (listaDeParticipantes.length < 100){
    console.log("Parabéns " + nome + " seu cadastro foi efetuado com sucesso!")
} else {
    console.log("Infelizmente seu cadastro não pode ser efetuado! A capacidade máxima de participantes foi atingida!")
}
