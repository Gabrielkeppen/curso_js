function calc(x1, x2, operator){
    
    return eval(`${x1} ${operator} ${x2}`)

}

let resultado = calc(4 ,4, "*")

console.log(resultado);


//arrow function
let calculator = (x1, x2, operator) => {
    
    return eval(`${x1} ${operator} ${x2}`)

}

let result = calculator(4 ,4, "+")

console.log(result);