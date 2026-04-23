document.addEventListener("DOMContentLoaded", function () {
  // Botão para abrir seu GitHub
  const btnRepo = document.getElementById("btn-repo");
  if (btnRepo) {
    btnRepo.addEventListener("click", () => {
      chrome.tabs.create({ url: "https://github.com" });
    });
  }

  // Botão para gerar UUID
  const btnDados = document.getElementById("btn-gerar");
  if (btnDados) {
    btnDados.addEventListener("click", () => {
      const uuid = crypto.randomUUID();
      navigator.clipboard.writeText(uuid).then(() => {
        const status = document.getElementById("status");
        status.innerText = "Copiado com sucesso!";
        setTimeout(() => {
          status.innerText = "";
        }, 2000);
      });
    });
  }
});
