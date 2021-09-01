let numeroDeAlunos = 20;
let listaDeAlunos = ["Hugo", "Katia", "Julia", "Fabio"]
let contador = 0

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    // console.log(contador);

    if(contador === 0) {
        console.log("Esse número " + contador + " é o ZERO!!!")
    } else if (contador % 2 == 0) {
        console.log("Número " + contador + " é PAR!!!")
    } else {
        console.log("Número " + contador + " é ÍMPAR!!!")
    }
}

for (const aluno of listaDeAlunos) {
    console.log(aluno);
}

listaDeAlunos.forEach(element => {
    console.log(element)
});

while (contador <= numeroDeAlunos) {
    if (contador === 0){
        console.log("Este número é o ZERO")
    } else if (contador %2 == 1) {
        console.log("O número " + contador + " é ímpar")
    } else {
        console.log ("O número " + contador + " é par")
    }
    contador++;
    
}

do {
    if (contador === 0){
        console.log("Este número é o ZERO")
    } else if (contador %2 == 1) {
        console.log("O número " + contador + " é ímpar")
    } else {
        console.log ("O número " + contador + " é par")
    }
    contador++;
    
} while (contador <= numeroDeAlunos);