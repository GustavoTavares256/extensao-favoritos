document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Botão do Repositório
    const btnRepo = document.getElementById('btn-repo');
    btnRepo.addEventListener('click', () => {
        chrome.tabs.create({ url: 'https://github.com/GustavoTavares256' });
    });

    // 2. Botão do Gerador (Note que ele está DENTRO do DOMContentLoaded)
    const btnDados = document.getElementById('btn-gerar');
    btnDados.addEventListener('click', () => {
        const uuid = crypto.randomUUID();
        
        // Aqui corrigimos: .then(() => { ...
        navigator.clipboard.writeText(uuid).then(() => {
            const status = document.getElementById('status');
            status.innerText = "Copiado com sucesso!";
            
            // Aumentei para 2000ms para dar tempo de ler
            setTimeout(() => {
                status.innerText = "";
            }, 2000); 
        });
    });

}); // Este fecha o DOMContentLoaded lá do início