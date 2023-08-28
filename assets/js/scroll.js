window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.desenho', {duration : 3000, origin: 'right'})
sr.reveal('.descricao', {duration : 3000, origin: 'left'})
sr.reveal('.linkedin', {duration : 3000,  origin: 'left'})
sr.reveal('.desenho-bg', {duration : 3000,  origin: 'left'})
sr.reveal('.sobre-mim', {duration : 3000, origin:'right'})
sr.reveal('.projetos-itens', {duration : 3000, origin:'bottom'})
sr.reveal('.project', {duration : 3000, origin:'bottom'})
sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
sr.reveal('.conteiner-skills', {duration : 3000, origin:'left'})
sr.reveal('.conteiner-descricao', {duration : 3000, origin:'right'})

let widthThreshold = window.outerWidth - window.innerWidth;

function detectarFerramentasDeDesenvolvimento() {
    if (window.outerWidth - window.innerWidth > widthThreshold) {
        console.log("Ferramentas de desenvolvimento abertas");
        // Aqui você pode chamar a função que deseja executar
    } else {
        alert('tá de boa')
    }
}

setInterval(detectarFerramentasDeDesenvolvimento, 1000);
