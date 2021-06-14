//criando variavel atribuida a um id 
var nome = document.querySelector("#exampleInputName");

nome.value = "Gabriel"

//definindo todas variaveis 
var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

//usando o foreach para todas variaveis
var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if (field.nome == "gender"){

        if (field.checked) {

            console.log("sim", field);

        };
        
    } else {

        console.log("nao")

    }

    //console.log(field);

});