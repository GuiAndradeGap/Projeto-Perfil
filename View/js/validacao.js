import ajax from './ajax.js'; // Certifique-se de que o caminho está correto

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verificar se o e-mail está preenchido e se é válido
    if (!email.value.trim()) {
        alert("Por favor, preencha o seu e-mail!");
        return;
    }
    if (!isEmailValid(email.value)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    // Verificar se a senha atende aos requisitos
    if (!senha.value.trim()) {
        alert("Por favor, preencha a sua senha!");
        return;
    }
    if (!validatePassword(senha.value)) {
        alert("A senha precisa ter no mínimo 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais!");
        return;
    }

    ajax(email, senha);
});

// Função que valida e-mail
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    return emailRegex.test(email);
}

// Função que valida senha
function validatePassword(senha) {
    const senhaRegex = new RegExp(
        /^(?=.*[a-z]).{8,}$/
    );
    return senhaRegex.test(senha);
}