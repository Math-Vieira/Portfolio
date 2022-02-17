const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function trocarFundo () {
    const pisca = setInterval(()=>{
        node.style.fill ='blue';
        setTimeout(()=>{
            node.style.fill ='red';
        }, 1000)
    },2000)
}

function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 125 * index)
    })
    
}

/* typeWriter(fName); */
maisHabilidades(botaoVerMais);

