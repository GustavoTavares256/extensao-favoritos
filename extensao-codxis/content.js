function adicionarAvisoAmbiente() {
    const url = window.location.href;
    if (url.includes('localhost') || url.includes('dev') || url.includes('homolog')) {
        const faixa = document.createElement('div');
        faixa.innerHTML = "<strong>AVISO:</strong> AMBIENTE DE DESENVOLVIMENTO";
        faixa.style.cssText = "background: #ffcc00; color: #000; text-align: center; padding: 8px; position: fixed; top: 0; left: 0; width: 100%; z-index: 99999; font-weight: bold; font-family: sans-serif;";
        document.body.prepend(faixa);
        document.body.style.marginTop = "40px";
    }
}
window.addEventListener('load', adicionarAvisoAmbiente);