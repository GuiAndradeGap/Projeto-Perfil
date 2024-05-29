export default function ajax(email, senha) {
    let dados = {
        email: email.value,
        password: senha.value
    };

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Retorna o token para mim
        alert("Login com sucesso!");
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro no login: " + error.message);
    });
}