class UserController {

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

        this.formEl.addEventListener("submit", event => {

            event.preventDefault();

            let values = this.getValues();

            this.getPhoto().then(

                (content) => {

                    values.photo = content;
                    this.addLine(values);

                },

                (e) => {

                    console.error(e);

                }

            );
        
        });

    };

    getPhoto(){

        return new Promise ((resolve, reject) => {

            let fileReader = new FileReader();

            //usando operador spread
            let elements = [...this.formEl.elements].filter(item=>{
    
                if (item.name === 'photo') {
                    return item;
                };
    
            });
    
            let file = elements[0].files[0];

            console.log(file)
    
            fileReader.onload = ()=>{
    
                resolve(fileReader.result)
    
            };

            fileReader.onerror = (e)=>{

                reject(e);

            };
    
            fileReader.readAsDataURL(file);
    
        });

    };



    getValues(){

        let user = {};

        var count = this.formEl.elements.length

        for(var i = 0 ; i <= count; i++){

            let field = this.formEl.elements[i]

            if (typeof field != "undefined") {

            if (field.name == "gender"){
    
                if (field.checked) {
    
                    user[field.name] = field.value
    
                };
                
            } else {
    
                user[field.name] = field.value
    
            }

        }
        
        }


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

        return objectUser

    }

    addLine(dataUser){

        this.tableEl.innerHTML = `
            <tr>
                <td><img src= ${dataUser.photo} alt="User Image" class="img-circle img-sm"></td>
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

    };

}