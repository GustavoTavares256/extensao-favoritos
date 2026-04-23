function adicionarAvisoAmbiente () {
    const url = window.location.href;

    if (url.includes ('localhost') || url.includes('dev') || url.includes('homolog')) {

    const faixa = document.createElement('div');

    faixa.innerHTML = "<strong>CUIDADO:</strong> Você está no ambiente de DESENVOLVIMENTO"

    document.body.prepend(faixa);

    document.body.style.marginTop = "40px"

    window.addEventListener('load', adicionarAvisoAmbiente);
    } 
}