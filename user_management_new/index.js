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

function addLine(dataUser){

    document.getElementById("table-users").appendChild(tr).innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
    `;
}

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();

    var fields = document.querySelectorAll("#form-user-create [name]");
    var user = {};

    fields.forEach(function(field, index)   {

        if (field.name == "gender"){

            if (field.checked) {

                user[field.name] = field.value

            };
            
        } else {

            user[field.name] = field.value

        }
    });

    var objectUser = new User(
        user.name,
        user.gender,
        user.birth,
        user.country,
        user.email,
        user.password,
        user.photo,
        user.admin
    );

    addLine(objectUser);

});