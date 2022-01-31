const meuNome = document.querySelector('.meu-nome');


function typeWriter (nome) {
    const meuNome = nome.innerHTML.split('');
    nome.innerHTML='';
    meuNome.forEach( (letra, index) => {
        setTimeout(function (){
            nome.innerHTML += letra;
        }, 100 * index)
    })
    
}

typeWriter(meuNome);
