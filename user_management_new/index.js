//criando variavel atribuida a um id 

/*var nome = document.querySelector("#exampleInputName");

nome.value = "Gabriel" */

//definindo todas variaveis 
/*
var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#form-user-create [name=gender]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");
*/


//usando o foreach para todas variaveis ... estamos fzd a mesma coisa que em cima, mas de um jeito menos trabalhoso

/*
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

fields.forEach(function(field, index){

    if (field.name == "gender"){

        if (field.checked) {

            user[field.name] = field.value

        };
        
    } else {

        user[field.name] = field.value

    }
});

console.log(user)
*/

//identificação de um click em um botão do site
/*
document.querySelectorAll("button").forEach(function(){

    this.addEventListener("click",function(){

        console.log("clicou");

    })
});
*/
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();

    fields.forEach(function(field, index)   {

        if (field.name == "gender"){

            if (field.checked) {

                user[field.name] = field.value

            };
            
        } else {

            user[field.name] = field.value

        }
    });

    console.log(user);

});