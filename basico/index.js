//escrevendo no console
var olaMundo = ("ola mundo")
console.log(olaMundo);


// determinando constantes e perguntando igualdades
let a = 10 
const b = "10"
console.log(a == b && typeof a == 'string')


//fazer o console identificar constante
let cor = ""

if (cor === "verde"){

    console.log("siga");

}
    else if (cor === "amarelo") {

        console.log("atenção")
    }

    else if (cor === "vermelho") {

        console.log("pare")

    }
    else {
        console.log("não sei")
    }


//segundo caminho para executar a mesma coisa
switch (cor) {

    case "verde":
        console.log('siga');
        break;

    case "amarelo":
        console.log('atenção')
        break;

    case "vermelho":
        console.log('pare')

    default:
        console.log("não sei");

}