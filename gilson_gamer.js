// Aguarda o DOM carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  // --- Atualização automática do ano no rodapé ---
  const elementoAno = document.getElementById("anoAtual");
  if (elementoAno) {
    const anoAtual = new Date().getFullYear();
    elementoAno.textContent = anoAtual;
  }
});