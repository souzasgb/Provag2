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
  
  // Frases de simulação que vão alternar a cada clique
  const frasesSimulacao = [
    "📡 Conectando aos sensores das coleiras... Tudo pronto!",
    "🐂 Monitorando Lote A: 142 animais ativos e saudáveis.",
    "⚠️ Alerta simulado: Temperatura do Boi #2741 subiu 0.5°C.",
    "📊 Relatório gerado! Sinais vitais sincronizados com a nuvem."
  ];

  const botaoDemo = document.getElementById("botaoDemo");
  const contadorCliques = document.getElementById("contadorCliques");
  const mensagemDemo = document.getElementById("mensagemDemo");

  if (botaoDemo && contadorCliques && mensagemDemo) {
    botaoDemo.addEventListener("click", () => {
      // 1. Incrementa e atualiza o contador na tela
      cliquesDemo++;
      contadorCliques.textContent = cliquesDemo;

      // 2. Escolhe uma frase com base no número de cliques usando o operador resto (%)
      const indiceFrase = (cliquesDemo - 1) % frasesSimulacao.length;
      mensagemDemo.textContent = frasesSimulacao[indiceFrase];

      // 3. Modifica as classes do elemento de texto dinamicamente
      mensagemDemo.classList.add("ativa");
      
      // Adiciona um pequeno efeito visual temporário no botão
      botaoDemo.style.transform = "scale(0.95)";
      setTimeout(() => {
        botaoDemo.style.transform = "";
      }, 100);
    });
  }
});