document.addEventListener('DOMContentLoaded', function () {

    /*Botao sobe*/

    window.addEventListener("scroll", function () {
        let sobe = document.querySelector('#sobe')
        sobe.classList.toggle('rolagem', window.scrollY > 0)
    })
});

function validar() {
    const nome = form1.nome.value;
    const email = form1.email.value;
    const telefone = form1.telefone.value;

    if (nome == "") {
        alert('Por favor, preencha o campo com seu nome');
        form1.nome.focus();
        return false;
    }
    if (email == "") {
        alert('Por favor, preencha o campo com seu E-mail');
        form1.email.focus();
        return false;
    }
    if (telefone == "") {
        alert('Por favor, preencha o campo com seu telefone');
        form1.telefone.focus();
        return false;
    }
    if (nome.length < 5) {
        alert('Digite seu nome completo');
        form1.nome.focus();
        return false;
    }
    else {
        alert('Seus dados foram registrados com sucesso!!                                           Logo entraremos em contato.')
    }
    return true;
}