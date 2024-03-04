const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
    document.querySelector('.btn-copiar').style.display = 'block';
    
    document.querySelector('h4').style.display = 'none';
    document.querySelector('h5').style.display = 'none';

    document.querySelector('.btn-copiar').style.display = 'block';
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
    
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    var textarea = document.querySelector('.mensagem');
    textarea.select();

    try {
        var sucesso = document.execCommand('copy');
        if (sucesso) {
            let textoCopiado = document.querySelector(".text-area")
            textoCopiado.innerHTML = "Texto copiado com sucesso!"
        } else {
            alert('Não foi possível copiar o texto.');
        }
    } catch (err) {
        alert('Erro ao copiar o texto: ' + err);
    }
}

