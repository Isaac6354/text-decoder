let textAreaInput = document.querySelector('.textarea-input');
let textAreaOutput = document.querySelector('.textarea-output');

function alterarTextAreaCriptografado() {
    document.querySelector('.container__textarea__vazio').setAttribute('style', 'display: flex');
    document.querySelector('.container__textarea__direita').setAttribute('style', 'display: none');
};


function limparTextAreaInput() {
    document.querySelector(".container__textarea__vazio").setAttribute("style", "display: none");
    document.querySelector(".container__textarea__direita").setAttribute("style", "display:flex");
    textAreaInput.value = '';
};

function verificarLetraMaiuscula(texto) {
    if(Boolean(texto.match(/[A-Z]/))){
        return true;
    }else{
        return false;
    }
}

function verificarCaractereEspecial(texto) {
    let caracteresEspeciais = /[^\u0000-\u007F]/;
    return caracteresEspeciais.test(texto);
}

function criptografarTexto() {
    let texto = textAreaInput.value;
    if (verificarLetraMaiuscula(texto) || verificarCaractereEspecial(texto)) {
        alert('A palavra não pode ter caracteres especiais ou letras maiúsculas.');
        limparTextAreaInput();
        alterarTextAreaCriptografado();
        return;
    }
    
    let textoCriptografado = window.btoa(texto);
    textAreaOutput.value = textoCriptografado;
    alterarTextAreaCriptografado();
    limparTextAreaInput();
}

function descriptografarTexto() {
    let textoDescriptografado = window.atob(textAreaInput.value);
    textAreaOutput.value = textoDescriptografado;
    alterarTextAreaCriptografado();
    limparTextAreaInput();
}

function copiarTextoCriptografado() {
    let textoCriptografado = document.querySelector('.textarea-output').value;
    try {
        navigator.clipboard.writeText(textoCriptografado);
        alert('Texto copiado para a área de transferência!!!');
      } catch (erro) {
        alert.error('Falha ao copiar o texto criptografado: ', +erro);
    }
}