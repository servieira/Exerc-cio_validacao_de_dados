const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")


/*validação*/

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if (nameInput.value === ""){
        alert("Por favor preencha seu nome");
        return;
    }
    //verifica se o email está preenchido e se é valido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor preencha seu e-mail");
        return;
    }

    //verifica se está preenchida
    if(validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser de no mínimo 8 digitos.");
        return;
    }

    // verificar se a mensagemestá preenchida
    if (jobSelect.value === ""){
        alert("Por favor selecione sua situação");
        return;
    }

    // Verificar se a Situação foi selecionada
    if (messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    

    


    

//se todos os campos estiverem corretamente preenchidos, envie o form
form.submit();    
})


//função que valida e-mail

function isEmailValid(email) {

        //cria uma regex para validar e-mail
        const emailRegex = new RegExp(
            //usuario12@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true;
        }
        return false;
}

//função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        //sesenha valida
        return true
    }
    //se senha invalida
    return false;
}
