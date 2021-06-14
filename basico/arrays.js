let carros = ["WRX", "Smart conversivel", 10, true, new Date(), function(){}];

console.log(carros[1])

//para objeto encontrado dentro de "carros" mostrar em orderm seu index e valor
carros.forEach(function(value, index){

    console.log(index, value);

})

let meuArray = ["banana","maça","uva","cereja","goiaba"]

meuArray.forEach(function(value,index){

    console.log(index, value);

})