// Aguarda o DOM carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  
  // --- Atualização automática do ano no rodapé ---
  const elementoAno = document.getElementById("anoAtual");
  if (elementoAno) {
    const anoAtual = new Date().getFullYear();
    elementoAno.textContent = anoAtual;
  }

  // --- Lógica da Seção de Demonstração Interativa ---
  let cliquesDemo = 0;
  
  const botaoDemo = document.getElementById("botaoDemo");
  const contadorCliques = document.getElementById("contadorCliques");

  if (botaoDemo && contadorCliques) {
    botaoDemo.addEventListener("click", () => {
      // Incrementa o número de demonstrações ativadas
      cliquesDemo++;
      contadorCliques.textContent = cliquesDemo;
    });
  }
});