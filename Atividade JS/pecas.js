const listaDePecas = ["Peça 1", "Peça 2", "Peça 3"]

console.log(listaDePecas)

if  (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças!")
} else {
    console.log("Não é possível cadastrar mais peças!")
}

var peso = 500;

if (peso >= 100) {
    console.log("Peso adequeado!")
} else {
    console.log("Peso insuficiente!")
}

let nomePeca = "Peça 4";

if (nomePeca.length > 3) {
    console.log("Cadastro Permitido!")
} else if (nomePeca.length == 0) {
    console.log("Inserir valor válido!")
} else {
    console.log("Nome de peça inválido! Deve possuir mais de 3 caracteres!")
}

switch (nomePeca.length) {
    case 0:
        console.log("Nome inválido!")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres!")
        break;            

    default:
        console.log("Nome adequado!")
        break;
}