console.log("Ola")

const botaoAcessibilidade = document.querySelector('.btn-acessibilidade');
if(botaoAcessibilidade){
    botaoAcessibilidade.addEventListener('click', () => {
        document.body.classList.toggle('theme-high-contrast');
    });
}