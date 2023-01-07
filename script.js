const form = document.querySelector("form")
const input = document.querySelectorAll(".input")
const inputs = document.querySelectorAll("input")
const messages = document.querySelectorAll(".msg-error")

let isFormularyValid = false

let validateTelephone = /^(\+55|55)?(\s?)(\(?)(\d{2})(\)?)(\s?)(\d{4,5})(\s?)(\-?)(\d{4})$/g
let validateEmail = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

form.addEventListener("submit", (event) => {
    event.preventDefault()
    inputs.forEach((element, index) => {
        if (element.value === ""){
            input[index].className = "input active-error"
        }
    })
})


function validateInput(n){
    switch (n) {
        //Validando o Primeiro Nome ---------------------------
        case 0:
            if (inputs[n].value == ""){
                input[n].className = "input active-error"
                messages[n].innerText = "First Name cannot be empty"
            }else if(!/^[a-zA-Z]+$/.test(inputs[n].value)){
                input[n].className = "input active-error"
                messages[n].innerText = "Entered value is invalid"
            }else{
                input[n].className = "input active-correct"
            }
            break;
        
        //Validando o Sobrenome ---------------------------
        case 1:
            if (inputs[n].value == ""){
                input[n].className = "input active-error"
                messages[n].innerText = "Last Name cannot be empty"
            }else if(!/^[a-zA-Z]+$/.test(inputs[n].value)){
                input[n].className = "input active-error"
                messages[n].innerText = "Entered value is invalid"
            }else{
                input[n].className = "input active-correct"
            }
            break;

        //Validando o Telefone---------------------------
        case 2:
            if (inputs[n].value == ""){
                input[n].className = "input active-error"
                messages[n].innerText = "Phone number cannot be empty"
            }else if(!validateTelephone.test(inputs[n].value)){
                input[n].className = "input active-error"
                messages[n].innerText = "Phone number is incorrect"
            }else{
                input[n].className = "input active-correct"
            }
            break;

        //Validando o Email---------------------------
        case 3:
            if (inputs[n].value == ""){
                input[n].className = "input active-error"
                messages[n].innerText = "Email adrress cannot be empty"
            }else if(!validateEmail.test(inputs[n].value)){
                input[n].className = "input active-error"
                messages[n].innerText = "Email address is incorrect"
            }else{
                input[n].className = "input active-correct"
            }
            break;

        //Validando a Senha ---------------------------
        case 4:
            if (inputs[n].value == ""){
                input[n].className = "input active-error"
                messages[n].innerText = "Password cannot be empty"
            }else if(inputs[n].value.length < 6){
                input[n].className = "input active-error"
                messages[n].innerText = "At least 6 digits are required"
            }else{
                input[n].className = "input active-correct"
            }
            break;
    }
}


