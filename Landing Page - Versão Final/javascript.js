function validar() {
    let nome = myForm.nome; //pega nome do formulário + id no campo que deseja validar
    //let phone = myForm.phone;
    let phone = document.getElementById('phone'); //pega o id do campo
    //let email = myForm.email;
    let email = document.querySelector('#email') //pega o id do campo COM # DO ID COMO NO CSS. E USA-SE PONTO SE FOR CLASS
    let segmento = document.querySelector('#segmento')
    let profissaonaolistada = myForm.profissaonaolistada;


    if (nome.value == "") {
        alert("Por favor, digite um nome válido!");
        nome.focus(); // volta o cursor para o campo em questão
        return;
    }

    if (phone.value == "") {
        alert("Por favor, digite um WhatsApp válido!");
        phone.focus();
        return;
    }
    if (email.value == "") {
        alert("Por favor, digite um e-mail válido!");
        email.focus();
        return;
    }

    if (segmento.value == 0) {
        alert("Por favor, selecione sua profissão!");
        return false;
    }

    if (profissaonaolistada.value == "") {
        alert("Por favor, digite um e-mail válido!");
        profissaonaolistada.focus();
        return;
    }

    alert("Seu formulário foi enviado. Obrigada por assinar nossa newsletter!     Em breve você receberá um e-mail confirmando sua cortesia.");
}