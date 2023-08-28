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

// Função para verificar se as ferramentas de desenvolvimento estão abertas
function detectarFerramentasDeDesenvolvimento() {
    const devtools = /./;
    devtools.toString = function() {
        // Esta mensagem será exibida nas ferramentas de desenvolvimento
        alert('Não é permitido abrir as ferramentas de desenvolvimento.');
        // Redirecionar o usuário para o Google
        window.location.href = 'https://www.google.com';
    };

    // Imprimir o objeto devtools no console
    console.log(devtools);
}

// Chamar a função de detecção
detectarFerramentasDeDesenvolvimento();
