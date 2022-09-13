// By class name
const loginator = document.querySelector('#loginator');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

if (loginator){
    loginator.addEventListener('submit',validarUsuario);
}


function validarUsuario(event){
    event.preventDefault();
    console.log("email: " + email.value + "password: "+ password.value);
    if (email.value == "1" && password.value == "1"){
        console.log("passwd correcto");
    }else{
        console.log("passwd incorrecto");
    }
    
}